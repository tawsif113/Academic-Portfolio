import type { Metadata } from "next";
import { Footer, Header, Intro } from "../site-shell";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Membership privacy and operational utility in machine-learning-based network intrusion detection.",
};

const scope = [
  ["Dataset", "NSL-KDD"],
  ["Task", "Binary classification: Normal vs Attack"],
  ["Private model", "MLP trained with DP-SGD through Opacus"],
  ["Threat models", "Score-only black-box and label-aware MIA"],
  ["Utility metrics", "Recall, FNR, F1, PR-AUC"],
  ["Privacy metrics", "MIA AUC, advantage, low-FPR TPR, bootstrap CIs"],
];

export default function Research() {
  return (
    <>
      <Header active="research" />
      <main>
        <Intro
          eyebrow="Current research"
          title="Privacy–utility auditing for network intrusion detection."
          description="An empirical study of whether formally accounted DP-SGD can reduce measurable membership leakage without making a tabular intrusion detector operationally ineffective."
        />

        <section className="content shell">
          <div className="two-col">
            <div className="side">
              <p className="eyebrow">Project overview</p>
              <h2>The question and the boundary.</h2>
              <p>
                This is not a new privacy algorithm or a generic model
                comparison. The contribution depends on a controlled,
                reproducible empirical protocol.
              </p>
            </div>
            <div>
              <div className="claim">
                <strong>Claim boundary:</strong> Until DP-SGD is implemented
                with valid privacy accounting, this work is a privacy–utility
                audit building toward formal DP-SGD—not a differentially
                private IDS.
              </div>
              <div className="cards">
                <article>
                  <h3>Research question</h3>
                  <p>
                    Can formal DP-SGD reduce training-membership leakage while
                    retaining acceptable Recall and False Negative Rate?
                  </p>
                </article>
                <article>
                  <h3>Evaluation principle</h3>
                  <p>
                    IDS utility and membership privacy are evaluated separately,
                    then interpreted together. Accuracy alone is insufficient.
                  </p>
                </article>
                <article>
                  <h3>Threat model</h3>
                  <p>
                    Shadow-calibrated score-only black-box and label-aware
                    membership inference against the target MLP.
                  </p>
                </article>
                <article>
                  <h3>Privacy scope</h3>
                  <p>
                    Reported epsilon and delta apply to DP-SGD optimisation
                    conditional on fixed preprocessing unless justified
                    otherwise.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="content shell">
          <div className="two-col">
            <div className="side">
              <p className="eyebrow">Research record</p>
              <h2>Evidence before stronger claims.</h2>
              <p>
                Public status reflects verified artifacts. Planned work remains
                visibly planned.
              </p>
            </div>
            <div className="timeline">
              <article className="done">
                <small>Completed · verified</small>
                <h3>Baseline IDS utility study</h3>
                <p>
                  RF, XGBoost, and MLP baselines with validation-only F2
                  threshold tuning; archived as the pre-MIA reference.
                </p>
              </article>
              <article className="active">
                <small>Active validation</small>
                <h3>MIA-ready MLP and baseline membership audit</h3>
                <p>
                  The current gate is to reconcile the locked split,
                  shadow-calibration protocol, manifests, low-FPR metrics, and
                  bootstrap uncertainty before publishing privacy conclusions.
                </p>
              </article>
              <article>
                <small>Gated next</small>
                <h3>DP-SGD feasibility and accounting</h3>
                <p>
                  A small Opacus smoke test must verify clipping, sampling,
                  accounting, and reproducible epsilon before a full sweep.
                </p>
              </article>
              <article>
                <small>Planned</small>
                <h3>Privacy–utility frontier and repeated runs</h3>
                <p>
                  Compare non-private and DP-SGD models across utility, leakage,
                  low-FPR risk, and uncertainty only after protocol validation.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="content shell">
          <div className="two-col">
            <div className="side">
              <p className="eyebrow">Baseline result</p>
              <h2>What is currently supported.</h2>
              <p>
                KDDTest+ was used for final IDS utility after selecting the
                operating threshold on validation data.
              </p>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Setting</th>
                    <th>Metric</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["MLP · threshold 0.28", "Accuracy", "83.41%"],
                    ["MLP · threshold 0.28", "Recall", "76.91%"],
                    ["MLP · threshold 0.28", "F1", "84.08%"],
                    ["MLP · threshold 0.28", "False Negative Rate", "23.09%"],
                  ].map((row) => (
                    <tr key={row[1]}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="claim top-space">
                These numbers are a preliminary non-private utility result. They
                do not establish differential privacy, MIA resistance, or a
                privacy–utility tradeoff.
              </div>
            </div>
          </div>
        </section>

        <section className="content shell">
          <div className="two-col">
            <div className="side">
              <p className="eyebrow">Fixed protocol</p>
              <h2>Scope that resists drift.</h2>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Decision</th>
                  </tr>
                </thead>
                <tbody>
                  {scope.map((row) => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 className="subhead">Known limitations</h3>
              <ul className="plain-list">
                <li>NSL-KDD is dated and cannot establish modern deployment validity.</li>
                <li>The main task is binary rather than multi-class attribution.</li>
                <li>
                  Privacy accounting is conditional on the preprocessing
                  boundary.
                </li>
                <li>
                  The audit covers defined black-box threat models, not every
                  possible form of leakage.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
