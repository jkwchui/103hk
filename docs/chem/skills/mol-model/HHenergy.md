# Tutorial: Investigating the H-H bond

In this tutorial, I will show you how to do an *ab initio* quantum mechanical calculation using GAMESS.  After finishing this tutorial you will be able to determine:

* Energy (stability) of molecules at arbitrary conformations, and
* Optimal geometry of molecules

During this process you will learn to navigate the interface, create molecules, making measurements, modifying bond lengths, and submitting a job.

::: warning Off-campus access

The WebMO-GAMESS installation is only accessible on-campus.

If you are visiting this from another school, you would need your own WebMO-GAMESS build.

:::

::: danger Teacher's notes: in-progress writing

I show students how to do this step-by-step in class.  This page is secondary in importance and just gives students a reference for later.

:::

## Preparations

* A spreadsheet for collecting the data is [available here](https://docs.google.com/spreadsheets/d/1nQszPquVbAC9RbDCbrdCMJp7xnKyojHhNOTapb9I2kw/edit?usp=sharing)
  * If you are my student, a special copy was created for your class, and can be found in your Google Drive
  * If you are accessing this from elsewhere, you would need to make your own copy (`File` -> `Make a Copy`)
  * To claim a row, enter your names into a cell under col. A

* A browser window pointing to [http://172.17.0.100/~jkwchui/cgi-bin/webmo/login.cgi](http://172.17.0.100/~jkwchui/cgi-bin/webmo/login.cgi)
  * Username: `Student`
  * Password: `lpcuwc`

## The One-Minute Tutorial

<center>

@[vimeo](318446982)

</center>

## Step-by-step

## Creating a hydrogen molecule

Starting from the `Job Manager`, click on `New job` to enter the Molecule Builder.

![Creating a new job](/image/webMO_newjob.png)

The Molecule Builder has a `Menu Bar` across the top, and a `Toolbar` on the left hand side.  Today we mostly use the Toolbar (labelled in red).

![Interface](/image/WebMO_tooleditor.png)

* **1, 2** are *creation tools*.  You use them to choose elements from the periodic table, after which you can 
  * *click* in the main window to create an atom,
  * *click-and-drag* to create a bond
* **3-5** are *view tools*, which changes what happen when you click and drag in the main window.  Selecting **3** places your cursor in the *rotation* mode, **4** in *pan/translate* mode, and **5** zooms in and out.
* **6** is the **selection** tool that let you choose atoms or bonds.  Holding `shift` as you click lets you choose multiple atoms.
* **7** lets you assign charges to atoms.
* **8** "cleans up" the molecule, by adding sufficient hydrogens to C/N/O, and using VSEPR to estimate the geometry.
* **9** specifies the symmetries of the molecule.
* **10**: undo/redo
* **11** changes how atoms look in the window.

To create a hydrogen molecule,

1. Click on **2 - periodic table**, and choose H.
2. Click once in the main window to create an H atom.
3. Click on the existing H atom *and drag away* to create a bond and another H atom.

You can use the same procedure to create more complex molecules.

### Measuring and adjusting the bond length

At the moment, the distance between the hydrogens is as long as you've drawn it.  We can measure the bond length:

1. Click on **6 - Selection**
2. **Holding `Shift`**, click on both H atoms.  (You can also click on the bond directly.)

The bond length is then reported in the status bar (lower left).

With the bond selected, click on `Adjust` -> `Bond length` in the Menu Bar to change the bond length (e.g., to 1.00 Angstrom).

## Your first calculation

Click on the lower right arrow to advance to the calculations.  You need to now configure the parameters.

### Parameters

* **Job Name**.  How this job shows up on the Job Manager.  I recommend the format `[Your name] - [molecule] - [parameters]`.  Example: `Jon Chui - H2 - 1350 pm`
* **Calculation**.  The *kind* of calculation that is being done.  `Molecular energy` means calculating the energy of the molecule in that particular situation.
* **Theory**.  The assumptions that go into the calculation.  How should atoms be modelled?  Are they "just mechanical spheres of different sizes", or are they formed of electrons and nuclei?  What mathematical model should the computer use to describe electrons?  To describe this mathematically, do you want a function *f(molecule, parameters)* or *g(molecule, parameters)* or *h(molecule, parameters)*?
* **Basis set**.  What math should we use to approximate orbitals?  This is one of the parameters that you would provide to the function *f(molecule, {basis set, [other parameters]})*.

For your first job use the following defaults:

* **Job name**: `[your name] - H2 - [length]`
* **Calculation**: `Molecular energy`
* **Theory**: `RHF`
* **Basis set**: `Routine: 6-31G(d)`
* **Charge**: `0`
* **Multiplicity**: `Singlet`

Click on the blue arrow on the right to advance.

::: tip Theory of molecular modeling

If you are using molecular modeling for your IA, you will need a much more in-depth understanding to choose an appropriate method / basis set.  You will probably also need to change parameters under the `Advanced` tab.

:::

### Viewing output

The desired output for this calculation is under `RHF Energy`, expressed in Hartree.  Hartree is an energy unit for objects at atomic level, and can be converted to kJ/mol.  This is done for you in the spreadsheet.

Working together as a class, map out the energy when the hydrogen atoms are 0.3 to 2 Angstrom apart.

## Interpreting the output

Examine the graph and try to explain:

1. Why does the energy drop (becoming more stable) as the hydrogen atoms approach?
2. Why does the energy rises steeply when they are too close together?
3. What does the *distance* where the energy is at a minima represent?
4. How can the bond energy of a H-H bond be determined?
5. How good was your calculation?
   * Does the bond length fit with experimental observations?
   * Does the bond energy fits with experimental measurements?
6. Could this energy-distance curve be modelled mathematically?
   * How?
   * Has this been done before?

And then,

* How are "molecular modeling" and "database" different?

## Geometry optimization

Chemists frequently wants to find out the "most stable" shape of a molecule.  Instead of making the user change each bond length and angle manually until they find the minima, there is a pre-defined job type that do this search for you.  This is called `geometry optimization`.

Repeat the same build process, but submit a geometry optimization job this time.

## Additional ideas

Today you used molecular modeling to 

* evaluate the stability of a molecule subjected to *arbitrary* distortions, 
* determine bond energies (by tearing two atoms infinitely apart), and
* finding the most stable geometry.

These can be extended to investigate an infinite number of questions.  For example, the "arbitrary distortion" is not restricted to stretching bond lengths, but also compressing bond angles and twisting torsional (dihedral) angles.  As you progress through the chemistry course, keep this in mind - perhaps there are IA ideas that are calling for you to solve!