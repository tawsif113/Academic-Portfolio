import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders development preview metadata", async () => {
  const response = await render();

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("renders the reconciled portfolio content", async () => {
  const checks = [
    ["/research", ["3.9983", "Repeated-run stability analysis"]],
    ["/cv", ["Download academic CV", "Kazi_Md_Tawsif_Rahman_Academic_CV.pdf"]],
    [
      "/publications",
      ["10.5815/ijmsc.2024.03.02", "10.1109/CSITSS64042.2024.10817002"],
    ],
    ["/systems", ["Configurable rule-based routing", "Least-loaded routing"]],
  ];

  for (const [path, markers] of checks) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should render`);
    const html = await response.text();
    for (const marker of markers) {
      assert.ok(html.includes(marker), `${path} should include ${marker}`);
    }
  }
});

test("packages the downloadable academic CV as a valid PDF", async () => {
  const pdf = await readFile(
    new URL(
      "../dist/client/Kazi_Md_Tawsif_Rahman_Academic_CV.pdf",
      import.meta.url,
    ),
  );

  assert.equal(pdf.subarray(0, 5).toString("ascii"), "%PDF-");
});
