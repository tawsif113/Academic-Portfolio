import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
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

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  assert.match(
    html,
    /href=["']\/Kazi_Md_Tawsif_Rahman_Academic_CV\.pdf["']/i,
  );
  assert.match(
    html,
    /download=["']Kazi_Md_Tawsif_Rahman_Academic_CV\.pdf["']/i,
  );
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
