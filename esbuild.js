import { createRequire } from "module";
import { promisify } from "util";
import glob from "glob";
import esbuild from "esbuild";

const require = createRequire(import.meta.url);
const pkg = require("./package");
const date = new Date().toDateString();

const globAsync = promisify(glob);

const banner = `/**
 * ${pkg.name} v${pkg.version} build ${date}
 * ${pkg.homepage}
 * Copyright ${date.slice(-4)} ${pkg.author.name}
 * @license ${pkg.license}
 */`;
const entryPoints = await globAsync("src/*.ts");

const common = {
  entryPoints,
  platform: "node",
  bundle: false,
  minify: false,
  banner,
};

const configs = [
  {
    outdir: `lib/esm`,
    format: "esm",
  },
  {
    outdir: `lib/cjs`,
    format: "cjs",
    outExtension: { ".js": ".cjs" },
  },
];

const t0 = Date.now();

await Promise.all(
  configs.map((c) =>
    esbuild
      .build(Object.assign(c, common))
      .then(() => console.log(`Built ${c.format} in ${Date.now() - t0}ms`))
      .catch(() => process.exit(1))
  )
).then(() => console.log(`Finished build in ${Date.now() - t0}ms`));
