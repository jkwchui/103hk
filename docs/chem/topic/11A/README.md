# 11A: Measurements

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

## Number line

## Significant figures

[Sig fig](./sigfig.html)

## Uncertainties

[Uncertainties](./uncertainty.html)

## Instrument & Replicate Uncertainty

## Accuracy & Precision

## Improvements