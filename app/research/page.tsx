import type { Metadata } from "next";
import { Arrow, Footer, Header, Intro } from "../site-shell";

export const metadata: Metadata = {
  title: "Research",
  description:
    "A formally accounted DP-SGD privacy-budget sweep with IDS utility and membership-inference auditing.",
};

const scope = [
  ["Dataset", "NSL-KDD"],
  ["Task", "Binary classification: Normal vs Attack"],
  ["Compared conditions", "Non-private; DP-SGD ε≈8, ε≈4, and ε≈2"],
  ["Private model", "MLP trained with DP-SGD through Opacus"],
  ["Threat models", "Score-only black-box and label-aware MIA"],
  ["Utility metrics", "Recall, FNR, F1, PR-AUC"],
  ["Privacy metrics", "MIA AUC, advantage, low-FPR TPR, bootstrap CIs"],
  ["Current gate", "Five-seed repeated-run stability for non-private, ε≈4, and ε≈2"],
];

const sweep = [
  ["Non-private", "—", "70.80%", "29.20%", "81.46%", "93.57%", "0.5018"],
  ["DP-SGD ε≈8", "7.9936", "71.28%", "28.72%", "80.33%", "89.67%", "0.5028"],
  ["DP-SGD ε≈4", "3.9983", "72.67%", "27.33%", "81.06%", "89.78%", "0.5031"],
  ["DP-SGD ε≈2", "1.9990", "68.50%", "31.50%", "78.42%", "89.60%", "0.5029"],
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
                <strong>Claim boundary:</strong> Formal DP-SGD and explicit
                privacy accounting are implemented. The current single-run
                sweep does not show that DP-SGD reduced measurable overall
                leakage, and ε≈4 is not yet a confirmed optimum.
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
              <article className="done">
                <small>Completed · accepted</small>
                <h3>MIA-ready MLP and baseline membership audit</h3>
                <p>
                  Five shadow MLPs evaluated score-only and label-aware attacks.
                  The strongest non-private overall attack remained near chance,
                  establishing a floor effect for later comparisons.
                </p>
              </article>
              <article className="done">
                <small>Completed · accepted as single-run evidence</small>
                <h3>DP-SGD feasibility and privacy-budget sweep</h3>
                <p>
                  Opacus DP-SGD was verified, then compared at actual ε=7.9936,
                  3.9983, and 1.9990 with condition-matched shadows and paired
                  bootstrap analysis.
                </p>
              </article>
              <article className="active">
                <small>Current gate · execution evidence pending</small>
                <h3>Repeated-run stability analysis</h3>
                <p>
                  Repeat the non-private, ε≈4, and ε≈2 conditions across five
                  fixed seeds before selecting a balance point or making a final
                  privacy–utility conclusion.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="content shell">
          <div className="two-col">
            <div className="side">
              <p className="eyebrow">Accepted single-run evidence</p>
              <h2>What the completed sweep supports.</h2>
              <p>
                Thresholds were selected on validation data. KDDTest+ was used
                only for final IDS utility evaluation.
              </p>
            </div>
            <div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Condition</th>
                      <th>Actual ε</th>
                      <th>Recall</th>
                      <th>FNR</th>
                      <th>F1</th>
                      <th>PR-AUC</th>
                      <th>MIA AUC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sweep.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => <td key={cell}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="claim top-space">
                All shadow-selected overall MIA AUC confidence intervals include
                0.5, and paired overall intervals cross zero. Formal privacy
                accounting and empirical MIA resistance remain separate
                conclusions.
              </div>
              <a
                className="text-link"
                href="https://github.com/tawsif113/privacy-utility-dp-ids"
                target="_blank"
                rel="noreferrer"
              >
                Inspect code, results, and manifests <Arrow />
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
                <li>The accepted sweep currently uses one target-training seed.</li>
                <li>
                  The formal guarantee is conditional on fixed preprocessing;
                  the recorded Opacus runs use secure_mode: false.
                </li>
                <li>
                  The near-chance non-private attack creates a floor effect for
                  empirical leakage-reduction comparisons.
                </li>
                <li>
                  The study covers one binary task, one MLP architecture, and
                  the stated black-box attacks—not every form of leakage.
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
