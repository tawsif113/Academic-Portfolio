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
              Can formal DP-SGD reduce measurable training-membership leakage
              in a tabular IDS model while retaining operationally acceptable
              Recall and FNR?
            </p>
            <ol>
              <li>
                <span>01</span> Formally accounted DP-SGD
              </li>
              <li>
                <span>02</span> Membership inference
              </li>
              <li>
                <span>03</span> Repeated-run validation
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
                <span>Experiment 05 complete</span> NSL-KDD · Binary task · MLP
              </div>
              <h3>
                Privacy–Utility Auditing of DP-SGD for ML-Based Network
                Intrusion Detection
              </h3>
              <p>
                Under a locked protocol, I completed a condition-matched
                single-run sweep comparing a non-private PyTorch MLP with
                Opacus DP-SGD at three privacy budgets. Overall
                membership-inference estimates remained near chance; repeated
                runs are now the decision gate.
              </p>
              <Link className="text-link" href="/research">
                Read the project record <Arrow />
              </Link>
            </div>
            <div className="evidence">
              <p className="eyebrow">Accepted single-run evidence · ε≈4</p>
              <div className="metrics">
                <div>
                  <strong>3.9983</strong>
                  <span>Actual epsilon</span>
                </div>
                <div>
                  <strong>72.67%</strong>
                  <span>Recall</span>
                </div>
                <div>
                  <strong>27.33%</strong>
                  <span>FNR</span>
                </div>
                <div>
                  <strong>0.5031</strong>
                  <span>Overall MIA AUC</span>
                </div>
              </div>
              <small>
                Candidate balance point only. Its higher Recall came with a
                higher FPR and lower PR-AUC than the non-private model;
                repeated-run evidence is pending.
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
