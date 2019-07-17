# Internal Assessment

<!-- [[toc]] -->

## What is the IA?

The Internal Assessment is common to Higher and Standard Level students, and is a piece of chemistry research that you design, execute, analyse, and write-up. This is to be a 10 h project, including the initial research and writing. The IA is an excellent opportunity to develop your originality, creativity, and resourcefulness, and is a good learning tool to for you to explore a facet of chemistry deeper.

These advantages comes about because the new IAs are totally open-ended. Being so open-ended, however, causes a lot of confusion and anxiety for both students and teachers. There is a great deal of uncertainty with what is expected and how to approach this task. Some students simply become paralyzed at the thought of creating something from scratch; many get doubly-confused over contradictory advice on the internet.

::: warning

IA for Sciences had been revamped in 2016. The format, requirements, and assessment criteria are completely different. If you read advice on "DCP", or submitting _multiple_ IAs / a portfolio, it is referring to the pre-2016 syllabus.

:::

I wrote this guide to help cut through the anxiety and confusion. It will not replace the thoughtful and creative work --- that still needs to come from _you_ --- but the goal is to provide you with step-by-step guidance so you can channel your attention systematically.

::: tip About me

In my former life I worked with synthetic ion channels and carbenes and muons and carbohydrates and RNAs and sensors and medicinal process development and computational chem. So chemistry-wise I start with a broad base.

In my current life I teach exclusively diploma chemistry, so I get to mentor more student projects than probably anyone else. I examined the new IAs for the IBO, and I also developed and lead teacher training workshops for ICT in chemistry. Over 50% of my students achieved a 6 or 7 in their IA component.

:::

## Types of IA

The project needs to be answering a research question you set out, but there are no restrictions as to the methodology you use to resolve the question. There are, in general, four main classes of projects:

1. Experimental (“wet lab”)
2. (ICT) Simulation
3. (ICT) Transformation of secondary (database) data
4. (ICT) Molecular modeling

Hybrid projects involving more than one of these areas are also possible.

Even though **I** am trained as a physical organic chemist and believes in the value of hands-on work, I strongly encourage you to choose an ICT-based project. Experimental ("wet lab") projects usually takes 10+ hours _just for the experimental phase_. This time is often spent on doing the same thing 20 times. ICT-based projects are faster to iterate, which means that

1. you have a richer dataset to analyse, and that
2. you are less likely to be trapped with a dead-end project.

## Process of writing an IA

In general you should expect the following stages:

<mermaid>
   graph TB
   0("Collecting resources") --> 1("Reading/Thinking")
   1 --> 2("Come up with some prelim topics")
   2 --> 2B("Consult teacher")
   2B --> 1
   2B --> 3("Select most viable topic")
   3 --> ICT1("Develop method")
   subgraph ICT
      ICT1 --> ICT2("Preliminary expt/analysis")
      ICT2 --> ICT1
      ICT2 --> ICT3("Data acquisition")
      ICT3 --> ICT4("Analysis")
      ICT4 --> ICT3
      ICT4 --> W1("Writing 1st draft")
   end
   3 --> 4("Develop experiment")
   5 --> 2B
   subgraph Wet lab
      4 -.-> 4B("Prelim expt")
      4B -.-> 4
      4 --> 5("Submit Material Requests")
      5 --> 6("Experiments")
      6 --> 7("Analysis")
      7 -.-> 6
      7 --> W1
   end
   W1 --> W2("Review teacher feedback")
   W2 --> W3["Submit final draft"]
</mermaid>

Preliminary experiments depends on whether the needed reagents are available, and may not be possible for experimental projects.  It is also possible that, over summer, we discovered that it is not possible to source the reagents you need (e.g., hazardous material that cannot be shipped / too expensive); in these cases you would need to modify or come up with a new topic.

## Timeline

At LPCUWC we begin the process in February of Y1, with the topic/exploration expected in May. The first draft is due in November of Y2, and final submission in January of Y2. Term 3 (Y2) is a busy season, and I recommend completing the IA before or during summer; this is very much possible with ICT-based IAs.

<mermaid>
gantt
    axisformat %b-%d
    title IA Timelines
    dateFormat  YYYY-MM-DD
    section Student (Practical)
       3 Seed RQs: RQEx, 2019-02-01, 50d
       Develop one topic / method:after RQEx, 20d
       Submit Exploration: crit, Ex, 2019-04-15, 1d
       Submit material request: crit, MR, 2019-06-01, 1d
       IA days: IAdays, 2019-08-22, 3d
       Additional expt: done, addExpt, after IAdays, 30d
       Write-up 1st draft: after IAdays, 80d
       First draft due: crit, 1stD, 2019-11-08, 1d
       Review draft: after 1stDFB, 30d
       Final submission: crit, fsub, 2020-01-25, 1d
    section Technicians
       Fulfillment: after MR, 80d
       Clean up: after addExpt, 15d
    section Teacher
       Exploration feedback   : FB, after Ex, 30d
       First draft feedback : 1stDFB, after 1stD, 40d
       Marking: after fsub, 40d
    section Student (ICT)
       3 Seed RQs: RQExICT, 2019-02-01, 50d
       Complete Mol Model worksheet: crit, 2019-03-15, 1d
       Complete Database worksheet: crit, 2019-03-25, 1d
       Develop one topic / method: after RQExICT, 20d
       Submit Exploration c/ prelim data: crit, ExICT, 2019-04-15, 1d
       Submit proof-of-concept analysis: crit, POCAn, 2019-06-01, 1d
       Complete acq/analysis: IAdaysICT, after POCAn, 70d
       Submit analysis: crit, analICT, after IAdaysICT, 3d
       Write-up 1st draft: after analICT, 70d
       First draft due: crit, 1stDICT, 2019-11-08, 1d
       Review draft: after 1stDFB, 30d
       Final submission: crit, fsubICT, 2020-01-25, 1d
</mermaid>


## Assessment criteria

Your IA is assessed on **five** criteria, each of which are subdivided into *aspects*.  The proportion of these criteria and aspects are shown in the following diagram.[^subdiv]

[^subdiv]: IBO describes the aspects but not their relative proportions within a criteria.  These are *my* proportions.

<!-- <el-row>

<el-col :span="16"> -->

<!-- <IA-Criteria /> -->
<IA-Criteria />

<!-- </el-col>

<el-col :span="8">

1. Personal Engagement (PE) / 2
2. Exploration (Ex) / 6
3. Analysis (An) / 6
4. Conclusion \& Evaluation (CE) / 6
5. Communication (C) / 4

</el-col>

</el-row> -->

The total score, then, is 24.

While I will explain the rubric in more detail in the Writing section, you should keep in mind that the criteria are additive instead of subtractive. **Instead of hoping to make no mistake, you must demonstrate your competence.** This has implications in how you choose your Research Question.

::: tip Extra benefits from a good IA

Besides the deeper, self-initiated learning that you can do, the IA is a tremendous help for your chemistry teacher writing a reference. We get to see you solving problems and applying your knowledge, and this helps us comment specifically on the strengths you demonstrate. This was once something I could only write for my Extended Essay students.

Also, **with every aspect under your control**, your achievement in the IA is a matter of organization and effort. It feels great going into your exams knowing that you have 20 / 20% pocketed.

:::

These internal marks are then externally moderated to assure that your teacher(s) apply the standards the same way other IB teachers do. What happens here is that random samples of student IAs is called in for marking by IB examiners. If the school marking is consistently too high (_i.e._, the teachers marked too leniently / too low expectations), a penalty is applied across the board; and vice versa. These moderated score then goes to form part of your final IB chemistry grade.

## Overview of a successful approach

I recommend the following step-by-step approach:

- Read the Choosing a Topic section. This helps you put the preparations in context.
- Read exemplars. This give you a sense of what to expect as finished IA. At the time of this writing there are two sets of exemplars available, both of which comes with detailed comments:
  - Ten IAs are available from IBO teacher support material, covering a range of 12--24/24 achievements.
  - Thirty IAs from my students, all of which had a moderated score of 20--24.
- Assess your resources. Compile a list of experimental / ICT techniques that you know, the equipment / databases you have access to, budget for reagent purchase, time for lab access etc.
- Think of your chemistry interests. Find out some existing phenomena that you are interested in and could extend.
- Background research
- Propose a research question
- Order reagent / request equipment
- Setup data collection and analysis spreadsheet Notice that this happens before you do the experiments!
- Perform experiment With the framework in place before the experiment, you would be able to analyse the data as it progresses. This helps cut down multuple botched experiments.
- Analyse data thoroughly
- Write-up first draft

I presented this linearly, but in practice this is an iterative process where you take a step back periodically. Perhaps you had the killer research question... but then discover the reagent is too expensive. Or that perfect-in-theory experiment doesn't work because the compound is not soluble at all. I can help you anticipate some but not all problems --- start early and be ready to change your plans!

As a real science project there are many pieces here --- I have developed the accompanying step-by-step checklist for you to chart your progress.
