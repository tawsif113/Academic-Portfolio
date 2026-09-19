import Link from "next/link";
import { Arrow, Download, Footer, Header } from "./site-shell";

const publications = [
  {
    venue: "IJMSC · 2024",
    title:
      "An Automated System for Detecting Property Insurance Fraud Using Machine Learning",
    description:
      "Applied machine learning for fraud detection in an operational insurance setting.",
    href: "https://www.mecs-press.org/ijmsc/ijmsc-v10-n3/v10n3-2.html",
  },
  {
    venue: "IEEE CSITSS · 2024",
    title:
      "Whistle Blower: An Insurance Awareness Mobile Application with Insurance Policy Selection, Fraud Detection, Critical Help, Complaint Features",
    description:
      "A research-led mobile system for insurance awareness, decision support, and fraud detection.",
    href: "https://ieeexplore.ieee.org/document/10817002/",
  },
];

export default function Home() {
  return (
    <>
      <Header active="home" />
      <main>
        <section className="hero shell">
          <div>
            <p className="eyebrow">Privacy-preserving ML · Network security</p>
            <h1>
              Kazi Md. Tawsif
              <br />
              Rahman
            </h1>
            <p className="lede">
              I am a computer science graduate and backend systems engineer
              studying how formal differential privacy changes
              intrusion-detection utility and measurable training-membership
              leakage.
            </p>
            <div className="buttons">
              <Link className="button primary" href="/research">
                Explore my research <Arrow />
              </Link>
              <a
                className="button secondary"
                href="/Kazi_Md_Tawsif_Rahman_Academic_CV.pdf"
                download="Kazi_Md_Tawsif_Rahman_Academic_CV.pdf"
              >
                Download CV <Download />
              </a>
              <a
                className="button secondary"
                href="https://github.com/tawsif113"
                target="_blank"
                rel="noreferrer"
              >
                GitHub profile
              </a>
            </div>
            <p className="hero-meta">
              Dhaka, Bangladesh <i /> Software Engineer <i /> CUET ’24
            </p>
          </div>

          <aside className="inquiry">
            <div className="inquiry-top">
              <span>Current inquiry</span>
              <i />
            </div>
            <p>
              How does formally accounted DP-SGD change IDS utility and
              measurable membership leakage in tabular intrusion detection
              under fixed, reproducible threat models?
            </p>
            <ol>
              <li>
                <span>01</span> Formally accounted DP-SGD
              </li>
              <li>
                <span>02</span> Membership inference
              </li>
              <li>
                <span>03</span> Paper preparation
              </li>
            </ol>
            <small>
              Reproducible evaluation is treated as part of the contribution,
              not an afterthought.
            </small>
          </aside>
        </section>

        <section className="section shell">
          <div className="section-head split">
            <div>
              <p className="eyebrow">Featured research</p>
              <h2>A narrow question, tested rigorously.</h2>
            </div>
            <p>
              Current public claims are deliberately limited to evidence
              already verified in the experimental record.
            </p>
          </div>
          <article className="featured">
            <div className="featured-copy">
              <div className="status">
                <span>Experiments 08–09 accepted</span> NSL-KDD · UNSW-NB15 · MLP
              </div>
              <h3>
                Privacy–Utility Auditing of DP-SGD for ML-Based Network
                Intrusion Detection
              </h3>
              <p>
                Under a locked protocol, I completed a five-seed NSL-KDD
                comparison of a non-private PyTorch MLP with formally accounted
                Opacus DP-SGD at ε≈4 and ε≈2, with ε≈8 retained as single-seed
                sweep context. A compact UNSW-NB15 run provides supplementary
                external evidence. Overall membership-inference estimates
                remained near chance, so the evidence does not support a
                DP-induced leakage-reduction claim.
              </p>
              <Link className="text-link" href="/research">
                Read the project record <Arrow />
              </Link>
            </div>
            <div className="evidence">
              <p className="eyebrow">Accepted five-seed NSL-KDD evidence · ε≈4</p>
              <div className="metrics">
                <div>
                  <strong>3.9983</strong>
                  <span>Actual epsilon</span>
                </div>
                <div>
                  <strong>71.34%</strong>
                  <span>Recall</span>
                </div>
                <div>
                  <strong>28.66%</strong>
                  <span>FNR</span>
                </div>
                <div>
                  <strong>0.5030</strong>
                  <span>Overall MIA AUC</span>
                </div>
              </div>
              <small>
                Across five seeds, ε≈4 did not establish a Recall improvement;
                FPR increased and average precision decreased. Paired MIA AUC
                intervals crossed zero, so measured leakage reduction is not
                established.
              </small>
            </div>
          </article>
        </section>

        <section className="section shell">
          <div className="section-head">
            <p className="eyebrow">Selected publications</p>
            <h2>Earlier applied ML work, now narrowing toward security.</h2>
          </div>
          <div className="publication-list">
            {publications.map((publication, index) => (
              <a
                key={publication.title}
                className="publication"
                href={publication.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>0{index + 1}</span>
                <div>
                  <p>{publication.venue}</p>
                  <h3>{publication.title}</h3>
                  <small>{publication.description}</small>
                </div>
                <Arrow />
              </a>
            ))}
          </div>
          <Link className="text-link" href="/publications">
            Publication details <Arrow />
          </Link>
        </section>

        <section className="section dark">
          <div className="shell">
            <div className="section-head split">
              <div>
                <p className="eyebrow">Research-informed engineering</p>
                <h2>Systems experience that supports experimental work.</h2>
              </div>
              <p>
                Engineering appears here as evidence that I can build, inspect,
                and reproduce serious technical systems.
              </p>
            </div>
            <div className="systems-grid">
              <article>
                <span>01</span>
                <h3>Configurable workflow routing</h3>
                <p>
                  Priority, schedule, conditional, rotation, and duplicate
                  rules with validated field/operator/value conditions.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Traceable state changes</h3>
                <p>
                  Fixed-length order keys, idempotent moves, transition
                  validation, access controls, and audit timelines.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Consistent workload routing</h3>
                <p>
                  Least-loaded team assignment backed by Redis counters and
                  PostgreSQL–Redis consistency updates.
                </p>
              </article>
            </div>
            <Link className="text-link light" href="/systems">
              View selected cases <Arrow />
            </Link>
          </div>
        </section>

        <section className="closing shell">
          <p className="eyebrow">Research direction</p>
          <h2>
            Building trustworthy learning systems where privacy claims and
            operational evidence agree.
          </h2>
          <div className="buttons center">
            <a
              className="button primary"
              href="/Kazi_Md_Tawsif_Rahman_Academic_CV.pdf"
              download="Kazi_Md_Tawsif_Rahman_Academic_CV.pdf"
            >
              Download academic CV <Download />
            </a>
            <Link className="button secondary" href="/cv">
              View CV online <Arrow />
            </Link>
            <a
              className="button secondary"
              href="mailto:tawsifcse113@gmail.com"
            >
              Email me
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
