import type { Metadata } from "next";
import { Arrow, Download, Footer, Header, Intro, Tags } from "../site-shell";

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
          description="This concise HTML overview reflects my current academic CV. The complete application-ready PDF is available below."
        />
        <section className="content shell cv-grid">
          <aside className="cv-aside">
            <p className="eyebrow">Profile</p>
            <h2>Kazi Md. Tawsif Rahman</h2>
            <p>
              Computer science graduate and backend systems engineer researching
              differential privacy and membership-inference risk in
              machine-learning-based network intrusion detection.
            </p>
            <Tags
              items={[
                "Dhaka, Bangladesh",
                "CUET 2024",
                "Research project active",
              ]}
            />
            <div className="cv-links">
              <a
                className="button primary cv-download"
                href="/Kazi_Md_Tawsif_Rahman_Academic_CV.pdf"
                download="Kazi_Md_Tawsif_Rahman_Academic_CV.pdf"
              >
                Download academic CV <Download />
              </a>
              <a
                className="text-link"
                href="https://github.com/tawsif113/privacy-utility-dp-ids"
                target="_blank"
                rel="noreferrer"
              >
                Research repository <Arrow />
              </a>
            </div>
          </aside>

          <div className="cv-main">
            <section>
              <h2>Research experience</h2>
              <Entry
                date="2026 — Present"
                title="Privacy–Utility Audit for ML-Based Network Intrusion Detection"
              >
                Completed a locked, condition-matched single-run comparison of
                a non-private PyTorch MLP and Opacus DP-SGD at actual ε=7.9936,
                3.9983, and 1.9990. Repeated-run stability analysis is now in
                progress.
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
              <Entry date="Dec 2024 — Present" title="CRM platform · BRAC IT Services Ltd.">
                Built configurable rule-based routing, fixed-length Kanban order
                keys, access controls, idempotent moves, transition validation,
                audit logs, and traceable timelines.
              </Entry>
              <Entry date="Dec 2024 — Present" title="Ticketing system · BRAC IT Services Ltd.">
                Built ticket workflow services and least-loaded team routing
                with Redis-backed counters while maintaining PostgreSQL–Redis
                workload consistency across lifecycle changes.
              </Entry>
            </section>

            <section>
              <h2>Selected technical strengths</h2>
              <Entry
                date="Research"
                title="Experimental ML and privacy evaluation"
              >
                Locked-split design, validation-only threshold selection,
                shadow-model membership-inference auditing, Opacus privacy
                accounting, paired bootstrap confidence intervals, and
                reproducibility manifests.
              </Entry>
              <Entry
                date="Systems"
                title="Backend and data-intensive engineering"
              >
                Java, Spring Boot, Spring Security, JPA/Hibernate, REST APIs,
                PostgreSQL, MongoDB, Redis, RabbitMQ, Flyway, Docker, JUnit 5,
                and Mockito.
              </Entry>
            </section>

            <section>
              <h2>Awards and achievements</h2>
              <Entry date="Competitive programming" title="Codeforces Specialist">
                Rating above 1500.
              </Entry>
              <Entry date="2023–2024" title="CUET IUPC finalist">
                Finalist in both CUET IUPC 2024 and CUET IUPC 2023.
              </Entry>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
