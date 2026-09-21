# Synchronisation des archives

## Sources de référence

Le site éditorial est versionné dans le dossier `website/` et archivé par les releases GitHub. Le dataset structuré est versionné dans le dossier `dataset/` et doit être synchronisé vers Hugging Face. Les deux ressources sont volontairement séparées.

## Hugging Face

Le workflow [`sync-dataset-to-huggingface.yml`](./.github/workflows/sync-dataset-to-huggingface.yml) synchronise `dataset/` vers `Cedre83/agi-biospheric-10-constraints` à chaque modification de ce dossier sur `main`. Il peut aussi être lancé manuellement depuis l’onglet **Actions**.

Avant le premier lancement, ajouter dans les secrets Actions du dépôt GitHub un token Hugging Face à portée limitée au dépôt dataset :

```text
HF_TOKEN
```

Le token doit disposer du droit d’écriture sur `Cedre83/agi-biospheric-10-constraints`. Ne jamais le placer dans un fichier du dépôt, un README, une release ou un commit.

## Zenodo

Zenodo doit être relié au dépôt GitHub public `Cedre083/agibiospheric`. Une nouvelle release GitHub, telle que `v2026.09.21`, est alors archivée comme une version distincte et reçoit un DOI versionné. Le DOI du dataset structuré `10.5281/zenodo.21456847` reste séparé du DOI de l’archive éditoriale.

## Contrôle avant publication

Avant chaque publication, vérifier la version, les fichiers, le checksum, les droits, la provenance et la cohérence des liens entre GitHub, Hugging Face, Zenodo et le site officiel.
