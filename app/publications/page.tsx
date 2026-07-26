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
                Publisher links are the authoritative record. Full author order
                and contribution statements will be reconciled with the final
                academic CV.
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
                  href="https://www.mecs-press.org/ijmsc/ijmsc-v10-n3/v10n3-2.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Publisher record <Arrow />
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
                  href="https://ieeexplore.ieee.org/document/10817002/"
                  target="_blank"
                  rel="noreferrer"
                >
                  IEEE record <Arrow />
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
