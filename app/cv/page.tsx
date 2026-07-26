import type { Metadata } from "next";
import { Arrow, Footer, Header, Intro, Tags } from "../site-shell";

export const metadata: Metadata = {
  title: "Academic CV",
  description:
    "Academic CV overview for Kazi Md. Tawsif Rahman: research, publications, education, and engineering.",
};

function Entry({
  date,
  title,
  children,
}: {
  date: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="cv-entry">
      <span>{date}</span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}

export default function Cv() {
  return (
    <>
      <Header active="cv" />
      <main>
        <Intro
          eyebrow="Curriculum vitae"
          title="Research, education, and selected technical work."
          description="This HTML overview is intentionally concise. A reconciled application-ready PDF will be added after the final CV audit."
        />
        <section className="content shell cv-grid">
          <aside className="cv-aside">
            <p className="eyebrow">Profile</p>
            <h2>Kazi Md. Tawsif Rahman</h2>
            <p>
              Software engineer and early-stage researcher working at the
              intersection of network security, machine learning, and privacy.
            </p>
            <Tags
              items={[
                "Dhaka, Bangladesh",
                "IELTS 7.5",
                "Open to PhD study",
              ]}
            />
            <a
              className="text-link"
              href="https://github.com/tawsif113"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile <Arrow />
            </a>
          </aside>

          <div className="cv-main">
            <section>
              <h2>Research experience</h2>
              <Entry
                date="2026 — Present"
                title="Privacy–Utility Audit for ML-Based Network Intrusion Detection"
              >
                Designing a reproducible NSL-KDD study combining
                validation-tuned IDS evaluation, membership-inference auditing,
                and a gated path toward formally accounted DP-SGD.
              </Entry>
              <Entry
                date="2024"
                title="Applied machine learning for insurance systems"
              >
                Research and software work spanning property-insurance fraud
                detection and an insurance awareness and decision-support
                application.
              </Entry>
            </section>

            <section>
              <h2>Publications</h2>
              <Entry
                date="IJMSC · 2024"
                title="An Automated System for Detecting Property Insurance Fraud Using Machine Learning"
              >
                Journal publication; publisher record available.
              </Entry>
              <Entry
                date="IEEE · 2024"
                title="Whistle Blower: An Insurance Awareness Mobile Application with Insurance Policy Selection, Fraud Detection, Critical Help, Complaint Features"
              >
                IEEE CSITSS conference publication.
              </Entry>
            </section>

            <section>
              <h2>Education</h2>
              <Entry
                date="2024"
                title="B.Sc. in Computer Science and Engineering · CUET"
              >
                Chittagong University of Engineering &amp; Technology · CGPA
                3.59 / 4.00.
              </Entry>
            </section>

            <section>
              <h2>Professional experience</h2>
              <Entry date="Current" title="Software Engineer · BRAC IT Services">
                Backend engineering for data-intensive systems, emphasizing
                workflow correctness, domain modeling, persistence, messaging,
                and maintainable service design.
              </Entry>
            </section>

            <section>
              <h2>Selected technical strengths</h2>
              <Entry
                date="Research"
                title="Experimental ML and privacy evaluation"
              >
                Python, scikit-learn, PyTorch, NSL-KDD evaluation, thresholding,
                membership inference, reproducibility manifests, and DP-SGD
                methodology.
              </Entry>
              <Entry
                date="Systems"
                title="Backend and data-intensive engineering"
              >
                Java, Spring Boot, PostgreSQL, MongoDB, Redis, RabbitMQ,
                event-driven design, DDD, CQRS, REST APIs, and Docker.
              </Entry>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
