# Academic Portfolio — Kazi Md. Tawsif Rahman

A research-first academic portfolio for computer science PhD applications,
focused on privacy-preserving machine learning and network security.

## Pages

- **Home** — research identity, current project, verified baseline evidence,
  publications, and selected engineering strengths
- **Research** — question, claim boundary, protocol, status, baseline result,
  and limitations
- **Publications** — selected peer-reviewed work and research trajectory
- **Systems** — sanitized engineering cases relevant to experimental systems
- **CV** — concise HTML overview plus a downloadable academic CV generated
  from `main.tex`

## Research claim policy

- The locked MIA-ready baseline, five-shadow membership audit, PyTorch parity
  check, and formally accounted DP-SGD feasibility run are complete.
- The full DP-SGD privacy-budget sweep, per-model MIA evaluation, and
  repeated-run analysis remain in progress.
- Baseline IDS utility is separate from privacy evidence.
- Formal privacy parameters are reported only for the verified feasibility
  configuration. No broad claim of reduced membership leakage is made before
  the full sweep and repeated-run evaluation.
- Planned experiments are visibly distinguished from verified results.

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

## Before application use

The publication author order, contribution statements, ORCID/Scholar links,
and preferred academic contact details should be rechecked before application
submission.

## Academic CV

The public download is generated from `main.tex`:

```bash
pdflatex -interaction=nonstopmode -halt-on-error \
  -output-directory=public main.tex
mv public/main.pdf public/Kazi_Md_Tawsif_Rahman_Academic_CV.pdf
```
