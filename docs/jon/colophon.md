# Colophon

## Stack

This website is built with [Vuepress](http://vuepress.vuejs.org/) with various plugins.  I wrote most of the content in a soup of Markdown and html tags, mostly for calling components.  These tend to be templated in Jade/Pug.

- Math <LaTeX formula="\pi" inline/> and chemistry <Chem formula="C6H12O6\aq" inline/> typeset using [MathJax](https://www.mathjax.org/) with Martin Hensel's [mhchem](https://mhchem.github.io/MathJax-mhchem/) extension.
- Charts made in [graph.js](https://www.chartjs.org/)
- Flowcharts are described semantically and rendered with [mermaid.js](https://mermaidjs.github.io/)
  - This may be swapped with [Vis.js](http://visjs.org) once I wrap my head around the library and the DOT language
- Search by [Algolia DocSearch](https://github.com/algolia/docsearch)
- 3D molecules rendered in two ways:
  - [3Dmol.js](http://3dmol.csb.pitt.edu/) is used when fluid generic shape visualizations, or large systems, are needed
  - Robert Hanson's [JSmol] is used when measurement and scripting is needed on small molecules
  - biological structures pulled from [Protein Data Bank](http://www.rcsb.org) and
  - (computed) small molecule structures from [PubChem](http://pubchem.ncbi.nlm.nih.gov/)
- Static hi-res molecule images from [VMD](https://www.ks.uiuc.edu/Research/vmd/)
  - Structures computed through GAMESS, usually B3LYP / 6-311G / gas phase
- UI components from [Element-UI](http://element.eleme.io/) project
- Graphics are penned in Adobe Illustrator / [Concepts.app](https://concepts.app/en/)
- (micro)interactivity and animations crafted in [Haiku.AI](http://haiku.ai/)
- Typography:
  - Headers: Myriad Pro Semi Condensed
  - Body: Cronos Pro
- Color: inherits from the UWC colors

## Deployment

The repo lives on [Github](https://github.com/jkwchui/chem-jon-hk) and is deployed to [Netlify](http://www.netlify.com).

## Data sources

Dynamic data is ingested from Airtable databases using their (very well documented) API.

## Development

I primarily work in Visual Studio Code with Adobe Illustrator. The writing and drawing is supplemented on an iPad Pro, where I use Working Copy to pull from the repository, GoCoEdit to edit the files, and Concepts to do vector drawing.

::: danger Help requests

I would love to do MD simulations but don't know where to start.  If you have pointers please get in touch with me.

:::