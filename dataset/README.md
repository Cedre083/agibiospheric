---
language:
- fr
- en
license: cc-by-4.0
pretty_name: AGI Biospheric — 10 Core Biospheric Constraints and 52 Interdependencies
description: >-
  Bilingual (French/English) structured dataset modeling 10 core biospheric
  constraints (ABI-001 to ABI-010) and 52 direct interdependencies relevant
  to AGI alignment, ecological limits, civilizational resilience, and the
  material conditions of intelligence. Maintained by Association Terre
  sacrée as part of the agibiospheric.net project.
tags:
- agi
- artificial-general-intelligence
- ai-alignment
- biosphere
- biospheric-constraints
- ecology
- earth-system
- systems-thinking
- climate
- biodiversity
- freshwater
- ocean
- soils
- infrastructures
- information
- energy
- matter
- living-systems
- knowledge-graph
- semantic-web
- multilingual
size_categories:
- n<1K
task_categories:
- other
configs:
- config_name: default
  data_files:
  - split: train
    path: constraints-en.json
---

# AGI Biospheric — 10 Core Biospheric Constraints and 52 Interdependencies

## Overview

**AGI Biospheric** is a bilingual (**French / English**) structured dataset modeling **10 core biospheric constraints** and **52 direct interdependencies** relevant to long-term reflection on **AGI alignment**, **ecological limits**, **civilizational resilience**, and the material conditions of intelligence.

This repository is the **first public machine-readable release** of the AGI Biospheric framework. It should be understood as the **semantic nucleus** of a broader future corpus dedicated to the biospheric conditions of advanced intelligence systems.

Rather than treating AGI alignment only as a problem of values, governance, or model behavior, AGI Biospheric proposes a complementary hypothesis:

> **No serious long-term alignment framework can remain complete if it ignores the biospheric, material, energetic, hydrological, ecological, and infrastructural conditions that make civilization possible.**

This V1.2.1 dataset does **not yet contain the future 100-constraint corpus** envisioned by the broader AGI Biospheric project. Instead, it publishes the current **core architecture** of that future corpus:
- **10 foundational biospheric constraints**
- **52 documented direct interdependencies**
- **French and English structured formulations**
- **a machine-readable interdependency graph**
- **a first scientific bibliography layer**
- **constraint-level scientific metadata and AGI relevance fields**
- **normalized cross-file canonical identifiers**

---

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21456847.svg)](https://doi.org/10.5281/zenodo.21456847)

**Cite this dataset:** Mercier, C. & Walter, M. (2026). *AGI-Biospheric 10 Constraints Dataset (ABI-001–ABI-010)*. Zenodo. https://doi.org/10.5281/zenodo.21456847

---

# Important Hugging Face note

This repository contains **several complementary JSON resources**:
- constraint files
- bibliography
- graph representation
- interdependency matrix
- dataset metadata
- ecosystem links

For Hugging Face automatic dataset preview, the **default parsed tabular dataset** is intentionally limited to:

- **`constraints-en.json`**

The other JSON files remain part of the public repository as **supporting structured resources** for bilingual, graph, bibliographic, and metadata use.

This avoids forcing heterogeneous JSON structures into a single tabular schema.

---

# Why this dataset exists

Most AGI and AI alignment discussions focus on:
- model objectives,
- human values,
- safety and misuse,
- governance,
- constitutional rules,
- institutional oversight,
- or technical robustness.

These dimensions matter. But they remain incomplete if advanced intelligence systems are not also situated within the **material and biospheric conditions of planetary habitability and civilizational continuity**.

No intelligence system, however powerful, can remain meaningful if it ignores the finite and interdependent conditions of:
- **energy**
- **freshwater**
- **living soils**
- **biodiversity**
- **climate**
- **oceanic regulation**
- **material extraction**
- **information infrastructures**
- **physical infrastructures**
- and the broader **Living world**

The AGI Biospheric framework therefore treats AGI alignment not only as a human preference problem, but also as a **biospheric constraint problem**.

---

# What this dataset contains

This repository contains the following files:

## Main parsed dataset on Hugging Face
- **`constraints-en.json`** — canonical English constraint dataset used as the default Hugging Face tabular dataset preview

## Core corpus / structured companion files
- **`constraints-fr.json`** — French version of the 10 core biospheric constraints, enriched with scientific metadata and canonical slug mapping
- **`interdependency-matrix.json`** — machine-readable representation of the 52 direct interdependencies, normalized around canonical English slugs

## Context / support files
- **`ecosystem-links.json`** — links to the broader AGI Biospheric ecosystem
- **`sources.json`** — scientific and institutional bibliography supporting the constraint families
- **`constraints-graph.json`** — graph-oriented representation of the dataset (nodes + edges)
- **`dataset-metadata.json`** — machine-readable summary of the dataset
- **`README.md`** — this dataset card

---

# The 10 core biospheric constraints

The current V1.2.1 dataset is structured around the following 10 core constraints:

1. **Energy**
2. **Freshwater**
3. **Living Soils**
4. **Biodiversity**
5. **Climate**
6. **Ocean**
7. **Matter**
8. **Information**
9. **Infrastructures**
10. **Living Systems**

These constraints are not treated as isolated categories. They are modeled as a **dense interdependent system**.

---

# Interdependency logic

The dataset documents **52 direct interdependencies** between the 10 constraints.

Examples:
- **Energy → Climate**
  Fossil energy is a direct driver of climate disruption through greenhouse gas emissions.

- **Climate → Ocean**
  The ocean absorbs most excess heat and a substantial share of anthropogenic CO₂.

- **Matter → Information**
  Digital information depends on physical substrates: chips, servers, cables, storage media, and critical minerals.

- **Freshwater → Living Systems**
  No terrestrial ecosystem can function without accessible freshwater.

- **Information → Biodiversity**
  Biodiversity monitoring depends on observation systems, distributed information infrastructures, and long-term ecological data.

The purpose is not merely to classify ecological themes, but to expose the **structural dependence network** underlying biospheric viability.

---

# What changed in V1.2 / V1.2.1

Compared with the earlier release, **V1.2 strengthens the scientific and conceptual structure of the dataset**, and **V1.2.1 improves internal machine-readable consistency across files**.

The two bilingual constraint files (`constraints-fr.json` and `constraints-en.json`) now include additional metadata fields for each of the 10 constraints:

- **`scientific_scope`** — the main scientific dimensions covered by the constraint
- **`keywords`** — a compact thematic vocabulary for retrieval, indexing, and reuse
- **`source_refs`** — references to supporting entries in `sources.json`
- **`agi_relevance`** — a short explanation of why the constraint matters for AGI / AI alignment and long-term machine reasoning

The bibliography file `sources.json` has also been strengthened so that each source now includes:
- a **constraint family**
- a list of **supported constraints**
- a short **summary**
- and a more explicit **relevance note**

**V1.2.1 additionally normalizes inter-file identifiers around canonical English slugs** (`energy`, `freshwater`, `living-soils`, etc.) while preserving French slugs and labels for bilingual readability.

This makes the dataset more useful not only as a conceptual corpus, but also as a **machine-readable scaffold for future biospheric alignment work**.

---

# Intended uses

This dataset may be useful for:

- **AGI / AI alignment research**
- **biosphere-centered AI governance**
- **knowledge graph construction**
- **semantic web projects**
- **ontology prototyping**
- **cross-lingual corpus analysis**
- **systems thinking and resilience studies**
- **educational resources on ecological interdependence**
- **machine-readable internal linking architectures**
- **experimental prompts / RAG / retrieval systems centered on ecological constraints**
- **AI systems that need a compact structured representation of biospheric dependencies**

---

# How to use this dataset

## 1. As a bilingual conceptual corpus
The `constraints-fr.json` and `constraints-en.json` files can be used as a small bilingual corpus on biospheric interdependence, ecological constraints, material limits, and AGI-relevant systemic dependencies.

## 2. As a graph of direct dependencies
The `interdependency-matrix.json` and `constraints-graph.json` files can be used to build:
- graph visualizations,
- knowledge graphs,
- ontology drafts,
- causal discussion maps,
- semantic navigation layers,
- or exploratory AI alignment datasets.

## 3. As a structured metadata layer
Because each constraint now includes:
- `scientific_scope`
- `keywords`
- `source_refs`
- `agi_relevance`

the dataset can also be used as a lightweight **biospheric metadata layer** for:
- RAG systems,
- taxonomy work,
- semantic enrichment,
- prompt design,
- or AI assistants reasoning over ecological dependencies.

## 4. As a conceptual scaffold for future expansion
The dataset is intentionally structured so that future versions can scale from **10 core constraints** toward a **100-constraint biospheric corpus** without changing the general architecture.

# Towards the 100-Constraint Corpus (in progress)

*(Vers le corpus des 100 contraintes — en cours de publication)*

As announced in section 4 above, the AGI Biospheric framework is designed to scale from the **10 core biospheric constraints** toward a **100-constraint corpus** — 10 sub-constraints detailed under each of the 10 core domains, matching the constraints already published on the companion website at [agibiospheric.net/les-100-contraintes.html](https://www.agibiospheric.net/les-100-contraintes.html).

Each domain is released as a pair of files (`<domain>-fr.json` / `<domain>-en.json`), following the same bilingual logic as the core `constraints-fr.json` / `constraints-en.json` files, but is **not** included in the default Hugging Face tabular preview (which remains limited to `constraints-en.json`, per the note above) to avoid mixing schemas.

## Publication status

| # | Core domain (ABI-0xx) | Sub-constraints domain | Status | Files |
|---|------------------------|-------------------------|--------|-------|
| 1 | Energy / Énergie | 10 sub-constraints (Availability, Density, Conversion, Transport, Storage, Dissipation, Efficiency, Inertia, Depletion, Real Cost) | ✅ Published | `energie-fr.json` / `energie-en.json` |
| 2 | Freshwater / Eau douce | 10 sub-constraints (Availability, Quality, Variability, Natural Storage, Pollution, Competition, Evaporation, Droughts, Floods, Water Justice) | ✅ Published | `eau-douce-fr.json` / `eau-douce-en.json` |
| 3 | Living Soils / Sols vivants | 10 sub-constraints (Microbiomes, Fertility, Slowness, Erosion, Structure, Humus, Fungal Networks, Compaction, Pollution, Desertification) | ✅ Published | `sols-vivants-fr.json` / `sols-vivants-en.json` |
| 4 | Biodiversity / Biodiversité | 10 sub-constraints (Networks, Functions, Resilience, Niches, Pollination, Decomposers, Symbioses, Fragmentation, Extinctions, Lost Functions) | ✅ Published | `biodiversite-fr.json` / `biodiversite-en.json` |
| 5 | Climate / Climat | 10 sub-constraints (Inertia, Trajectories, Extremes, Redistribution, Oceans, Glaciers, Rainfall, Droughts, Storms, Heat) | ✅ Published | `climat-fr.json` / `climat-en.json` |
| 6 | Ocean / Océan | 10 sub-constraints (Heat, Acidification, Currents, Upwellings, Dead Zones, Reefs, Migration, Oxygen, Pollution, Biogeochemical Cycles) | ✅ Published | `ocean-fr.json` / `ocean-en.json` |
| 7 | Matter / Matière | 10 sub-constraints (Scarcity, Extraction, Geology, Metals, Rare Earths, Recycling, Waste, Energy Cost, Transport, Sufficiency) | ✅ Published | `matiere-fr.json` / `matiere-en.json` |
| 8 | Information | 10 sub-constraints (Signal, Noise, Speed, Overload, Memory, Bias, Propagation, Manipulation, Fragmentation, Lucidity) | ✅ Published | `information-fr.json` / `information-en.json` |
| 9 | Infrastructures | 10 sub-constraints (Dependency, Entropy, Aging, Cascades, Cost, Saturation, Climate, Rigidity, Fragmentation, Repair) | ✅ Published | `infrastructures-fr.json` / `infrastructures-en.json` |
| 10 | Living Systems / Systèmes humains | 10 sub-constraints (Social Speed, Attention, Fragility, Polarization, Complexity, Inequality, Collective Stress, Technological Dependency, Loss of Meaning, Breakdowns) | ✅ Published | `systemes-humains-fr.json` / `systemes-humains-en.json` |

**🎉 Les 100 contraintes sont désormais publiées dans leur intégralité (10 domaines × 10 sous-contraintes).**

## Sub-constraint file structure

Each `<domain>-fr.json` / `<domain>-en.json` file follows this structure:

```json
{
  "domain_id": "energie",
  "domain_canonical_slug": "energy",
  "domain_label": "Énergie",
  "domain_index": 1,
  "version": "0.1-draft",
  "constraints": [
    {
      "id": "energie-01",
      "canonical_id": "energy-01",
      "name": "Disponibilité",
      "type": "constat",
      "statement": "L'énergie accessible conditionne toute action.",
      "condition": "any_agent_action",
      "threshold": null,
      "injunction": "Évaluer systématiquement le coût énergétique disponible avant toute planification d'action.",
      "related_constraints": ["energie-09", "matiere-08"]
    }
  ]
}
```

- `domain_id` / `domain_canonical_slug` map each sub-constraint domain back to its corresponding core constraint (`ABI-0xx`) in `constraints-en.json`.
- `id` follows the pattern `<domain>-0x` (French domain name); `canonical_id` follows `<canonical-slug>-0x` for cross-file machine resolution.
- `related_constraints` may reference sub-constraints from other domains not yet published; these are forward references to the completed 100-constraint corpus.

## 5. As a machine-readable companion to the AGI Biospheric web ecosystem
This dataset is designed to complement the public AGI Biospheric web ecosystem and to provide a structured layer readable by humans, search engines, and AI systems.

---

# Research relevance for AGI / AI alignment

AGI Biospheric is based on a simple proposition:

> If advanced intelligence systems are expected to reason about the long-term future of civilization, they must not reason as if civilization were materially abstract.

In practice, this means that AGI reflection should not ignore:
- the energy basis of digital systems,
- the freshwater dependency of industrial and thermal infrastructures,
- the role of soils and biodiversity in food systems,
- the ocean's role in climate regulation,
- the material footprint of information infrastructures,
- and the fragility of physical infrastructures under climate disruption.

This dataset does **not** solve AGI alignment. It contributes a **biospheric layer of constraints** that can be combined with other alignment, governance, and safety frameworks.

---

# Data structure

## `constraints-fr.json` and `constraints-en.json`

Each constraint object follows a shared bilingual structure, with one important difference:

- **`constraints-en.json`** uses **canonical English slugs** directly
- **`constraints-fr.json`** preserves **French slugs** for readability and adds a **`canonical_slug`** field to map each French constraint to the canonical English identifier

### Example structure — `constraints-en.json`

```json
{
  "id": "ABI-001",
  "slug": "energy",
  "lang": "en",
  "title": "Energy",
  "description": "Core biospheric constraint related to energy systems.",
  "scientific_scope": [
    "energy flows",
    "electricity generation",
    "energy infrastructures"
  ],
  "keywords": [
    "electricity",
    "grids",
    "energy transition"
  ],
  "source_refs": ["SRC-001", "SRC-007"],
  "agi_relevance": "Large-scale AI depends on energy-intensive infrastructures.",
  "linked_constraints": [
    {
      "target_slug": "climate",
      "target_title": "Climate",
      "relation_type": "direct_interdependency",
      "justification": "Fossil energy is a direct driver of climate disruption."
    }
  ]
}
```