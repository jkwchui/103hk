# Kinetics and Equilibrium Simulation

I use dice-rolling as a lead in to rate expressions, and subsequently equilibrium.  I liked the activity because it gives a concrete visualization between what is happening to individual "molecules" and our ability/necessity to describe them as an aggregate.  The problem: there is only so many dice students can roll without spending too much time picking and counting, and with small numbers, the relative uncertainties are high.

<center>

![](/image/kineqmsim_screenshot.png =300x)

</center>

I built a series of digital simulations as the logical progression.  This let students "roll" up to 3000x 100-sided dice, change conversion rules, and visualize the individual dice as well as graphing the outputs.  The titled link lays out the progression / rationale of the activity, all four work-sheets in the progression, and links to the simulations.  

<center>

![](/image/kineqmsim_spreadsheet_screenshot.png)

</center>

As an extension, there is [an accompanying Google Sheet](https://docs.google.com/a/lpcuwc.edu.hk/spreadsheets/d/1qD_ZGFQUFZ4bz56tPtIr-HI4agL5MnBsO7s9wZhcj9k) that parses the output from simulations for further analysis.  The simulation is written not as part of the website (where code is minimized for speed), but separately with ample of comments --- if you, or your students, like to look under the hood, this is built for you to do so.  It makes use of the [p5.js](https://p5js.org/) library.

I have used this activity for several years, and it is stable enough to use as-is.  If you, as teacher, needs clarification, please contact me, and I will update this page to clarify.

## Progression

The following shows the four activities in this series.  The first are meant to be completed one-after-another in the same session (~25 min).  The next two can be done in separate sessions (about 20 min each).

<center>

<mermaid>
graph LR
    Ex0("Physical Simulation with Dice") --> Ex1("Exploring a Digital Simulation")
    Ex1 --> Ex2("Analysing a Simulation")
    Ex2 --> Ex3("From Kinetics to Equilibrium")
</mermaid>

</center>

## Materials

[ ] 100 dice / group of 3--4 students
[ ] Printed worksheets

Entry point to the series of simulations is [here](/app/kineqmsim).

## Worksheets

1. [Kinetics simulation with physical dice](/resources/activities/kineqmsim/6%20-%20kinetics%20dice%20simulation.pdf)
2. [Exploring a digital simulation](/resources/activities/kineqmsim/6%20-%20kinetics%20simulation.pdf)
3. [Analysing a digital simulation](/resources/activities/kineqmsim/6%20-%20kinetics%20simulation%20graphical%20analysis.pdf)
4. [Connecting competing kinetics to equilibrium](/resources/activities/kineqmsim/7%20-%20features%20of%20dynamic%20equilibrium.pdf)

## Teachers Notes

TODO