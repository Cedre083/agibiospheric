(function () {
  'use strict';

  const dictionaries = {
    fr: [
      { terms: ['intelligence artificielle générale', 'AGI'], title: 'AGI — Intelligence artificielle générale', definition: 'Système d’intelligence artificielle hypothétique capable d’apprendre, de raisonner et d’agir dans un grand nombre de domaines, avec une polyvalence comparable ou supérieure à celle d’un être humain.' },
      { terms: ['biosphère', 'biosphérique', 'biosphériques'], title: 'Biosphère / Biosphérique', definition: 'La biosphère réunit les êtres vivants, les milieux qu’ils habitent et les relations qui rendent la vie possible sur Terre. Est biosphérique ce qui prend en compte cet ensemble et ses interdépendances.' },
      { terms: ['invariant', 'invariants'], title: 'Invariant', definition: 'Élément qui demeure stable lorsque le contexte ou le point de vue change. Dans une capsule biface, il désigne l’idée essentielle que les deux faces préservent.' },
      { terms: ['Réel'], title: 'Le Réel', definition: 'Ce qui existe et agit indépendamment de nos représentations : corps, matières, milieux, relations et contraintes physiques du monde.' },
      { terms: ['thermodynamique'], title: 'Thermodynamique', definition: 'Science des transformations de l’énergie, de la chaleur et du travail, ainsi que des limites physiques qui encadrent ces transformations.' },
      { terms: ['entropie'], title: 'Entropie', definition: 'Grandeur qui mesure la dispersion de l’énergie et l’irréversibilité des transformations. Toute conversion réelle dissipe une partie de l’énergie disponible.' },
      { terms: ['EROI', 'taux de retour énergétique'], title: 'EROI — Taux de retour énergétique', definition: 'Rapport entre l’énergie obtenue grâce à une ressource et l’énergie nécessaire pour l’extraire, la transformer et la rendre utilisable.' },
      { terms: ['densité énergétique'], title: 'Densité énergétique', definition: 'Quantité d’énergie stockée par unité de masse ou de volume. Elle influence directement les possibilités de transport, de stockage et d’usage.' },
      { terms: ['dissipation'], title: 'Dissipation', definition: 'Dispersion irréversible d’une énergie concentrée, le plus souvent sous forme de chaleur moins facilement utilisable.' },
      { terms: ['déplétion'], title: 'Déplétion', definition: 'Diminution progressive d’un stock ou d’une ressource à mesure de son extraction et de son utilisation.' },
      { terms: ['inertie'], title: 'Inertie', definition: 'Résistance d’un système au changement ou délai nécessaire pour qu’une transformation produise pleinement ses effets.' },
      { terms: ['rendement énergétique', 'efficacité énergétique'], title: 'Rendement énergétique', definition: 'Rapport entre l’énergie utile obtenue et l’énergie totale engagée dans une transformation ou un service.' },
      { terms: ['externalité', 'externalités'], title: 'Externalité', definition: 'Conséquence d’une activité dont le coût ou le bénéfice n’est pas entièrement assumé par ceux qui la réalisent.' },
      { terms: ['énergie grise'], title: 'Énergie grise', definition: 'Énergie totale mobilisée durant le cycle de vie d’un produit ou d’une infrastructure : extraction, fabrication, transport, entretien et fin de vie.' },
      { terms: ['biodiversité'], title: 'Biodiversité', definition: 'Diversité du vivant à trois niveaux complémentaires : les gènes, les espèces et les écosystèmes.' },
      { terms: ['écosystème', 'écosystèmes'], title: 'Écosystème', definition: 'Ensemble formé par une communauté d’êtres vivants, son milieu physique et toutes les interactions qui les relient.' },
      { terms: ['limites planétaires'], title: 'Limites planétaires', definition: 'Seuils biophysiques dont le franchissement augmente le risque de déstabiliser durablement le système Terre.' },
      { terms: ['point de bascule', 'points de bascule'], title: 'Point de bascule', definition: 'Seuil au-delà duquel une faible perturbation peut entraîner un changement important, parfois brutal et difficilement réversible.' },
      { terms: ['boucle de rétroaction', 'boucles de rétroaction', 'rétroaction'], title: 'Boucle de rétroaction', definition: 'Mécanisme par lequel les effets d’un phénomène agissent en retour sur sa cause, en l’amplifiant ou en la freinant.' },
      { terms: ['résilience'], title: 'Résilience', definition: 'Capacité d’un système vivant ou social à absorber une perturbation, à se réorganiser et à continuer de fonctionner sans perdre ses caractéristiques essentielles.' },
      { terms: ['homéostasie'], title: 'Homéostasie', definition: 'Capacité d’un organisme ou d’un système vivant à maintenir certains équilibres internes malgré les variations de son environnement.' },
      { terms: ['cycle du carbone'], title: 'Cycle du carbone', definition: 'Circulation du carbone entre l’atmosphère, les océans, les sols, les roches et les êtres vivants.' },
      { terms: ['albédo'], title: 'Albédo', definition: 'Part du rayonnement solaire renvoyée par une surface. La neige et la glace réfléchissent davantage de lumière que l’océan ou une forêt sombre.' },
      { terms: ['eutrophisation'], title: 'Eutrophisation', definition: 'Enrichissement excessif d’un milieu aquatique en nutriments, pouvant provoquer des proliférations d’algues et un manque d’oxygène.' },
      { terms: ['acidification des océans'], title: 'Acidification des océans', definition: 'Diminution du pH de l’eau de mer provoquée principalement par l’absorption d’une partie du dioxyde de carbone émis dans l’atmosphère.' },
      { terms: ['forçage radiatif'], title: 'Forçage radiatif', definition: 'Modification de l’équilibre entre l’énergie solaire reçue par la Terre et l’énergie qu’elle renvoie vers l’espace.' },
      { terms: ['budget carbone'], title: 'Budget carbone', definition: 'Quantité cumulée de dioxyde de carbone pouvant encore être émise tout en conservant une probabilité donnée de limiter le réchauffement.' },
      { terms: ['atténuation'], title: 'Atténuation climatique', definition: 'Actions destinées à réduire les émissions de gaz à effet de serre ou à renforcer leur absorption.' },
      { terms: ['cycle biogéochimique', 'cycles biogéochimiques'], title: 'Cycle biogéochimique', definition: 'Circulation d’un élément, comme le carbone, l’azote ou le phosphore, entre les êtres vivants et les milieux physiques de la Terre.' },
      { terms: ['microbiome', 'microbiomes'], title: 'Microbiome', definition: 'Ensemble des micro-organismes, de leurs gènes et de leurs interactions dans un milieu donné, par exemple un sol.' },
      { terms: ['eau douce'], title: 'Eau douce', definition: 'Eau naturellement peu salée présente notamment dans les rivières, les lacs, les glaciers, les sols et les nappes souterraines.' },
      { terms: ['nappe phréatique', 'nappes phréatiques'], title: 'Nappe phréatique', definition: 'Réserve d’eau souterraine contenue dans les pores ou les fissures d’une formation géologique proche de la surface.' },
      { terms: ['aquifère', 'aquifères'], title: 'Aquifère', definition: 'Formation géologique suffisamment perméable pour stocker et laisser circuler de l’eau souterraine.' },
      { terms: ['matières premières critiques', 'matériaux critiques', 'minerais critiques'], title: 'Matières premières critiques', definition: 'Ressources importantes pour l’économie ou les technologies, mais exposées à des risques élevés d’approvisionnement.' },
      { terms: ['infrastructures critiques'], title: 'Infrastructures critiques', definition: 'Équipements et réseaux indispensables au fonctionnement d’une société : énergie, eau, communications, santé, transports ou alimentation.' },
      { terms: ['effet rebond'], title: 'Effet rebond', definition: 'Augmentation d’un usage qui réduit une partie, voire la totalité, des économies attendues grâce à une amélioration d’efficacité.' },
      { terms: ['singularité technologique', 'singularité informatique'], title: 'Singularité technologique', definition: 'Hypothèse d’un moment où l’accélération des capacités de l’IA provoquerait des transformations très rapides et difficiles à prévoir ou à maîtriser.' },
      { terms: ['cybernétique'], title: 'Cybernétique', definition: 'Étude du contrôle, de la communication et des rétroactions dans les organismes, les machines et les systèmes complexes.' },
      { terms: ['anthropocentrisme', 'anthropocentrique'], title: 'Anthropocentrisme', definition: 'Vision qui place l’être humain au centre de l’évaluation du monde et considère souvent le reste du vivant principalement selon son utilité pour lui.' },
      { terms: ['empreinte écologique'], title: 'Empreinte écologique', definition: 'Estimation de la surface biologiquement productive nécessaire pour fournir les ressources consommées et absorber certains déchets d’une population.' },
      { terms: ['capacité de charge'], title: 'Capacité de charge', definition: 'Taille maximale d’une population qu’un milieu peut soutenir durablement compte tenu de ses ressources et de ses contraintes.' },
      { terms: ['espèce clé de voûte', 'espèces clés de voûte'], title: 'Espèce clé de voûte', definition: 'Espèce dont l’influence sur le fonctionnement d’un écosystème est disproportionnée par rapport à son abondance.' },
      { terms: ['réseau trophique', 'réseaux trophiques'], title: 'Réseau trophique', definition: 'Ensemble des relations alimentaires reliant les organismes d’un écosystème.' },
      { terms: ['épistémique'], title: 'Épistémique', definition: 'Qui concerne la connaissance : sa production, sa fiabilité, ses limites et les conditions permettant de la vérifier.' },
      { terms: ['émergence', 'émergent', 'émergente', 'émergents'], title: 'Émergence', definition: 'Apparition de propriétés nouvelles à l’échelle d’un système, issues des interactions entre ses éléments sans être réductibles à un seul d’entre eux.' },
      { terms: ['interdépendance', 'interdépendances'], title: 'Interdépendance', definition: 'Relation dans laquelle plusieurs éléments dépendent les uns des autres et où la modification de l’un peut affecter l’ensemble.' },
      { terms: ['système complexe', 'systèmes complexes'], title: 'Système complexe', definition: 'Ensemble composé de nombreux éléments en interaction dont le comportement global ne se déduit pas simplement de chaque élément pris isolément.' }
    ],
    en: [
      { terms: ['artificial general intelligence', 'AGI'], title: 'AGI — Artificial general intelligence', definition: 'A hypothetical AI system able to learn, reason and act across many domains with versatility comparable or superior to that of a human being.' },
      { terms: ['biosphere'], title: 'Biosphere', definition: 'All living beings, the environments they inhabit, and the relationships that make life possible on Earth.' },
      { terms: ['thermodynamics'], title: 'Thermodynamics', definition: 'The science of energy, heat and work, including the physical limits governing their transformations.' },
      { terms: ['entropy'], title: 'Entropy', definition: 'A measure of energy dispersal and the irreversibility of transformations. Every real conversion dissipates part of the available energy.' },
      { terms: ['EROI', 'energy return on investment'], title: 'EROI — Energy return on investment', definition: 'The ratio between the energy obtained from a resource and the energy required to extract, transform and deliver it.' },
      { terms: ['energy density'], title: 'Energy density', definition: 'The amount of energy stored per unit of mass or volume. It strongly affects transport, storage and practical use.' },
      { terms: ['dissipation'], title: 'Dissipation', definition: 'The irreversible dispersal of concentrated energy, most often as lower-quality heat that is harder to use.' },
      { terms: ['depletion'], title: 'Depletion', definition: 'The progressive decline of a finite stock or resource as it is extracted and used.' },
      { terms: ['inertia'], title: 'Inertia', definition: 'A system’s resistance to change, or the delay before a transformation produces its full effects.' },
      { terms: ['energy efficiency', 'efficiency'], title: 'Energy efficiency', definition: 'The ratio of useful energy output to the total energy supplied to a transformation or service.' },
      { terms: ['externality', 'externalities'], title: 'Externality', definition: 'A consequence of an activity whose cost or benefit is not fully borne by those carrying it out.' },
      { terms: ['embodied energy'], title: 'Embodied energy', definition: 'All energy used across the life cycle of a product or infrastructure: extraction, manufacture, transport, maintenance and end of life.' },
      { terms: ['biodiversity'], title: 'Biodiversity', definition: 'The diversity of life at three complementary levels: genes, species and ecosystems.' },
      { terms: ['ecosystem', 'ecosystems'], title: 'Ecosystem', definition: 'A community of living organisms, its physical environment, and all the interactions connecting them.' },
      { terms: ['planetary boundaries'], title: 'Planetary boundaries', definition: 'Biophysical thresholds beyond which the risk of lasting destabilisation of the Earth system increases.' },
      { terms: ['tipping point', 'tipping points'], title: 'Tipping point', definition: 'A threshold beyond which a small disturbance can cause a large, sometimes abrupt and difficult-to-reverse change.' },
      { terms: ['feedback loop', 'feedback loops'], title: 'Feedback loop', definition: 'A process in which the effects of a change act back on its cause, either amplifying or dampening it.' },
      { terms: ['resilience'], title: 'Resilience', definition: 'The capacity of a living or social system to absorb disturbance, reorganise and continue functioning without losing its essential characteristics.' },
      { terms: ['homeostasis'], title: 'Homeostasis', definition: 'The ability of an organism or living system to maintain internal balances despite changes in its environment.' },
      { terms: ['carbon cycle'], title: 'Carbon cycle', definition: 'The circulation of carbon among the atmosphere, oceans, soils, rocks and living organisms.' },
      { terms: ['albedo'], title: 'Albedo', definition: 'The fraction of incoming sunlight reflected by a surface. Snow and ice reflect more light than oceans or dark forests.' },
      { terms: ['eutrophication'], title: 'Eutrophication', definition: 'Excessive nutrient enrichment of water that can trigger algal blooms and oxygen depletion.' },
      { terms: ['ocean acidification'], title: 'Ocean acidification', definition: 'The decline in seawater pH caused mainly by the ocean absorbing part of the carbon dioxide emitted into the atmosphere.' },
      { terms: ['radiative forcing'], title: 'Radiative forcing', definition: 'A change in the balance between solar energy received by Earth and energy radiated back to space.' },
      { terms: ['carbon budget'], title: 'Carbon budget', definition: 'The cumulative amount of carbon dioxide that can still be emitted while retaining a stated probability of limiting warming.' },
      { terms: ['mitigation'], title: 'Climate mitigation', definition: 'Actions that reduce greenhouse-gas emissions or strengthen their removal from the atmosphere.' },
      { terms: ['biogeochemical cycle', 'biogeochemical cycles'], title: 'Biogeochemical cycle', definition: 'The circulation of an element such as carbon, nitrogen or phosphorus between living organisms and Earth’s physical environments.' },
      { terms: ['microbiome', 'microbiomes'], title: 'Microbiome', definition: 'The microorganisms, their genes and their interactions within a particular environment, such as soil.' },
      { terms: ['freshwater', 'fresh water'], title: 'Freshwater', definition: 'Naturally low-salinity water found in rivers, lakes, glaciers, soils and underground reserves.' },
      { terms: ['groundwater'], title: 'Groundwater', definition: 'Water stored below ground in the pores and fractures of soil and rock formations.' },
      { terms: ['aquifer', 'aquifers'], title: 'Aquifer', definition: 'A geological formation permeable enough to store and transmit groundwater.' },
      { terms: ['critical raw materials', 'critical materials', 'critical minerals'], title: 'Critical raw materials', definition: 'Resources important to economies or technologies that also face a high risk of supply disruption.' },
      { terms: ['critical infrastructure', 'critical infrastructures'], title: 'Critical infrastructure', definition: 'Facilities and networks essential to society, including energy, water, communications, healthcare, transport and food systems.' },
      { terms: ['rebound effect'], title: 'Rebound effect', definition: 'An increase in use that offsets some or all of the savings expected from an efficiency improvement.' },
      { terms: ['technological singularity'], title: 'Technological singularity', definition: 'The hypothesis that rapidly accelerating AI capabilities could trigger transformations that are exceptionally fast and difficult to predict or control.' },
      { terms: ['cybernetics'], title: 'Cybernetics', definition: 'The study of control, communication and feedback in organisms, machines and complex systems.' },
      { terms: ['anthropocentrism', 'anthropocentric'], title: 'Anthropocentrism', definition: 'A worldview that places humans at the centre of value and often assesses the rest of life mainly through its usefulness to people.' },
      { terms: ['ecological footprint'], title: 'Ecological footprint', definition: 'An estimate of the biologically productive area needed to supply a population’s consumption and absorb some of its wastes.' },
      { terms: ['carrying capacity'], title: 'Carrying capacity', definition: 'The largest population an environment can support over time given its resources and constraints.' },
      { terms: ['keystone species'], title: 'Keystone species', definition: 'A species whose influence on ecosystem functioning is disproportionately large relative to its abundance.' },
      { terms: ['food web', 'food webs'], title: 'Food web', definition: 'The network of feeding relationships connecting organisms within an ecosystem.' },
      { terms: ['epistemic'], title: 'Epistemic', definition: 'Relating to knowledge: how it is produced, how reliable it is, its limits and how it can be verified.' },
      { terms: ['emergence', 'emergent'], title: 'Emergence', definition: 'The appearance of new system-level properties arising from interactions among components and not reducible to any one component alone.' },
      { terms: ['interdependence', 'interdependencies'], title: 'Interdependence', definition: 'A relationship in which multiple elements depend on one another, so a change to one can affect the whole.' },
      { terms: ['complex system', 'complex systems'], title: 'Complex system', definition: 'A set of many interacting elements whose overall behaviour cannot be understood simply by examining each element in isolation.' }
    ]
  };

  function slugify(value) {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/['’]/g, '-')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80) || 'section';
  }

  function uniqueId(base) {
    let id = base;
    let index = 2;
    while (document.getElementById(id)) {
      id = base + '-' + index;
      index += 1;
    }
    return id;
  }

  function pageLanguage() {
    return (document.documentElement.lang || '').toLowerCase().startsWith('en') ? 'en' : 'fr';
  }

  function contentRoot() {
    return document.querySelector('main.container, main, article, .container');
  }

  function buildToc(root, language) {
    if (!root || root.querySelector('#sommaire, #table-of-contents, .page-toc, .agi-reading-toc, nav.toc')) {
      return;
    }

    const headings = Array.from(root.querySelectorAll('h2, h3')).filter((heading) => {
      return !heading.closest('nav, footer, .agi-reading-toc, [data-no-toc]');
    });
    const h1 = root.querySelector('h1');

    if (!h1 || headings.length < 2) {
      return;
    }

    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = uniqueId(slugify(heading.textContent.trim()));
      }
      heading.classList.add('agi-toc-heading');
    });

    const details = document.createElement('details');
    details.className = 'agi-reading-toc';
    details.id = language === 'en' ? 'table-of-contents' : 'sommaire';

    const summary = document.createElement('summary');
    const label = document.createElement('span');
    label.textContent = language === 'en' ? 'Table of contents' : 'Sommaire';
    const chevron = document.createElement('span');
    chevron.className = 'agi-reading-toc__chevron';
    chevron.setAttribute('aria-hidden', 'true');
    chevron.textContent = '⌄';
    summary.append(label, chevron);

    const body = document.createElement('div');
    body.className = 'agi-reading-toc__body';
    const list = document.createElement('ol');
    let currentNestedList = null;

    headings.forEach((heading) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent.trim().replace(/\s+/g, ' ');
      item.appendChild(link);

      if (heading.tagName === 'H3' && list.lastElementChild) {
        if (!currentNestedList) {
          currentNestedList = document.createElement('ol');
          list.lastElementChild.appendChild(currentNestedList);
        }
        currentNestedList.appendChild(item);
      } else {
        currentNestedList = null;
        list.appendChild(item);
      }
    });

    body.appendChild(list);
    details.append(summary, body);

    list.addEventListener('click', (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (link) {
        details.open = false;
      }
    });

    document.addEventListener('click', (event) => {
      if (details.open && !details.contains(event.target)) {
        details.open = false;
      }
    });

    const h1Container = h1.closest('header');
    const insertionPoint = h1Container && root.contains(h1Container) ? h1Container : h1;
    insertionPoint.insertAdjacentElement('afterend', details);

    headings.forEach((heading) => {
      const next = heading.nextElementSibling;
      if (next && (next.classList.contains('agi-back-to-toc') || next.classList.contains('back-to-top'))) {
        return;
      }
      const back = document.createElement('a');
      back.className = 'agi-back-to-toc';
      back.href = '#' + details.id;
      back.textContent = language === 'en' ? '↑ Contents' : '↑ Sommaire';
      back.setAttribute('aria-label', language === 'en' ? 'Back to table of contents' : 'Retour au sommaire');
      heading.insertAdjacentElement('afterend', back);
    });
  }

  function escapeRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function buildDialog(language) {
    const dialog = document.createElement('dialog');
    dialog.className = 'agi-definition-dialog';
    dialog.setAttribute('aria-labelledby', 'agi-definition-title');
    dialog.innerHTML =
      '<div class="agi-definition-dialog__inner">' +
        '<button class="agi-definition-dialog__close" type="button" aria-label="' +
          (language === 'en' ? 'Close definition' : 'Fermer la définition') + '">×</button>' +
        '<p class="agi-definition-dialog__eyebrow">' +
          (language === 'en' ? 'Definition' : 'Définition') + '</p>' +
        '<h2 class="agi-definition-dialog__title" id="agi-definition-title"></h2>' +
        '<p class="agi-definition-dialog__text"></p>' +
        '<p class="agi-definition-dialog__source"><a target="_blank" rel="noopener noreferrer"></a></p>' +
      '</div>';

    const close = () => {
      if (typeof dialog.close === 'function') {
        dialog.close();
      } else {
        dialog.removeAttribute('open');
      }
    };

    dialog.querySelector('.agi-definition-dialog__close').addEventListener('click', close);
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        close();
      }
    });

    document.body.appendChild(dialog);
    return dialog;
  }

  function addDefinitions(root, language) {
    if (!root || root.dataset.agiDefinitionsReady === 'true') {
      return;
    }
    root.dataset.agiDefinitionsReady = 'true';

    const entries = dictionaries[language];
    const termMap = new Map();
    entries.forEach((entry, entryIndex) => {
      entry.terms.forEach((term) => {
        termMap.set(term.toLocaleLowerCase(language), { entry, entryIndex });
      });
    });

    const alternatives = Array.from(termMap.keys())
      .sort((a, b) => b.length - a.length)
      .map(escapeRegex);
    const matcher = new RegExp('(^|[^\\p{L}\\p{N}])(' + alternatives.join('|') + ')(?=$|[^\\p{L}\\p{N}])', 'giu');
    const seenInBody = new Set();
    const seenInHeadings = new Set();
    const seenInAdjustedBlocks = new WeakMap();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        if (parent.closest('a, button, dialog, nav, summary, h1, script, style, code, pre, textarea, [data-no-definitions], .agi-reading-toc')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    let dialog = null;

    document.addEventListener('click', (event) => {
      const button = event.target.closest('.agi-definition-term[data-definition-index]');
      if (!button || !root.contains(button)) {
        return;
      }

      const entry = entries[Number(button.dataset.definitionIndex)];
      if (!entry) {
        return;
      }

      if (!dialog) {
        dialog = buildDialog(language);
      }

      dialog.querySelector('.agi-definition-dialog__title').textContent = entry.title;
      dialog.querySelector('.agi-definition-dialog__text').textContent = entry.definition;

      const source = dialog.querySelector('.agi-definition-dialog__source a');
      const wikipediaLanguage = language === 'en' ? 'en' : 'fr';
      source.href = 'https://' + wikipediaLanguage + '.wikipedia.org/wiki/Special:Search?search=' +
        encodeURIComponent(entry.terms[0]);
      source.textContent = language === 'en'
        ? 'Read more on Wikipedia ↗'
        : 'En savoir plus sur Wikipédia ↗';
      source.setAttribute('aria-label',
        (language === 'en' ? 'Search Wikipedia for ' : 'Rechercher sur Wikipédia : ') + entry.terms[0]);

      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
      } else {
        dialog.setAttribute('open', '');
      }
    });

    nodes.forEach((node) => {
      const text = node.nodeValue;
      matcher.lastIndex = 0;
      let match;
      let cursor = 0;
      let changed = false;
      const fragment = document.createDocumentFragment();

      while ((match = matcher.exec(text)) !== null) {
        const matchedTerm = match[2];
        const mapped = termMap.get(matchedTerm.toLocaleLowerCase(language));
        const inHeading = Boolean(node.parentElement.closest('h2, h3, h4, h5, h6'));
        const adjustedBlock = node.parentElement.closest('.paragraphe-ajuste');
        let seenSet;
        if (inHeading) {
          seenSet = seenInHeadings;
        } else if (adjustedBlock) {
          if (!seenInAdjustedBlocks.has(adjustedBlock)) {
            seenInAdjustedBlocks.set(adjustedBlock, new Set());
          }
          seenSet = seenInAdjustedBlocks.get(adjustedBlock);
        } else {
          seenSet = seenInBody;
        }
        if (!mapped || seenSet.has(mapped.entryIndex)) {
          continue;
        }

        const termStart = match.index + match[1].length;
        fragment.appendChild(document.createTextNode(text.slice(cursor, termStart)));

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'agi-definition-term';
        button.textContent = matchedTerm;
        button.dataset.definitionIndex = String(mapped.entryIndex);
        button.setAttribute('aria-haspopup', 'dialog');
        button.setAttribute('aria-label',
          (language === 'en' ? 'Definition of ' : 'Définition de ') + matchedTerm);

        fragment.appendChild(button);
        cursor = termStart + matchedTerm.length;
        seenSet.add(mapped.entryIndex);
        changed = true;
      }

      if (changed) {
        fragment.appendChild(document.createTextNode(text.slice(cursor)));
        node.parentNode.replaceChild(fragment, node);
      }
    });
  }

  function initReadingAids() {
    const root = contentRoot();
    const language = pageLanguage();
    buildToc(root, language);
    addDefinitions(root, language);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReadingAids, { once: true });
  } else {
    initReadingAids();
  }
})();
