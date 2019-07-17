# Course Info

[[toc]]

## Logistics

### HL/SL split

All chemistry classes at LPCUWC are mixed Higher Level (HL) and Standard Level (SL) blocks.  SL students are excused when blocks of HL content is taught.  These are announced ahead of time, but they do not appear until Feb/Mar of Y1.

### IB Chemistry

The HL course is 240 hr in length (60 hr practical) whereas the SL course is 150 hr in length (with 40 hr practical).  There are 11 topics, and we study Medicinal Chemistry (D) as the Option.  

Except for topics 1 (stoichiometry) and 11A (measurement), all core topics has an additional higher level (AHL) extension.  The AHL extension topics are numbered 10 higher than the core topic; 12 is the extension for 2, 15 is the extension for 5, and so on.

[insert diagram]

#### Topics

Topic 1 (stoichiometry) introduces the stoichiometric relationships and the particulate nature of matter. This forms the basis for the rest of your studies.

Topics 2–9 are in fact thematically groups of three, visualized graphically as in Figure 4. 

The first group describes the **building blocks of chemistry**:

* 2/12 - **Atomic structure** The first unit describes what is inside an atom, and since we are chemists, will have a large emphasis on electrons
* 3/13 - **The Periodic Table** With structure of the atom in mind, this topic looks at the different kinds of atoms available, what is similar, and what is different.
* 4/13 - **Structure & Bonding** This topic looks at the different ways to combine the different kind of atoms previously described.

The above topics tend to be qualitative.

The second group describes the **physical rules that govern reactions**:

* 5/15 - **Energetics** Energetics, also called thermodynamics, compares the energy content at the beginning and end states.
* 6/16 - **Kinetics** Here we look not only at the states, but also the path that connects them to one another.
* 7/17 - **Equilibrium** What happens when two reactions that are reverse of one another happening at the same time?

These physical chemistry topics are quantitative.

Finally, the third group describes **special kinds of reactions**:

* 8/18 - **Acids and Bases**. The focus in this unit are the reactions where an <Chem formula="H^{+}\aq{}" inline /> is transferred from one species to another.
* 9/19 - **Redox**.  Now the transfer of an electron <Chem formula="e^{-}" inline />.  This closely follows periodic trends described in topic 3.
* 10/20 - **Organic chemistry** Chemistry of carbon, which provides the foundation for understanding drugs, medicines, plastic, and many aspects of nanotechnology.  This follows from nature of covalent bonding studied in topic 4.

Topic 11 is separated into two halves. The first half, **Measurement & Uncertainty (11.1–11.2)**, is the foundation of making quantitative measurements in the lab, and we teach in the beginning of Y1. I refer to this as "11A".

The second half, **Spectroscopy of Organic Molecules**, can only be taught after organic chemistry, and will be the last topic we teach
before the Option.  I refer to this as 11B/21.

#### Syllabus

The IB syllabus is available here.  A subject brief is available [here](https://www.ibo.org/globalassets/publications/recognition/chemistryhl2016englishw.pdf).

The syllabus is quite long, and numerous items comprise each topic.  For clarity I number each syllabus line as [*topic*].[*subtopic*].[*category*]\[ID\]; the 3rd *Application and Skills* from topic 1.1 is thus referred to as **1.1.AS3**.  This serialized syllabus is publicly available [as a spreadsheet here](https://docs.google.com/spreadsheets/d/1PSq1i1GN4nzsgtyQxd9-HeMe9TKN5AX3osdE8KoAZpU/).

::: tip Para nuestros colegas que hablan español

La hoja de cálculo también contiene cada elemento según el plan de estudios español.

:::

::: tip For my students

All of these resources are in your Google Folder.

:::

## Teaching sequence

Overall order of teaching is shown below.  Finer divisions are given in the subsequent subsections.

<mermaid>
graph TB
    subgraph Y1 Sep-Nov
    0["0 - Prerequisites"] --> 1["1 - Stoichiometry"]
    0 --> 11A["11A - Measurements"]
    0 --> 2
    1 --> 2["2/12 - Atomic Structure"]
    end
    subgraph Y1 Dec-Feb
    1 --> 5A["5.1-5.2 - Enthalpy & Heat Changes"]
    11A --> 5A
    2 --> 3["3 - Periodicity"]
    end
    subgraph Y1 Feb-May
    3 --> 4["4/14 - Structure & Bonding"]
    5A --> 5B["5.3-15 Hess' Law, Bond Enthalpy, Spontaneity"]
    3 --- 5A
    4 --> 10A["10.1 - Basic Organic - Functional Groups, Isomers"]
    5B --> 6["6/16 - Kinetics"]
    6 --> 7["7/17 - Equilibrium"]
    end
    subgraph Y1 Jun-Y2 Sep
    10A --> 10B["10.2 - Nomenclature, Reactions of alkenes"]
    3 --> 9A["9.1 - Oxidation numbers, balancing redox eqns"]
    7 --> 8["8 - Acids and Bases"]
    end
    subgraph Y2 Oct-Nov
    8 --> 18["18 - Acid-Base calculations"]
    7 --> 18
    9A --> 9B["9.2-19 - electrochemical cells"]
    end
    subgraph Y2 Nov-Jan
    10B --> 10C["10.2-20.3 - Organic Chemistry"]
    10C --> 11B["11B/21 - Spectroscopy"]
    end
    subgraph Y2 Feb-May
    10C --> D["Opt D - Med Chem"]
    11B --> D
    8 --> D
    end
    subgraph Practical
    L0["Lab treasure hunt"] --> L1["Water measurement"]
    11A --> L1
    L1 --> L2["Gravimetric analysis"]
    1 --> L2
    L2 --> L3["Acid-Base Titration"]
    1 --> L3
    L3 --> L4["Determining Molar Mass of Lithium"]
    3 --> L4
    L4 --> L5["Enthalpy of Reaction in Aq Solution"]
    5A --> L5
    L5 --> L6["Hess' Law"]
    5B --> L6
    L6 --> L7["Kinetics Circuit"]
    6 --> L7
    L7 --> L8["Titration Curve"]
    18 --> L8
    L8 --> L9["Determining an Activity Series"]
    9A --> L9
    L9 --> L10["Electrolytic cell"]
    9B --> L10
    L10 --> L11["Reactions of hydrocarbon"]
    10C --> L11
    L11 --> L12["Distillation"]
    10C --> L11
    L12 --> L13["Synthesis of Aspirin"]
    D --> L13
    end
    subgraph ICT
    ICT1["Spreadsheet 101"] --> ICT2["Spreadsheet 102"]
    ICT2 --> L1
    ICT2 --> ICT3["Visualizing Chemistry with Atomsmith"]
    1 --> ICT3
    ICT3 --> ICT4["Simulating reactions with Yenka Chemistry"]
    ICT4 --> L4
    ICT4 --> ICT5["Morse Curve from Ab Initio Molecular Modeling"]
    5A --> ICT5
    4 --> ICT5
    ICT5 --> ICT6["VSEPR from Ab Initio Methods"]
    4 --> ICT6
    ICT6 --> ICT7["Trends in Lattice Enthalpy"]
    5B --> ICT7
    ICT7 --> ICT8["Kinetics simulation with p5.js"]
    6 --> ICT8
    ICT8 --> ICT9["Equilibrium simulation with p5.js"]
    7 --> ICT9
    end
</mermaid>

::: tip For teachers

Reasons for course sequencing is described [here](../../jon/teaching/).

Description of activities can be found under the [IA](../IA/) and [skills](../skills/) tabs.

:::

### Lab work

Chemistry is fun because you get to make slimy, smelly, exploding things. (Or is it just me?) We will be doing plenty of hands-on experiments over the next two years, where you will learn both traditional wet chemistry skills (such as titrations and distillations) as well as ICT skills.[^ICT]  

The Internal Assessment (IA), as well as Section A of Paper 3, examines your grasp of the practical aspects.

[^ICT]: ICT: Information and Communication Technologies

TODO

## Signals

### Written annotations

I use some shorthand in writing. Here is what
they mean:

* **BOD** “Benefit Of Doubt”. This means that your sentence / response is ambiguous and can be interpreted in more than one way, and I have chosen to interpret it in your favor (when it could be interpreted otherwise). You should: review what you have written and, in the future, re-write in an unambiguously correct phrasing.
* **ECF** “Error Carried Forward”. I think it’s not fair for you to be “double whammed” for errors in an earlier part. When an error is made, I mark the subsequent parts based on the erroneous information you had, and thus you may have earned marks that does not match with the answer key.
* **CON** “CONflict”.  This notes multiple, equivocal responses.  Usually this happens when students try to hedge (e.g., “the solution could turn red or it could turn green”).
* **NR / NN** “Not Relevant” / “Not Necessary”. Information that is better omitted.
* **c/, w/** “con” / “with”. I use these interchangeably.
* latin shorthands
    * **e.g.**: for example, 
    * **etc**: *et cetera*, and so on, 
    * **i.e.**: that is, 
    * **v.i. / v.s**. (vide infra / vide supra) see below / see above, 
    * **inter alia**: amongst other (things)
* **btw** Between.
* **nvm** “Nevermind”.
* **OK...** This should be read as, “hmm... I guess that’s OK”. Not a response that I expected (e.g., incomplete response, partially correct).

* **+, ~, -** In annotating your written prose, I may precede a comment with one of these symbols. 
    * “+” or <LaTeX formula="\uparrow" inline /> means the point was adding value to your writing; 
    * “-” or <LaTeX formula="\downarrow" inline /> for an error or omission; 
    * “~” is a neutral comment. 
    
I extend this with “<LaTeX formula="\uparrow{}\uparrow" inline />” and “<LaTeX formula="\downarrow{}\downarrow" inline />” for the really good and really bad.

* **!=** When it is not possible to type <LaTeX formula="\neq" inline /> I will substitute “not equal” by !=. (This is how “not equal” is represented in programming languages.)

* <LaTeX formula="\therefore{} \because{}" inline /> Therefore, because

### Gestures

In class I often communicate quickly across the room with you through hand signals.  Here are what they mean:

* Slow down / stop 
* OK? OK 
* So-so / some problems / cosi cosi 
* No
* Repeat / go a little further
* Watch me / look  there

Expressions Brow-furrowing

### Colors

I use colors with a system of meaning.  Here is the list of colors I use and their primary meaning:

* yellow (brown)
* purple

I use yellow and purple to show negative and positive charges.  Because yellow on white is not so readable, "yellow writing" is often done with a deeper brown instead.

* red
* green

I use red and green to show the "shouldn't" and the "shoulds".  Yellow doubles as a warning color.

* blue
* gray

Blue shows header, and gray is subsidiary information.