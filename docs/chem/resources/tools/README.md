# Tools

This page presents some fun toys for getting chemical equations rendered properly, 3D structures, and so on.

[MolDiff](./moldiff/) - Side-by-side Chemical Comparison

## Typeset chemical equations

Type your chemical equation in the box to have it rendered.  Use `\solid{}`, `\aq{}`, `\gas{}`, and `\liquid{}` for state symbols, and `^` / `_` to force super/subscripts.  See the [mhchem manual](https://mhchem.github.io/MathJax-mhchem/) for additional syntax.

::: tip

Examples:

* `2H -> H2`
* `Mg\solid + HNO3\aq -> H2\gas{} + Mg(NO3)2\aq{}`
* `H2O\liquid <<=>[K_w = 10^{-14}] H+\aq + OH^-\aq`

You can use the [SVG Crowbar](https://nytimes.github.io/svg-crowbar/) bookmarklet to download the equation as an SVG (a vector-based, "never pixelated" format).

:::

<equation-typer />