import type { Metadata } from "next";
import { Arrow, Footer, Header, Intro } from "../site-shell";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Five-seed NSL-KDD and supplementary UNSW-NB15 evidence for formally accounted DP-SGD, IDS utility, and membership-inference auditing.",
};

const scope = [
  ["Dataset", "NSL-KDD; supplementary UNSW-NB15 external validation"],
  ["Task", "Binary classification: Normal vs Attack"],
  ["Compared conditions", "Five-seed: non-private, ε≈4, ε≈2; ε≈8 retained as single-seed context"],
  ["Private model", "MLP trained with DP-SGD through Opacus"],
  ["Threat models", "Score-only black-box and label-aware MIA"],
  ["Utility metrics", "Recall, FNR, F1, PR-AUC"],
  ["Privacy metrics", "MIA AUC, advantage, low-FPR TPR, bootstrap CIs"],
  ["Current gate", "Author/coauthor review and target-venue selection"],
];

const sweep = [
  ["Non-private", "—", "70.93%", "29.07%", "80.98%", "93.75%", "0.5023"],
  ["DP-SGD ε≈4", "3.9983", "71.34%", "28.66%", "80.17%", "89.07%", "0.5030"],
  ["DP-SGD ε≈2", "1.9990", "70.11%", "29.89%", "79.46%", "89.06%", "0.5033"],
];

const external = [
  ["Non-private", "—", "99.88%", "0.12%", "85.36%", "41.84%", "98.16%", "0.4994"],
  ["DP-SGD ε≈4", "3.9955", "99.98%", "0.02%", "85.25%", "42.38%", "96.85%", "0.5008"],
  ["DP-SGD ε≈2", "1.9957", "99.99%", "0.01%", "85.24%", "42.40%", "96.77%", "0.5000"],
];

export default function Research() {
  return (
    <>
      <Header active="research" />
      <main>
        <Intro
          eyebrow="Current research"
          title="Privacy–utility auditing for network intrusion detection."
          description="An empirical study of how formally accounted DP-SGD affects IDS utility and measurable membership leakage, with five-seed NSL-KDD evidence and a compact UNSW-NB15 external check."
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
                privacy accounting are implemented. The accepted five-seed
                NSL-KDD analysis and single-seed UNSW-NB15 check do not show
                that DP-SGD reduced measurable overall leakage, and no tested
                epsilon is established as optimal.
              </div>
              <div className="cards">
                <article>
                  <h3>Research question</h3>
                  <p>
                    How does formal DP-SGD affect IDS utility, especially
                    Recall and False Negative Rate, and measurable
                    training-membership leakage?
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
                Public status reflects accepted artifacts. Paper preparation
                is kept separate from the frozen experimental evidence.
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
              <article className="done">
                <small>Completed · accepted</small>
                <h3>Repeated-run stability and final NSL-KDD analysis</h3>
                <p>
                  Five fixed target-training seeds were completed for
                  non-private, ε≈4, and ε≈2. The ε≈4 Recall difference remained
                  uncertain, while false-positive rate increased and average
                  precision decreased. Paired MIA AUC comparisons did not show
                  measured leakage reduction.
                </p>
              </article>
              <article className="done">
                <small>Completed · supplementary external evidence</small>
                <h3>UNSW-NB15 external validation and paper preparation</h3>
                <p>
                  A constrained single-seed UNSW-NB15 check reproduced the same
                  broad operating-point tradeoff. A venue-neutral first paper
                  draft is frozen for author review and venue selection.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="content shell">
          <div className="two-col">
            <div className="side">
              <p className="eyebrow">Accepted five-seed NSL-KDD evidence</p>
              <h2>What the final primary analysis supports.</h2>
              <p>
                Values below are means across five target-training seeds at
                validation-selected thresholds. KDDTest+ remained final IDS
                utility evaluation only.
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
                The ε≈4 Recall change is uncertain across seeds, while its FPR
                is higher and average precision lower than non-private. All
                paired MIA AUC intervals cross zero. Formal privacy accounting
                and empirical MIA resistance therefore remain separate
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
              <p className="eyebrow">Supplementary external evidence</p>
              <h2>Compact UNSW-NB15 validation.</h2>
              <p>
                One target-training seed was used under the frozen architecture,
                threat models, and F2 threshold-selection policy.
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
                      <th>FPR</th>
                      <th>Avg. precision</th>
                      <th>MIA AUC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {external.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => <td key={cell}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="claim top-space">
                DP-SGD preserved selected-threshold F1 and Recall closely but
                increased false-positive burden and reduced average precision.
                Overall MIA remained near chance. This single-seed check is
                supplementary and does not establish universal generalisation.
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
                <li>
                  The primary NSL-KDD analysis uses five fixed target-training
                  seeds; the UNSW-NB15 external validation uses one seed.
                </li>
                <li>
                  The formal guarantee is conditional on fixed preprocessing;
                  the recorded Opacus runs use secure_mode: false.
                </li>
                <li>
                  The near-chance non-private attack creates a floor effect for
                  empirical leakage-reduction comparisons.
                </li>
                <li>
                  The study covers one binary task and one MLP architecture
                  under the stated score-only and label-aware attacks—not every
                  form of privacy leakage or deployment condition.
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
