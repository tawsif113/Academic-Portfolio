import type { Metadata } from "next";
import { Footer, Header, Intro, Tags } from "../site-shell";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Selected engineering case studies supporting reproducible research and dependable software.",
};

const cases = [
  {
    type: "Workflow integrity",
    title: "Reliable state transitions in business workflows",
    summary:
      "A design approach for systems where actions must remain valid under retries, concurrent requests, and partial failure.",
    tags: [
      "Idempotency keys",
      "Conflict detection",
      "Transition validation",
      "Audit history",
    ],
  },
  {
    type: "Event-driven systems",
    title: "Asynchronous notification and delivery pipeline",
    summary:
      "A broker-backed notification prototype used to study event publication, consumer behavior, delivery semantics, and recovery.",
    tags: [
      "RabbitMQ",
      "Event publication",
      "Acknowledgements",
      "Redelivery",
    ],
  },
  {
    type: "Domain modeling",
    title: "Order, inventory, and payment service prototype",
    summary:
      "A compact DDD/CQRS system separating command-side decisions from query projections across interacting domains.",
    tags: [
      "Aggregate invariants",
      "Domain events",
      "MongoDB command model",
      "Read projections",
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
          title="Engineering evidence, chosen for research relevance."
          description="A small set of systems cases demonstrating implementation discipline: state integrity, asynchronous coordination, data modeling, and reproducible technical investigation."
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
                implementation rather than a one-off notebook.
              </li>
              <li>
                I treat data lineage, transaction boundaries, configuration,
                and failure behavior as part of correctness.
              </li>
              <li>
                I can debug interactions across models, storage, messaging, and
                application layers.
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
