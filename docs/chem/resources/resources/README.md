# Resources

## Journals

[JChemEd](https://pubs.acs.org/journal/jceda8)
* The Journal of Chemical Education has articles and experiments suitable for all levels
* searchable, can be refined for _experiments_ doable at _high school_ level
* college subscription is valid for internet connections on campus

[Science Magazine](http://science.sciencemag.org/)
* General magazine with cutting edge / high-profile research articles
* "star" research articles have a "for layman" blurb that explains the context and significance
* Need password from library

## Databases

[PubChem](https://pubchem.ncbi.nlm.nih.gov/)
* a comprehensive chemistry database containing
  * experimental properties
  * calculated properties
* Supports structure searches
* Includes biological assay results
* Can be queried *en masse*
  * by scripts (python, javascript)
  * from Google Sheets (through `IMPORTDATA(url)` / `IMPORTXML(url)` and the PUG-REST API)
* Read about its overview in [this article](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4702940/)

[SDBS](https://sdbs.db.aist.go.jp/sdbs/cgi-bin/cre_index.cgi)
* Spectral Database for Organic Compounds
* Experimental spectra of 35000 compounds

## Software

### Study skills

[Anki](https://apps.ankiweb.net/)

* state-of-the-art Spaced Repetition System
* available also on android and iOS devices, and through web browser.  Progress can be synced.
* Decks I prepared:
  * IB chemistry vocabulary (1500+ notes)
  * IB chemistry specialty decks (600+ cards) for 
    * common chemical names, 
    * equipment, 
    * periodic trends
    * VSEPR, 
    * organic functional groups, 
    * organic reactions & mechanisms
  * IB econ
  * IB bio
  * IB business & management
  * IB mandarin _ab initio_ vocabulary + pronunciation

### Lab simulation

[Yenka](http://www.yenka.com)

* chemistry lab simulation
* predicts volumes/mass loss/temperature change etc for certain reactions
* **NOT** physically accurate

#### Installation

1. Download installer [here](https://www.yenka.com/en/Download_the_Yenka_installer/)
  1. If you are using a Mac, choose the right version (probably the El Capitan+ version)
  2. If you are using a Mac, make sure you have dragged the Yenka.app icon into `/Applications` or the activation will fail.
2. activate with school license code (search your email for `Yenka activation`)

### Visualization

[Atomsmith](http://atomsmith.co/)

* visualization of molecules and orbitals
* some support for reactions
* **NOT** physically accurate
* Log-in with Google account

### Molecular modeling

[In-house GAMESS-WebMO installation](http://172.17.0.100/~jkwchui/cgi-bin/webmo/login.cgi)
* _Ab initio_ and molecular dynamics calculations
  * Physically accurate
* Log-in from campus network with 
  * Username: Student
  * Password: lpcuwc

[AutoDock Vina](http://vina.scripps.edu/)
* Calculates protein-ligand interactions (drug-receptor)
* Predicts: 
  * binding enthalpy
  * binding conformation

### Practical

[Logger Pro by Vernier](https://www.vernier.com/products/software/lp/)
* Interfaces with a variety of digital equipment
* Vernier website includes instructional screencasts
* Download from school network
  * `Academic:/Science/Software/`

[ImageJ](https://fiji.sc/)
* an open platform for scientific image analysis
* automatically quantify color intensity, count particles (e.g., cells), annotate image
* works with videos as well
* link points to FIJI, an installation of ImageJ that has many plugins included

### Data analysis

[Tableau](https://www.tableau.com/)
* Visualize and graph data interactively
* Useful for complex dataset and visualizations that spreadsheets can't do