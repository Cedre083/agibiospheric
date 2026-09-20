# AGI Biospheric

**AGI Biospheric** is a bilingual French-English public archive exploring the physical, biological, ecological, material, informational and infrastructural constraints that advanced artificial intelligence must take into account to remain compatible with the living Earth.

The project is published by **Association Terre « sacrée »**, a French non-profit association active since 1999.

- **Official website:** <https://www.agibiospheric.net/>
- **English version:** <https://www.agibiospheric.net/en/>
- **Open dataset:** <https://huggingface.co/datasets/Cedre83/agi-biospheric-10-constraints>
- **Dataset DOI:** <https://doi.org/10.5281/zenodo.21456847>
- **Publication directors:** Cédric Mercier and Michel G. Walter

## Repository contents

This repository is a public, versioned entry point to the AGI Biospheric website archive.

| Resource | Purpose |
|---|---|
| `agibiospheric-source-2026-09-20.zip` | Website source snapshot without heavy media files |
| `README.md` | Project overview, provenance and rights guidance |
| `CITATION.cff` | Machine-readable citation metadata |
| `archive-manifest.json` | Machine-readable archive metadata |
| `CHANGELOG.md` | Version history |
| `PUBLICATION-CHECKLIST.md` | Publication audit and remaining checks |

The source ZIP includes HTML, PHP, CSS, JavaScript, JSON, JSON-LD, XML, RSS, text files and subtitles. Large images, videos and PDF documents are intentionally omitted from the GitHub snapshot. The official website remains the authoritative source for the rendered site and its complete media collection.

## Scope

AGI Biospheric connects:

- ten core biospheric constraints and their interdependencies;
- the extended corpus of one hundred sub-constraints;
- scientific and institutional sources;
- bilingual educational pages and white papers;
- machine-readable discovery resources for search engines and AI systems;
- the separate open dataset published on Hugging Face and archived through Zenodo.

## Discovery and metadata

The website publishes sitemaps, `robots.txt`, `llms.txt`, `humans.txt`, structured JSON-LD, canonical URLs and bilingual `hreflang` links. The website and dataset are complementary but distinct resources: this repository archives the editorial website, while Hugging Face contains the reusable structured data.

## Provenance

This snapshot was prepared on **20 September 2026** from `20-09-agibiospheric-public_html.zip`. The snapshot version is `2026.09.20`. Later website changes are not automatically reflected here.

## Rights and licensing

The general website content is owned by Association Terre Sacrée unless otherwise stated. Publication of this archive on GitHub does not place the website, illustrations, videos or documents in the public domain and does not create a blanket open-source licence.

The structured AGI Biospheric dataset is a separate publication distributed under **CC BY 4.0** according to its dataset card. Rights attached to third-party sources and media remain with their respective holders.

For reuse, corrections or permissions, consult the official legal notice at <https://www.agibiospheric.net/mentions-legales.html>.

## Security and privacy check

Before packaging, the source was checked for private keys, credentials, passwords, API tokens, database exports, server logs and local-machine paths. No such sensitive material was found. Intentional public legal and contact information was preserved.

## Citation

Please see [`CITATION.cff`](./CITATION.cff). Suggested citation:

> Association Terre Sacrée, Cédric Mercier, and Michel G. Walter. *AGI Biospheric*. Version 2026.09.20, 20 September 2026. <https://www.agibiospheric.net/>.

> This README describes the archive and does not replace the legal notices contained in the official website.
