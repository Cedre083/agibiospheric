# Public GitHub publication checklist

## Completed for this package

- searched text files for common credentials, tokens, passwords and private keys;
- found no database export, environment file, server log or private configuration;
- removed `js/script.js_old`;
- removed the saved index copy and correction note from `pdf/`;
- removed French and English button-test pages;
- removed the development spacer page and old sitemap;
- removed an unrelated, obsolete `README.txt` describing another project;
- validated the packaged ZIP structure and checksum;
- documented provenance, rights and the separation between the website and open dataset.

## Intentionally excluded from the source ZIP

- image files;
- video files;
- PDF documents;
- heavy visual assets from the `/flux/` application.

These public resources remain available from the official website. Their omission keeps the GitHub archive lightweight and avoids duplicating large media collections.

## Findings that do not block archival publication

The uploaded website copy contains pre-existing references to missing favicon variants, `logo-1024.png`, some JavaScript helpers and a few incomplete or legacy pages. These are website-maintenance issues rather than sensitive-data findings. The public repository should be described as an archival snapshot, not as a guaranteed standalone deployment package.

## Before making the repository public

- create it as a private repository first;
- upload only the files contained in this GitHub package;
- verify the README and citation display correctly;
- create a release tag such as `v2026.09.20`;
- perform one final secret scan across the complete Git history;
- change visibility to public only after reviewing the repository file list.
