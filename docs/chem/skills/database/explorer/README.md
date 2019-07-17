# Tutorial: Your First Database Project

> For simple organic molecules, are boiling points *linearly* proportional to molar mass?

## Stages of a database project

Once your research question is settled, you should follow this approach for a database investigation:

* **Plan the data collection.**  You need to decide on *what* data to collect, *where* to find this data, and equally importantly, *how* to archive this information.  Plans often fal but planning is indispensible.
* **Collect the data.**  With a plan, you can now go out to collect the data and place them in your framework.
* **Clean the data.**  Data is messy, and not necessarily annotated in the format you want it to be.  *E.g.*, you expected the temperature to be in Celsius, but a source is giving your the temperature in Fahrenheit, so you need to clean this into a consistent format.
* **Visualize relationships.**  Once you have a curated data-set you can search for meaning within it.  Does the data support your hypothesis?  Graphs would help you see the relationships hidden in big table of numbers.
* **Transform data.**  As you explore the data-set, you may find that what you need is not inside it, but can be obtained from it.  An example may be that you have collected boiling points in degree Celsius, but discovered that you *actually* need them in Kelvin.  You would then convert your values and iterate through Step 4 again.

In this tutorial, you will investigate, as a group, whether it is true that *boiling points are linearly proportional to molar mass*.  We will follow the approach outlined above.

::: tip Teachers Notes

Before this class, my students have studied shapes and dipole but have *not] studied intermolecular forces.  They have learnt molecular modelling, and have already calculated dipole moments for the molecules in the supporting spreadsheet.  In addition, the students have also had two hours of spreadsheet training, which included conditional formatting and data validation, though not put together in a full demonstration as in the supplied starter spreadsheet here.

:::

## Planning the data collection

To help you get started, I have prepared a [spreadsheet to help you collect the data](https://docs.google.com/a/lpcuwc.edu.hk/spreadsheets/d/1I1KPN1qTJhIGI-fa2IEv6MIfMey4IWv5vOZyVoai07s).  Please make **one** copy for your group (`File` -> `Make a copy`), and share that amongst yourselves.

This spreadsheet captures the planning I would have done before starting to collect data.  Let me guide you through some of the thinking.  (You have already learnt how to implement the thinking through our spreadsheet workshops; consult the Spreadsheet Tutorials to learn what you cannot yet do.  To begin with, I created three separate worksheets:

img(src="/img/database/databaseTutorial-01.png" alt="The three worksheets")

The first one I created was the `Sources` sheet; in it I list all the sources you will use:

img(src="/img/database/databaseTutorial-02.png", alt="Planning data sources")

* [NIST Webbook](http://webbook.nist.gov/)
* [PubChem](https://pubchem.ncbi.nlm.nih.gov/)
* [ChemSpider](http://www.chemspider.com/)
* GAMESS via WebMO - for values calculated from molecular modelling

The first three are comprehensive databases for general chemistry, and suffices for what you need here.  When you are planning your own investigation, you will need to investigate what are appropriate sources; *e.g.* if you are investigating properties from crystal structures, you may want to include CCDB and RSCB as sources.

The second sheet is a `Data Entry` sheet.  Here I list all the molecules I (currently) plan to collect information on, and the properties I need to collect.  For each property I also allowed a space for entering where I collected the data (important when backtracking to cite the sources), and a space for taking notes (to note any exceptions or suspected errors).

img(src="/img/database/databaseTutorial-03.png", alt="Data Entry Sheet")

I used Data Validation to ensure that only the sources listed in the `Sources` sheet can be entered, so every reference to the sources are internally consistent.  This avoids the confusion arising from one group member entering "chemspider" and the other "chemspider.com", and errors arising from typos ("cehmspider").  I further color-coded (conditional formatting) the source based on whether it is a literature source (green) or calculated source (blue).

I included some starter data to help you see how the sheet is used.

The last sheet is an `Data Exploration` sheet.  The Data Entry sheet is comprehensive, but the clutter makes it difficult to see the big picture.  The `Exploration` sheet automatically pulls data from the Data Entry sheet (based on the top and side rows) and graphs them.  This let you agilely explore the data without getting bogged down on the details.

img(src="/img/database/databaseTutorial-04.png", alt="Data exploration sheet")

To experience this feature, click in cell `A2` and select a different molecule.  Observe how the properties automatically updates.

Besides improving your agility in exploring data, the auto-update also makes your collection more robust.  If you re-type the same value every time you need it, then over the course of an investigation you may have five or six copies, scattered over multiple spreadsheets.  Errors creep in and become very difficult to root out.  Adhere to the coder's motto of **DRY**: **D**on't **R**epeat **Y**ourself.

## Instructions

Now that you know what the starter spreadsheet does, you can use it to support a database property exploration.  Follow these steps.

* **Add a data source.** Add "Wikipedia" as one of the options in the drop-down box, and apply conditional formatting such that entries with Wikipedia selected automatically appears green.
* **Collect data.** Collect data from the #[a(href="http://webbook.nist.gov/") NIST Webbook], #[a(href="https://pubchem.ncbi.nlm.nih.gov/") PubChem], or #[a(href="http://www.chemspider.com/") ChemSpider] for each of the molecules, and enter them into the *Data Store* sheet.  Wikipedia is a fine source, but the goal here is to expand your horizons.  Note all the different properties that you *could* investigate.  You may encounter incongruency between (or even within) the same data-base; make a note of it, and use good judgment.
* **Fix the Explorer sheet.**  The formula in the Explorer sheet is broken, and only work for the first two rows (or does it?)  Fix it so that you can autofill multiple entries.  (Hint: when you click on the cell, the cells referenced by formula get colored boxes.)
* **Investigate the hypothesis.**  Use the updated *Explorer* sheet to investigate the veracity of "boiling points are linearly proportional to molar mass".  Is it true?  Are there exceptions?
* Add additional sheets to explore alternative hypotheses.  Consult the section on Intermolecular Forces in your textbook.
* Setup a "*bubble chart*" to visualize different classes of compounds and their dipoles.  Use the instructions to help you.
* Add additional molecules to support or refute your hypotheses.

::: tip 

Don't get stuck for too long.  If your group cannot resolve a problem in two minutes, ask for hints.

:::

::: warning Teacher's Notes

Teachable moments would be lost if [the solution](https://docs.google.com/a/lpcuwc.edu.hk/spreadsheets/d/1nlw0Q1jTUOtmkjC-b0RHZr1f2UvPDAW9Yt0n1YZ7iQI/) is available too soon.

Some students will encounter conflicting values in the database search (*e.g.*, is it -6 or 49 degrees for methylamine boiling point?)  Remind them that boiling point is a function of pressure; this is also a good point to discuss why reduced pressure was needed to make the measurement.

Recommend students to duplicate the explorer sheet before attempting to fix it.  Often their cure kills the patient!

:::

[TODO: add step-by-step video guides to troubleshooting and developing the solutions.]

## Additional Investigations

You can devise a topic for your own IA using the database approach.  For example, you learnt some thing from this project but you *still* don't know:

* How much does hydrogen bonds contribute to the boiling point?
* Does the same "rules" apply to melting points?  If not, why not?
* Does the same rules apply to the aqueous solubilities?

::: tip

This project ends with you having a *qualitative* understanding of how strong different intermolecular forces are relative to one another.  To find out *quantitatively* how strong the different intermolecular forces are, and to model them numerically, follow the Solver tutorial here.

:::