# Organic Chemistry

## Sequence

<mermaid>
graph TB
	F0("Structural formula") --> F1("Simplified / Condensed Structural Formula")
	subgraph Introductions
		SB4A("Lewis str (sans excp)") --> O1
		F1 --> O1("Isomers & Homologous Series")
		F1 --> O2A("Mol class names I")
		O1 --> O2A
		O2A --> O2B("Mol class names II")
		O2B --> O3("FG ID")
		O2B --> O4("FG names")
		O3 --> O5A("1/2/3 C, N")
		O5A --- O5B("1/2/3 OH, X")
	end
	subgraph D - Med chem
		O3 --- D1("Common med chem mol")
	end
	subgraph IUPAC Nomenclature
		F1 --> N0("Chain length")
		O1 --> N0
		N0 --> N1A("Chain numbering")
		N1B("Halo/Alkyl prefix") --> N1A
		O4 --> N1B
		O4 --> N2("FG suffix I")
		O3 --> N2
		O2B --> N2
		N2 --> N3("Multi-substituents")
		N3 --> N4A("Esters")
		N3 --> N4B("N,N-")
		N3 --> N5["OH, C=O prefix"]
	end
	SB4A --> Mech0("Curly arrows")
	subgraph Reactions
		Mech0 --> Ene1("Alkene - Sym Add")
		Ene1 --> Ene2("Alkene - asym add")
		O3 --> Ene1
		Ene2 --> EneHL("Markovnikov (HL)")
		O5A --> EneHL
		Mech0 --> SN2("SN2 mech (HL)")
		SN2 --> SN1("SN1 mech (HL)")
		O5B --> SN2
		O5B --> SN1
		Mech0 --> Rad("Free radical subst")
		O3 --> Rad
		Ene2 --> NucSub("Nucl-phil. sub (HL)")
		O3 --> NucSub
		O5B --> Ox1("OH oxidation - reflux")
		Ox1 --> Ox2("OH oxidation - dist")
		Ox2 --> RedHL1("Carbonyl/carboxyl red'n (HL)")
		NucSub --> RedHL2("Nitrobenzene red'n (HL)")
	end
	Kin0("6 - kinetic order") --> SN2
	Kin0 --> SN1
	Per1("Electronegativity") --> SN2
	Per1 --> SN1
	Red0("Redox") --> Ox1
	Red0 --> RedHL1
	subgraph Stereochemistry
	end
</mermaid>

Teaching simplified / condensed structural formula months ago --- takes a long time to mature.

## Naming organic compounds

Overview

@[vimeo](240626450)

Step-by-step nomenclature

@[vimeo](240692544)

Practice

| Q | A |
|:-:|:-:|
|![Simple](/image/practice/10-nomenclature_practice_1_Q.png)|![Simple-Solution](/image/practice/10-nomenclature_practice_1_A.png) |