import Link from "next/link";
import { Arrow, Footer, Header } from "./site-shell";

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
              conducting applied empirical research at the intersection of
              network intrusion detection, machine learning, and privacy.
            </p>
            <div className="buttons">
              <Link className="button primary" href="/research">
                Explore my research <Arrow />
              </Link>
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
                <span>01</span> Network intrusion detection
              </li>
              <li>
                <span>02</span> Membership inference
              </li>
              <li>
                <span>03</span> Formal privacy accounting
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
                <span>Advanced implementation</span> NSL-KDD · MIA · DP-SGD
              </div>
              <h3>
                Privacy–Utility Tradeoffs in Differentially Private Network
                Intrusion Detection
              </h3>
              <p>
                The reproducible pipeline now includes the locked IDS baseline,
                a five-shadow membership-inference audit, PyTorch parity, and a
                formally accounted Opacus DP-SGD feasibility run. The full
                privacy–utility sweep and repeated-run analysis remain the next
                evidence gate.
              </p>
              <Link className="text-link" href="/research">
                Read the project record <Arrow />
              </Link>
            </div>
            <div className="evidence">
              <p className="eyebrow">Verified feasibility evidence</p>
              <div className="metrics">
                <div>
                  <strong>7.999</strong>
                  <span>Actual epsilon</span>
                </div>
                <div>
                  <strong>1.13e−5</strong>
                  <span>Delta</span>
                </div>
                <div>
                  <strong>66.20%</strong>
                  <span>DP smoke recall</span>
                </div>
                <div>
                  <strong>0.5029</strong>
                  <span>Baseline MIA AUC</span>
                </div>
              </div>
              <small>
                Single-run feasibility evidence. It validates implementation
                and accounting, but does not yet establish a privacy–utility
                frontier or reduced membership leakage.
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
                <h3>Reliable workflow systems</h3>
                <p>
                  Transaction boundaries, idempotent operations, transition
                  rules, and auditable state changes.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Event-driven delivery</h3>
                <p>
                  Asynchronous notification flows designed around broker
                  semantics, failure handling, and delivery reliability.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Domain-oriented services</h3>
                <p>
                  Order, inventory, and payment prototypes using DDD, CQRS,
                  projections, and explicit domain events.
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
            <Link className="button primary" href="/cv">
              View academic CV <Arrow />
            </Link>
            <a
              className="button secondary"
              href="https://github.com/tawsif113"
              target="_blank"
              rel="noreferrer"
            >
              Contact via GitHub
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
