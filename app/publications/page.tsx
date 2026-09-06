import type { Metadata } from "next";
import { Arrow, Footer, Header, Intro, Tags } from "../site-shell";

export const metadata: Metadata = {
  title: "Publications",
  description: "Selected publications by Kazi Md. Tawsif Rahman.",
};

export default function Publications() {
  return (
    <>
      <Header active="publications" />
      <main>
        <Intro
          eyebrow="Publications"
          title="Applied machine learning grounded in real decision contexts."
          description="Earlier work focused on fraud detection and insurance-access systems. That experience now informs a narrower direction in privacy, security, and trustworthy evaluation."
        />
        <section className="content shell">
          <div className="two-col">
            <div className="side">
              <p className="eyebrow">Peer-reviewed work</p>
              <h2>Selected publications.</h2>
              <p>
                Author order and DOI links below match the current academic CV;
                publisher records remain the authoritative source.
              </p>
            </div>
            <div>
              <article className="detail">
                <div className="detail-top">
                  <span>Journal article · 2024</span>
                  <span>IJMSC, Vol. 10, No. 3</span>
                </div>
                <h3>
                  An Automated System for Detecting Property Insurance Fraud
                  Using Machine Learning
                </h3>
                <p className="citation-authors">
                  Kazi Md. Tawsif Rahman and Chowdhury Mahfuzul Hoq
                </p>
                <p>
                  An applied classification study addressing fraud detection in
                  property-insurance workflows, including data preparation,
                  imbalanced prediction, metric choice, and software delivery.
                </p>
                <Tags
                  items={[
                    "Fraud detection",
                    "Applied machine learning",
                    "Classification",
                  ]}
                />
                <a
                  className="text-link"
                  href="https://doi.org/10.5815/ijmsc.2024.03.02"
                  target="_blank"
                  rel="noreferrer"
                >
                  DOI: 10.5815/ijmsc.2024.03.02 <Arrow />
                </a>
              </article>
              <article className="detail">
                <div className="detail-top">
                  <span>Conference paper · 2024</span>
                  <span>IEEE CSITSS</span>
                </div>
                <h3>
                  Whistle Blower: An Insurance Awareness Mobile Application with
                  Insurance Policy Selection, Fraud Detection, Critical Help,
                  Complaint Features
                </h3>
                <p className="citation-authors">
                  Mahfuzulhoq Chowdhury, Kazi Md. Tawsif Rahman, and Hossain
                  Ahmad Maruf
                </p>
                <p>
                  A research-led application combining insurance awareness,
                  policy support, fraud detection, complaint workflows, and
                  access to critical assistance.
                </p>
                <Tags
                  items={[
                    "Human-centered systems",
                    "Mobile application",
                    "Decision support",
                  ]}
                />
                <a
                  className="text-link"
                  href="https://doi.org/10.1109/CSITSS64042.2024.10817002"
                  target="_blank"
                  rel="noreferrer"
                >
                  DOI: 10.1109/CSITSS64042.2024.10817002 <Arrow />
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="content shell">
          <div className="two-col">
            <div className="side">
              <p className="eyebrow">Research trajectory</p>
              <h2>From applied prediction to trustworthy evaluation.</h2>
            </div>
            <div className="prose">
              <p>
                The common thread is not insurance itself. It is how
                machine-learning systems behave when errors have operational
                consequences. Earlier projects introduced recall-sensitive
                evaluation, imbalanced classification, and end-to-end delivery.
              </p>
              <p>
                My current work moves that concern into network security and
                adds a second obligation: a security-critical classifier should
                be evaluated for detection utility and for measurable leakage
                about its training data.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
