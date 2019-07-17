# IB Chemistry

These pages support the learning and teaching of chemistry at a Year 11-13 / first-year university level.  Specifically this caters to the International Baccalaureate diploma which I have taught and examined for a number of years.

## Feature attractions

1. [Searchable / filterable syllabus](./course/syllabus/)
   * también disponible [en español 🇲🇽 🇪🇸 🇦🇷](./course/syllabus/es.html)
2. [Topic-sorted glossary](./resources/glossary/)
   * también disponible [en español 🇲🇽 🇪🇸 🇦🇷](./resources/glossary/es.html)
   * disponible [en francés 🇫🇷 🇨🇩 🇨🇦](./resources/glossary/fr.html)
   * [日本語 🇯🇵](./resources/glossary/ja.html)でも利用可能 
3. [Complete notes](./resources/notes/)
4. [IA Guide](./IA/)

::: tip Everything is in-progress

I design and write and draw and code and translate and produce videos.  Development is, in the best days, maddeningly slow and, in the best months, halting.

:::

### For students

The primary audience are my students, and this section is written as me talking to them.  There are notes, links to resources, and an in-progress guide to the IA.  If you have questions and comments, website or otherwise, talk to me.

If you are visiting from elsewhere, I specify the timeline and logistics for my students, and presumed some common experiences in class.  For example, the notes are more anchors to memories of what my students have experienced, rather than an exhaustive walkthrough of the syllabus.  (For that I recommend your textbook.)

### For teachers

My secondary audience are teachers.  The IB diploma is seeing rapid adoption, and many colleagues are new to the curriculum.  It is, for example, not clear how the various topics hang together, and one of the most frequent questions on teacher forums is the order of teaching.  The IB DP program has a steep learning curve and I remember what it was like.

Over years I grew into the program.  I sequence and divide topics based on what flopped, and you may find the fruits of my failures --- expressed as maps --- useful as a starting point.

As an example, *I* think that 11A, Measurements, could be dissected into the following interdependent chunks:

<mermaid>
graph LR
  classDef default fill:#f9f,stroke:#333,stroke-width:4px;
  NL("number line") --> SF1("1: count sig figs")
  NL --> G0("Terms")
  Ex("Exact numbers") --> SF1
  Ex --> U2
  subgraph Sig figs
    SF1 --> SF2("2: combine sig figs")
    click SF2 "./sigfig.html#skill-2-combining-numbers"
  end
  subgraph Uncertainties
    U0("Notation") --> U1("Abs and Rel Uncert")
    U1 --> U2("Combine uncert")
    U3("Instr. uncert") --> U2
    U4("Reprod. uncert") --> U2
    U2 --> U5("Reporting")
    SF2 --> U4
    SF2 --> U1
  end
  subgraph Graphs
    G0 --> G1("Curve fit")
    G1 --> G2("Fitness of fits")
  end
  subgraph Evaluation
    Ev0("Lit values") --> Ev1("Syst errors")
    U5 --> Ev1
    U5 --> Ev2("Random errors")
    Ev1 --> Ev3("Goodness of results")
    Ev2 --> Ev3
    G2 --> Ev3
  end
</mermaid>

This is implicit in experienced teacher's heads but I haven't seen it expressed on paper.  It is not necessary optimal but I think you'd become clearer about the dependencies when you take it apart.

Under the *Jon* tab there is a separate section on how I teach.  This includes [musings on pedagogy](../jon/teaching/principles.html), [activities](../jon/teaching/plays.html), and [technical guides](../jon/teaching/techniques.html).

<!-- Thinking behind explanation, and caveats are hidden on the page and can be viewed by toggling on the Teacher switch under Settings. -->

For more resources I suggest you to subscribe to our Teacher Resource Exchange.  Instructions for access can be found on the [myIB forums](https://internationalbaccalaureate.force.com/IBProgramme/s/question/0D50O00004pjt0YSAQ/teacher-resource-exchange).