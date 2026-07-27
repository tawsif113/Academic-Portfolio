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
          description="This page provides a concise overview. Download the complete academic CV for publications, research evidence, professional experience, and technical preparation."
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
              className="button primary cv-download"
              href="/Kazi_Md_Tawsif_Rahman_Academic_CV.pdf"
              download="Kazi_Md_Tawsif_Rahman_Academic_CV.pdf"
            >
              Download academic CV <Download />
            </a>
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
                Completed a locked NSL-KDD utility baseline, five-shadow
                membership-inference audit, PyTorch parity check, and formally
                accounted DP-SGD feasibility run. The full privacy-budget
                sweep and repeated-run analysis remain in progress.
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
