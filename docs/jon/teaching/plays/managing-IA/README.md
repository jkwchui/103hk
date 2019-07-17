# Managing IAs

*This essay describes how I manage Chemistry IAs.*

As an IB DP chemistry specialist, I supervise > 50 IAs in a year.  The logistics is complex, and every year I iteratively improve on the workflow of managing IAs.  This is my current (2019-2020) workflow.

[[toc]]

## Timeline

The broad outline of the timeline is coördinated by the school's Academic team / Science department.  I work within the constraints of the following timeline:

<mermaid>
gantt
    axisformat %b-%d
    dateFormat  YYYY-MM-DD
    section Student (Practical)
       Submit Exploration: crit, Ex, 2019-04-15, 1d
       Submit material request: crit, MR, 2019-06-01, 1d
       IA days: IAdays, 2019-08-22, 3d
       Write-up 1st draft: after IAdays, 70d
       First draft due: crit, 1stD, 2019-11-08, 1d
       Review draft: after 1stDFB, 30d
       Final submission: crit, fsub, 2020-01-25, 1d
    section Teacher
       Introduce IA: intro, 2019-01-23, 1d
       Exploration feedback   : FB, after Ex, 30d
       First draft feedback : 1stDFB, after 1stD, 40d
       Marking: after fsub, 40d
    section Technicians
       Fulfillment: after MR, 80d
</mermaid>

<Foldable>

1. We introduce the Internal Assessment in late-January of Y1, concurrent with Y2 submitting their final manuscript, and
2. Receive a draft of their *Exploration* in mid-April.
3. Teachers provide feedback by mid-May, upon which
4. Students (doing experimental IAs) submit a Material Request by end-of-May.
   1. The MR is bounced back if the correction is required
   2. Finalized MRs expected by first week of June, when our school breaks for summer.
5. Technicians purchase and prepare material over summer,
6. Students conduct experimental IAs over three "IA days", and
7. Deliver a draft by mid-November.
8. Teachers provide feedback by mid-December, and
9. Students submit a final manuscript by mid-January of Y2.

</Foldable>

The timeline works reasonably well to:

* stagger due dates for students in a busy Term 3 (minimizing clash with ToK essay / EE and other IAs/WT),
* provide time for teachers to give, and students to respond, to feedback[^time]
* enable diverse kinds of IAs to be conducted (since ordering chemicals is possible through the extended lead time in summer).

[^time]: My workload of 50+ IAs is atypical. Since the crunch time coincides with other teacher deadlines, this is very tight timeline for me.  Would not recommend if most of the staff have this load.

The drawback with the extended spacing is that the timeline starts too early: students have learnt very little chemistry by Jan / Feb of Y1, and have a hard time coming up with meaningful questions.  The generous spacing for students, with widely distributed dates, lowers the urgency for some students who would go on to blow through multiple due dates (since they believe they could make up for lost time later).

Coming up with a good research question is the hardest part; even the best students will not get it on the first take.  I have thus inserted some staging points in between.

The following sections break down some of what I do.  Some items require additional space and is split off into their own page.

## Introducing the IA

### Overview / Logistics

As the first pass (in Jan Y1), in class we
1. introduce the role and purpose of the Internal Assessment,
2. point out the branches of experimental vs ICT IAs,
3. describe the overall criteria, and
4. point out the resources available

Students are human so most of them will forget most of the session.  I lay out similar logistical [here](../../../../chem/IA/) for them to consult when they need to.

Three key resources that must be available to students are
* a list of [equipment available](../../../../chem/IA/equipment.html),
* a list of [reagents/chemicals available](../../../../chem/IA/reagent.html), and
* budget if purchasing is required

I built an inventory system that our technician uses to manage their stock, and the inventory system also drives the student requests and the above lists.  (TODO: write up, link to here)

### Meta-thinking about RQ

I found that distinguishing between

* Levels of Measurement (nominal vs ordinal vs ratio variable),
* intensive vs extensive properties,
* macroscopic vs microscopic properties

is essential for students to realize *for themselves* when a RQ will not work.  Because this is important I will formally introduce and discuss these in class.  Most of the time our IA timeline co-incides with starting topic 5, so I discuss these in the context of enthalpy / temperature.[^temp]

[^temp]: Temperature is perfect for looking at interval (in Celsius) vs ratio (in Kelvin) variable.

### ICT introduction

Within *Structure & Bonding* I introduce students to a variety of ICT techniques, including several passes at [molecular modeling](../../../../chem/skills/mol-model/) and [databases](../../../../chem/skills/database/).  

I steer students to ICT IAs, as I found that these projects emphasize a molecular understanding and opens up possibility for learning new skills.  They are also easier for students to ask meaningful questions.  (Students will want to do practical IAs *because* they believe it simply entail copying and conducting a prep without needing to do the thinking, but of course the hard thinking is what is needed for them to grow.)

## Organizing Research Question (RQ) development

Developing a meaningful, viable research question is **the** hardest task of the whole process.  Intersecting with the real world, the project is limited by constraints in
1. chemicals,
2. equipment,
3. time available,
4. practical skill

Students need to come up with the RQ quite early, and they have never done this before.  Thus even the best students need substantial help: only about one-third of "7" students will be able to come up with a suitable RQ on the first take.  **It is essential that you --- the wiser, more experienced one --- give them adequate guidance**.

### Iterating through RQ proposals

Some years ago I simply provide 1-on-1 time for students to consult me with the RQ.  This didn't work well:
1. Without an explicit "deadline" some students will not be thinking about a RQ
   1. ...and these students are the ones that I worry about most!
2. I have no time to meet more than once with each student (15 min x 40 ppl = 10 hours / round), and with a 30% success rate, once is not enough
3. I get bombarded with informal talks, between class, at lunch, during dinner, every waking moment (literally), and I simply lose track of who is doing what.  Amongst other things I can't learn and improve year-upon-year

To better manage this, in the lead up to the exploration, I now organize student's RQ feedback through three weekly rounds on a common spreadsheet, and add in a "chemistry show" to help stimulate ideas.  *My* timeline is thus modified to look like:

<mermaid>
gantt
    axisformat %b-%d
    dateFormat  YYYY-MM-DD
    section Student
        Submit 1st RQ: crit, 1RQ, 2019-03-07, 1d
        Submit 2nd RQ: crit, 2RQ, 2019-03-14, 1d
        Submit 3rd RQ: crit, 3RQ, 2019-03-21, 1d
        Re-submit 3rd RQ: crit, 3RQB, 2019-03-28, 1d
        Submit Exploration: crit, Ex, 2019-04-15, 1d
    section Teacher
        Introduce IA: intro, 2019-01-23, 1d
        Introduce molecular modeling: model, 2019-02-01, 1d
        Introduce PubChem: pubchem, 2019-02-15, 1d
        Molecular modeling revisited: model2, 2019-02-22, 1d
        Open RQ feedback spreadsheet: open, 2019-02-28, 1d
        Critique 1st RQ: after 1RQ, 3d
        Critique 2nd RQ: after 2RQ, 3d
        Chemistry Show: crit, show, 2019-03-22, 1d
        Critique 3rd RQ: after 3RQB, 3d
</mermaid>

#### Centralized Spreadsheet

A key feature of my revised procedure is setting up a spreadsheet where students can enter their RQ.  It is easier to see than have me explain, so I anonymized a copy for your perusal:

<iframe width=100% height=400px src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQcHrLY3-NPPQdFkMuOkW4GV90EvnbVOVxQhpnAY7BPZCBBlvmQ9yes4W6AAwBFBkR4vozuNUeLLEkE/pubhtml?widget=true&amp;headers=false"></iframe>

(This is a fairly big spreadsheet so you may want to view it [in a new window here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQcHrLY3-NPPQdFkMuOkW4GV90EvnbVOVxQhpnAY7BPZCBBlvmQ9yes4W6AAwBFBkR4vozuNUeLLEkE/pubhtml?gid=0&single=true).  If you wish to build upon this template, you can *Make a Copy* from [this link](https://docs.google.com/spreadsheets/d/1VQwggJW4hp6dHMXliaEef1zXG3bIR--vPj-tGwVM_20/edit?usp=sharing).)

At the beginning I make only one set of columns (for RQ1) available, with instructions that the submission will be close at a particular time.  I don't wait; I comment on the RQ as soon as they enter it.  This both help students get timely feedback, and for me to manage what would otherwise become a stack of 40+ RQ to comment on (thrice!).  

At the advertised closing time I lock these columns, and open up a new set for the next week.  Students were advised that they could refine their existing RQ, or propose altogether new one; they have three extra feedback from me and it is up to them to choose how to use the offer.  The reality is a blend.

Having this structure is helpful because:
1. Students start thinking about their IAs, and iterate through them, over multiple attempts,
2. Doing so with not only my feedback for them, but also able to learn vicariously through viewing feedback on other students' proposals,
3. I have a **written** record of who is doing what, and what I thought previously, which
4. Let me revisit and address common misconceptions in the next year.

I also get less bombardment throughout the day / in emails.[^vale]

[^vale]: Not "no bombardment" (gracias Valentina), but certainly an improvement from previous years.

The third RQ is handled a little differently.

#### Chemistry demos

<Foldable>

Between lack of reading and lack of planning, even after the third round there remains students who either did not have any ideas, or have a trite topic that even they are not happy with.

To help them come up with a topic, and to broaden their horizons, I plan a mini-show with the technicians.  We prepare 8 different demo stations that showcases:

* color changes
  * in solution, with transition metal complexes (we defer topic 13 to the very end), and
  * on solid substrate (which can be investigated with image analysis techniques)
* non-steady state color changes
  * oscillating reactions
  * "blue bottle" experiment
* bulk property changes
  * kinetics of
    * solvation (with a "melting" polystyrene cup in acetone)
    * de-solvation (crystallization) as videos
      * electrocrystallization, and
      * sugar crystallization 
  * slime (borax-PVA) formation, with reversal by addition of glucose
  * liquid absorption by sodium polyacrylate

The intention is to show that there are all kinds of phenomena that could be investigated but maybe that they have not considered yet.  I source the majority of these demos from either *cheMagic* or *Chemical Curiosities*.

</Foldable>

I delay feedback on the third RQ until a few days after this mini-show, so students who wishes to change their minds have the opportunity to do so.

## Feedback procedures

I use a combination of Google Apps and a Sheets add-on called [Doctopus](http://cloudlab.newvisions.org/add-ons/doctopus) to manage the whole IA process.

I first create a template, complete with section headings and prompts for each section.[^twotemp]  There are prompts for the entire IA: students would keep editing this document through the final submission.  I then use Doctopus to "photocopy" one for each student, and use this tool to embargo for commenting, and un-embargo for them to continue editing after feedback.  

[^twotemp]: The requirements for ICT and practical IAs are actually sufficiently different that I actually create *two* templates in the same document.

### Exploration

We collect the Exploration as the first stage of writing, which is always poorly attempted.  Most students are oblivious to the amount of work going into a thoughtful proposal.  The backgrounds will be flimsy.  The methods will contain scant detail.  This is simply part of the process and should not cause disappointment or frustration on your part.[^stern]  My emphasis is to make sure they haven't played themselves into a corner with:

[^stern]: I do give them a stern talking to; this is mostly for the students who haven't applied themselves.

* a topic that is not sensible ("measuring enthalpy of combustion of sodium (I) chloride, sodium (II) chloride, and sodium (III) chloride"),
* a method that will not work,
* a project that is too trivial (e.g., "calculating the enthalpy of combustion of methane with bond enthalpy")

In the case of a too-trivial project I do not outright reject it, but inform them what the likely ceiling will be.

In addition to the specific suggestions, I help the students refine their work by:

1. providing them with a check-list for the Exploration section,
2. giving them a copy of a good Exploration,[^permission]
3. [doing a critique of a dramatized exploration](../../../../chem/IA/critique-ex), and
4. teaching them how to locate, read, organize, and cite the literature.

[^permission]: Ask permission first!

TODO: add links to relevant articles.

I also make myself available for a few hours of face-to-face consultation.

### One-on-One meetings

In one-on-one meetings I try to role-model effective thinking, and take a Socratic approach.  Most of the time I listen with a sheet of A3 paper, and sketch out what they describe.  The sketches often inform what questions to ask and exposes hidden contraditions.

I feel that my meetings with students are generally effective because of three key skills.  The first is my ability to *see* the experiments / would-be data, and represent them in diagrams; the second is the ability to read very fast.  Students often present me with papers / articles that I have never seen before, and I simply need to read it to know where they are at.[^speed]  

Finally --- and most importantly --- is preparation and experience.  As I encounter each proposal I generally read the entire ecology of literature around it, and having done this for a few years, the on-site skimming requires not learning new information but just identifying what is present.  This, I feel, is really an area that you just get better at every year.

[^speed]: I am naturally a fast reader, with top speed of about 1200 words/min when focussed.  (Sustained speed is about 800 words/min.)  However, I've heard that reading fast is a skill that can be developed, and there are websites / applications that can help with avoiding vocalization and thus double/triple "normal" reading speeds.
