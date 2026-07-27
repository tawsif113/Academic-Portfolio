import type { Metadata } from "next";
import { Arrow, Footer, Header, Intro } from "../site-shell";

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
          title="Privacy–utility tradeoffs in differentially private network intrusion detection."
          description="A reproducible empirical study combining IDS-specific utility, shadow-calibrated membership inference, and formally accounted DP-SGD for a tabular intrusion detector."
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
                <strong>Claim boundary:</strong> Formal DP-SGD implementation
                and privacy accounting have been established in a feasibility
                run. A full privacy–utility frontier and a DP-versus-non-private
                leakage-reduction claim still require Experiment 05 and
                repeated-run evidence.
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
                <small>Completed · accepted</small>
                <h3>MIA-ready MLP and baseline membership audit</h3>
                <p>
                  A locked 70/10/20 split, five shadow models, held-out shadow
                  calibration, low-FPR metrics, and 1,000 bootstrap repetitions
                  found weak measurable overall leakage under the evaluated
                  attacks.
                </p>
              </article>
              <article className="done">
                <small>Completed · feasibility passed</small>
                <h3>DP-SGD feasibility and accounting</h3>
                <p>
                  PyTorch parity and Opacus compatibility passed. A five-epoch
                  DP-SGD smoke run produced explicit PRV-accounted privacy
                  parameters and reproducible utility outputs.
                </p>
              </article>
              <article className="active">
                <small>Current gate</small>
                <h3>Full DP-SGD sweep and membership audit</h3>
                <p>
                  Experiment 05 must compare multiple privacy budgets, audit
                  each trained model with the locked MIA protocol, and preserve
                  per-run accounting, IDS metrics, raw results, and manifests.
                </p>
              </article>
              <article>
                <small>Final analysis</small>
                <h3>Repeated runs and privacy–utility frontier</h3>
                <p>
                  Stability analysis will determine whether observed utility
                  and leakage differences are robust enough to support the
                  final research claims.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="content shell">
          <div className="two-col">
            <div className="side">
              <p className="eyebrow">Verified evidence</p>
              <h2>What the completed experiments support.</h2>
              <p>
                Every number below is drawn from committed result CSVs or
                manifests. KDDTest+ thresholds were selected on validation
                data.
              </p>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Experiment</th>
                    <th>Verified result</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Baseline MIA", "Strongest overall attack AUC", "≈ 0.5029"],
                    ["PyTorch parity", "F1 absolute difference", "1.26 pp"],
                    ["DP-SGD smoke", "Actual privacy budget", "ε 7.9986"],
                    ["DP-SGD smoke", "Delta", "1.134 × 10⁻⁵"],
                    ["DP-SGD smoke", "KDDTest+ Recall", "66.20%"],
                    ["DP-SGD smoke", "KDDTest+ FNR", "33.80%"],
                    ["DP-SGD smoke", "KDDTest+ F1", "76.80%"],
                    ["DP-SGD smoke", "KDDTest+ PR-AUC", "91.93%"],
                  ].map((row) => (
                    <tr key={`${row[0]}-${row[1]}`}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="claim top-space">
                The baseline attack result indicates weak measurable leakage
                under the evaluated threat models; it does not prove privacy.
                The DP-SGD figures come from one feasibility run and are not a
                final model selection or leakage-reduction result.
              </div>
              <a
                className="text-link"
                href="https://github.com/tawsif113/privacy-utility-dp-ids"
                target="_blank"
                rel="noreferrer"
              >
                Research repository <Arrow />
              </a>
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
                <li>
                  Near-chance overall baseline MIA creates a floor effect: the
                  final study may establish accounting and utility costs without
                  supporting a strong empirical leakage-reduction claim.
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
