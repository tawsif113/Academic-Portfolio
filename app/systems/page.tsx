import type { Metadata } from "next";
import { Footer, Header, Intro, Tags } from "../site-shell";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Selected engineering case studies supporting reproducible research and dependable software.",
};

const cases = [
  {
    type: "CRM platform",
    title: "Configurable rule-based routing",
    summary:
      "Built routing with priorities, schedules, conditional matching, rotation rules, duplicate checks, and validated field/operator/value conditions.",
    tags: [
      "Priority rules",
      "Schedule matching",
      "Rotation",
      "Condition validation",
    ],
  },
  {
    type: "CRM platform",
    title: "Efficient ordering and traceable state changes",
    summary:
      "Replaced full-column Kanban reordering with fixed-length order keys, then added access controls, idempotent moves, transition validation, audit logs, and timelines.",
    tags: [
      "Order keys",
      "Idempotency",
      "Access control",
      "Audit logging",
    ],
  },
  {
    type: "Ticketing system",
    title: "Least-loaded routing with cross-store consistency",
    summary:
      "Implemented least-loaded team assignment with Redis-backed workload counters and maintained PostgreSQL–Redis consistency after ticket creation, reassignment, and resolution.",
    tags: [
      "Redis counters",
      "PostgreSQL",
      "Assignment rules",
      "Lifecycle updates",
    ],
  },
];

export default function Systems() {
  return (
    <>
      <Header active="systems" />
      <main>
        <Intro
          eyebrow="Selected systems"
          title="Production engineering, chosen for research relevance."
          description="Sanitized cases from my current backend role showing rule-driven behavior, state integrity, auditability, and consistency across data stores."
        />
        <section className="content shell">
          <div className="two-col">
            <div className="side">
              <p className="eyebrow">Case studies</p>
              <h2>Dependable systems as a supporting strength.</h2>
              <p>
                These are sanitized summaries. They avoid confidential business
                detail and unsupported production-scale claims.
              </p>
            </div>
            <div>
              {cases.map((item, index) => (
                <article className="detail" key={item.title}>
                  <div className="detail-top">
                    <span>{item.type}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <Tags items={item.tags} />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="content shell">
          <div className="two-col">
            <div className="side">
              <p className="eyebrow">Why it matters</p>
              <h2>What this adds to my research profile.</h2>
            </div>
            <ul className="plain-list">
              <li>
                I can turn an experimental protocol into a maintainable
                implementation with explicit validation and traceability.
              </li>
              <li>
                I treat data lineage, transaction boundaries, configuration,
                and failure behavior as part of correctness.
              </li>
              <li>
                I can reason about correctness across application logic,
                PostgreSQL state, Redis counters, and retryable operations.
              </li>
              <li>
                I document technical decisions so another engineer or
                researcher can inspect and reproduce them.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
