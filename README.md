# AGI Biospheric

**AGI Biospheric** is a bilingual French-English public archive exploring the physical, biological, ecological, material, informational, and infrastructural constraints that advanced artificial intelligence must take into account to remain compatible with the living Earth.

The project is published by **Association Terre « sacrée »**, a French non-profit association active since 1999.

- **Official website:** <https://www.agibiospheric.net/>
- **English version:** <https://www.agibiospheric.net/en/>
- **Public GitHub repository:** <https://github.com/Cedre083/agibiospheric>
- **Open dataset:** <https://huggingface.co/datasets/Cedre83/agi-biospheric-10-constraints>
- **Dataset DOI:** <https://doi.org/10.5281/zenodo.21456847>
- **Publication directors:** Cédric Mercier and Michel G. Walter

## Repository contents

This repository contains a lightweight, verified website snapshot together with provenance and citation metadata. The current snapshot is available both as browsable text resources in [`website/`](./website/) and as [`agibiospheric-source-2026-09-21.zip`](./agibiospheric-source-2026-09-21.zip).

| Resource | Purpose |
|---|---|
| [`website/`](./website/) | Browsable HTML, CSS, JavaScript, JSON-LD, XML, RSS, robots, and text resources |
| [`agibiospheric-source-2026-09-21.zip`](./agibiospheric-source-2026-09-21.zip) | Downloadable source snapshot |
| [`CITATION.cff`](./CITATION.cff) | Machine-readable citation metadata |
| [`archive-manifest.json`](./archive-manifest.json) | Machine-readable archive metadata |
| [`CHANGELOG.md`](./CHANGELOG.md) | Version history |
| [`PUBLICATION-CHECKLIST.md`](./PUBLICATION-CHECKLIST.md) | Publication audit and scope |

Images, videos, PDF documents, and heavy visual assets are intentionally omitted from this lightweight GitHub snapshot. They remain available from the official website. This repository is an archival snapshot and is not presented as a guaranteed standalone deployment package.

## Structured dataset and synchronization

The reusable structured dataset is maintained separately under [`dataset/`](./dataset/) and published at [Hugging Face](https://huggingface.co/datasets/Cedre83/agi-biospheric-10-constraints). A GitHub Actions workflow mirrors this directory to Hugging Face when a write-scoped `HF_TOKEN` secret is configured. The dataset is also archived through [Zenodo DOI 10.5281/zenodo.21456847](https://doi.org/10.5281/zenodo.21456847).

The editorial website archive and the structured dataset have different scopes and rights. The website archive does not acquire the dataset licence merely because both resources are stored in this repository. See [`SYNC.md`](./SYNC.md) for the synchronization procedure.

## Scope

AGI Biospheric connects ten core biospheric constraints and their interdependencies, an extended corpus of one hundred sub-constraints, scientific and institutional sources, bilingual educational pages and white papers, and machine-readable discovery resources. The separate structured dataset is published on Hugging Face and archived through Zenodo.

## Discovery and metadata

The official website publishes sitemaps, `robots.txt`, `llms.txt`, `humans.txt`, structured Schema.org JSON-LD, canonical URLs, and bilingual `hreflang` links. The website archive and the structured dataset are complementary but distinct resources.

## Provenance

This snapshot was retrieved from the official website on **21 September 2026**. Its version is `2026.09.21`; the archive checksum is recorded in [`archive-manifest.json`](./archive-manifest.json). Later website changes are not automatically reflected here.

## Rights and licensing

The general website content is owned by Association Terre Sacrée unless otherwise stated. Publication of this archive on GitHub does not place the website, illustrations, videos, or documents in the public domain and does not create a blanket open-source licence. The structured AGI Biospheric dataset is a separate publication distributed under **CC BY 4.0** according to its dataset card. Rights attached to third-party sources and media remain with their respective holders.

For reuse, corrections, or permissions, consult the official legal notice at <https://www.agibiospheric.net/mentions-legales.html>.

## Security and privacy check

The retrieved text resources were checked for private keys, credentials, passwords, API tokens, database exports, server logs, and local-machine paths. No such sensitive material was found. Intentional public legal and contact information was preserved.

## Citation

Please see [`CITATION.cff`](./CITATION.cff). Suggested citation:

> Association Terre Sacrée, Cédric Mercier, and Michel G. Walter. *AGI Biospheric*. Version 2026.09.21, 21 September 2026. <https://github.com/Cedre083/agibiospheric>.

> This README describes the archive and does not replace the legal notices contained in the official website.
