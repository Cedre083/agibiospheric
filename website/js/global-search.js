/**
 * Global Search Engine for AGI Biospheric & Partners
 * Final Robust Version by Manus
 */

// Certaines pages anglaises historiques ne déclarent pas la feuille de style
// du moteur. Le script la charge lui-même si nécessaire afin que la fenêtre
// reste utilisable partout, sans doublon sur les pages déjà conformes.
(function ensureGlobalSearchStyles() {
    const stylesheetPresent = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .some(link => {
            try {
                return new URL(link.href, document.baseURI).pathname === '/css/global-search.css';
            } catch (_) {
                return false;
            }
        });

    if (!stylesheetPresent) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/css/global-search.css';
        link.dataset.globalSearchStyle = 'auto';
        document.head.appendChild(link);
    }
})();

let GLOBAL_INDEX = [];
let globalIndexLoaded = false;
let isFetching = false;

function normalize(str) {
    if (!str) return '';
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ').trim();
}

async function loadGlobalIndex() {
    if (globalIndexLoaded || isFetching) return;
    const statusEl = document.getElementById('search-status');
    if (statusEl) statusEl.textContent = 'Chargement de l\'index...';
    isFetching = true;
    try {
        const res = await fetch('https://www.agibiospheric.net/search-index.json');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data)) {
            GLOBAL_INDEX = data;
            globalIndexLoaded = true;
            if (statusEl) statusEl.textContent = '';
        }
    } catch (err) {
        console.error("Erreur chargement index global:", err);
        if (statusEl) statusEl.textContent = 'Erreur de chargement.';
    } finally {
        isFetching = false;
    }
}

function getSelectedSites() {
    const checkboxes = document.querySelectorAll('.site-filters input:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function globalSearch(query) {
    const q = normalize(query);
    if (q.length < 2) return [];
    const allowedSites = getSelectedSites();
    if (allowedSites.length === 0) return [];
    const queryWords = q.split(/\s+/).filter(w => w.length > 0);
    return GLOBAL_INDEX
        .filter(doc => allowedSites.includes(doc.site))
        .map(doc => {
            const title = doc.title || '';
            const excerpt = doc.excerpt || '';
            const tags = Array.isArray(doc.tags) ? doc.tags.join(' ') : '';
            const haystack = normalize(`${title} ${excerpt} ${tags}`);
            let score = 0;
            queryWords.forEach(word => {
                if (normalize(title).includes(word)) score += 10;
                if (normalize(excerpt).includes(word)) score += 2;
                if (normalize(tags).includes(word)) score += 5;
            });
            return { ...doc, score };
        })
        .filter(doc => doc.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 20);
}

function renderGlobalResults(results, query) {
    const ul = document.getElementById('global-search-results');
    if (!ul) return;
    ul.innerHTML = '';
    if (query.trim().length > 0 && query.trim().length < 2) {
        ul.innerHTML = '<li class="search-info">Veuillez saisir au moins 2 caractères.</li>';
        return;
    }
    if (!results.length) {
        if (query.trim().length >= 2) ul.innerHTML = '<li class="search-info">Aucun résultat trouvé.</li>';
        return;
    }
    results.forEach(doc => {
        const li = document.createElement('li');
        li.className = 'search-result-item';
        let displayTitle = doc.title;
        let displayExcerpt = doc.excerpt || '';
        const q = query.trim();
        if (q) {
            const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            displayTitle = displayTitle.replace(regex, '<mark>$1</mark>');
            displayExcerpt = displayExcerpt.replace(regex, '<mark>$1</mark>');
        }
        li.innerHTML = `
            <a href="${doc.url}" target="_blank" rel="noopener" class="result-link">
                <div class="result-site-tag">${doc.site}</div>
                <div class="result-title">${displayTitle}</div>
                <div class="result-excerpt">${displayExcerpt}</div>
            </a>
        `;
        ul.appendChild(li);
    });
}

function openGlobalSearch() {
    const overlay = document.getElementById('global-search-overlay');
    const input = document.getElementById('modal-search-input');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (input) setTimeout(() => input.focus(), 50);
}

function closeGlobalSearch() {
    const overlay = document.getElementById('global-search-overlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function initSearch() {
    const headerInput = document.getElementById('global-search-input');
    const modalInput = document.getElementById('modal-search-input');
    const overlay = document.getElementById('global-search-overlay');
    const closeBtn = document.querySelector('.close-search');

    if (headerInput) {
        // Use onclick directly to bypass potential event propagation issues
        headerInput.onclick = (e) => {
            e.preventDefault();
            openGlobalSearch();
            loadGlobalIndex();
        };
    }

    if (modalInput) {
        modalInput.oninput = (e) => {
            const query = e.target.value;
            const results = globalSearch(query);
            renderGlobalResults(results, query);
        };
    }

    if (overlay) {
        overlay.onclick = (e) => { if (e.target === overlay) closeGlobalSearch(); };
    }

    if (closeBtn) {
        closeBtn.onclick = closeGlobalSearch;
    }

    const filters = document.querySelector('.site-filters');
    if (filters) {
        filters.onchange = () => {
            const query = modalInput ? modalInput.value : '';
            const results = globalSearch(query);
            renderGlobalResults(results, query);
        };
    }
}

// Re-init when DOM changes (important for async header loading)
const observer = new MutationObserver((mutations) => {
    if (document.getElementById('global-search-input')) {
        initSearch();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    observer.observe(document.body, { childList: true, subtree: true });
});

// ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeGlobalSearch();
});
