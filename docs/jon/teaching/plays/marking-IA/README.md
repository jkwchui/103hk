# Marking IAs

*This essay describes how I mark Chemistry IAs.*

As an IB DP chemistry specialist, I supervise a large number of IAs.  Each year I try to improve on the accuracy and workflow of marking IAs.  This is my workflow of 2019.

## 1. Authenticate the work

Since I am in touch with students throughout the development of their IA, academic honesty with respect to the *experimental work* is usually a given.  I do two checks:

* **TurnItIn Threshold**.  Our school uses the ManageBac platform, which is integrated with TurnItIn for plagiarism detection.  My curiosity gets automatically triggered when the threshold exceeds 15%.  This generates quite a few false positives but I think academic honesty is important enough.

* **Manual**.  As of about 2016, TurnItIn didn't catch "ghosting".  It could not catch permutation of "dog ate my homework" into "my homework was eaten by a dog".  For this, I look for mismatch language and *non-sequitur* leaps of reasoning; when I am not sure about the full authorship I go quite deep in the rabbit hole.[^prep]

[^prep]: It helps to read as much as you can about IAs, and get a sense of what students *who you don't teach* are doing.

## 2. Setup rubric / form

The IBO mandates the five criteria, each of which are formed from several aspects.  Without an explicit rubric, I tend to either weigh the aspects inconsistently, or missed some aspects completely.

<IA-Criteria />

The syllabus does not specify the weighing of the aspects, and I find that some ought to be more important than others.  So *I* do the splitting, in 0.25 increments, as follows:

<IA-CriteriaTreemap />

For ICT IAs, *safety / ethics* (0.75) is not evaluated and those marks are re-assigned into Methodology (0.50) and Background (0.25).

I developed a form for entering these scores and associated comments.  I change it after each year's grading session; I won't remember what needs to be modified the year after.  When I mark, I keep the form open on one half of my screen and comment on the other half.

[INSERT IMAGE]

As I subscribe to [AirTable](https://www.airtable.com), I use an Airtable form.  I bridge this to the Page-Designer block.  A Google Sheet linked Form would work just fine.

Note that the form goes Comm -> Ex -> An -> CE -> PE.

## 3. Marking

Let's start with the nitty-gritty involved in marking.  As far as I know what the moderators can see in RMAssessor is **limited to what is visible with no interactions**.  In other words,

* visible: handwriting -> scan
* visible: review points on Word -> PDF
* visible: textbox on PDF
* NOT: sticky notes of any kind. This includes from
  * Adobe Acrobat,
  * ManageBac,
  * Skim on macOS...

If they are "sticky note" already, and you have a subscription to Acrobat, you can "print" PDF with comments on. The comments are "printed" to a separate page and would thus be visible.

::: tip How do *you* know sticky notes are invisible?

Painfully.  In 2018 my score was moderated and I could finally ask for moderator comments.  It came back saying "teacher should give reasoning for how criteria scores are assigned".

I am still a little angry.  Because I *didn't* know whether my comments are visible, I attach a preamble where I explicit put in screenshots of what *should* be seen, and ask that if these *cannot* be seen, the examiner to escalate the issue and request for info from the school.

:::

First pass reading
Comments + Comm

 Sorry, but I'm out of the IA examining circuit and don't have any inside knowledge.  What follows is my shot-in-the-dark.

  When I mark, I just generate (A1) a set of criteria marks, together with (A2) comments for each criteria.  Comments on the PDF/Word doc themselves (B0) are sparse, a few words here-and-there to remind myself what I noticed.

  After the samples were selected, I fill in the criteria marks on IBIS, and copy-paste A2 into the Total Marking Comments box.  Since I mark by 0.25 increments I include also the shades-of-gray for each criteria.  An example of what I paste in the box follows.

    An ambitious project with apparent early initiative.  The candidate did not follow through with any rigor in the actual work or writing.  The science is simply wrong.

    [PE 1.25/2] The candidate should be commended for taking the initiative to learn new techniques which open the doors for the investigation. This interest, however, does not seem to be sustained for the entirety of the project, as evidenced by the shallow analysis and evaluation.

    [Ex 2.5/6] Good RQ but poor execution. Unclear whether there is a systematic error made in the ring sizes. Limited understanding of physiological processes leading up to binding (and thus relevance iRL.) Need discussion of validity of webMO/gamess calcs.; the procedure is almost certainly incorrect (since GAMESS would not be able to handle the 10^5 atoms of the macromolecule). Parameters of the binding constant calculations missing.

    [An 1.5/6] There is almost no data processing that was done, not even conversion to SI units, nor a summary table that should be expected. Missing critical qualitative data that suggests whether the said factors were truly investigated.

    [Ev 1.75/6] Candidate provided generic, vague, simplistic description of results (which I am unable to replicate). Obvious contradictions were unexamined. No comparison with findings of similar studies (e.g., docking with similar substitutions, or experimental measurements with the D2 receptor --- expt affinities *are* available) was made. Improvements were proposed with no specific methods or molecules given.

    [Comm 1.5/4] Stylistic and meaningful errors throughout. Lack of precision in the use of language. Missing key diagrams.


I then (B1) go back to each sample, "rehydrate" my notes, and export it as a PDF.  The corresponding sample for the comment above is attached.

With this in place, I stitch (C) moderator notes (<- abbreviated from last year) / (D) check-list) to the sample, and upload (C-D-B) to eCoursework.

This is all rather time-consuming and probably more exigent / obsessed than necessary, but he moderation process, esp. with the random sampling, is rather opaque to me.  I try very hard to make sure the moderators see what I see, so if I get down / up graded it becomes meaningful learning experience (for me).

(This is super-ironic, since apparently the thousands of words I've submitted in previous years could not be seen in RM-Assessor.  Duh.  I also wish there is more authoritative guides.)
