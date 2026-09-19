# Academic Portfolio — Kazi Md. Tawsif Rahman

A research-first academic portfolio for computer science PhD applications,
focused on privacy-preserving machine learning and network security.

## Pages

- **Home** — research identity, accepted five-seed evidence, external validation,
  publications, and selected engineering strengths
- **Research** — question, claim boundary, five-seed NSL-KDD evidence,
  supplementary UNSW-NB15 validation, paper-preparation gate, and limitations
- **Publications** — selected peer-reviewed work and research trajectory
- **Systems** — sanitized production-engineering cases relevant to experimental systems
- **CV** — concise HTML overview plus the current downloadable academic CV

## Research claim policy

- Formal DP-SGD and explicit privacy accounting are implemented for the locked
  MLP pipeline.
- Experiments 01–06, 08, and 09 are complete and accepted under the frozen
  roadmap.
- The primary result is a five-seed NSL-KDD comparison of non-private, ε≈4, and
  ε≈2 conditions; ε≈8 is retained only as single-seed sweep context.
- A compact single-seed UNSW-NB15 validation is supplementary external evidence,
  not a universal generalisation claim.
- Formal privacy guarantees and empirical membership-inference measurements are
  reported separately.
- The results do not support a claim that DP-SGD reduced measurable overall
  leakage or that ε≈4 is an optimal privacy budget.
- A venue-neutral first paper draft is frozen for author review and target-venue
  selection.

## Development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Checks:

```bash
npm run lint
npm test
```

## Authoritative sources

- Research evidence: <https://github.com/tawsif113/privacy-utility-dp-ids>
- Academic CV: `public/Kazi_Md_Tawsif_Rahman_Academic_CV.pdf`
- Publication records: DOI links on the Publications page

## Academic CV

The public download is generated from `main.tex`:

```bash
pdflatex -interaction=nonstopmode -halt-on-error \
  -output-directory=public main.tex
mv public/main.pdf public/Kazi_Md_Tawsif_Rahman_Academic_CV.pdf
```
