(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{707:function(e,t,o){"use strict";o.r(t);var a=o(4),i=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"tutorial-investigating-the-h-h-bond"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-investigating-the-h-h-bond","aria-hidden":"true"}},[e._v("#")]),e._v(" Tutorial: Investigating the H-H bond")]),e._v(" "),o("p",[e._v("In this tutorial, I will show you how to do an "),o("em",[e._v("ab initio")]),e._v(" quantum mechanical calculation using GAMESS.  After finishing this tutorial you will be able to determine:")]),e._v(" "),o("ul",[o("li",[e._v("Energy (stability) of molecules at arbitrary conformations, and")]),e._v(" "),o("li",[e._v("Optimal geometry of molecules")])]),e._v(" "),o("p",[e._v("During this process you will learn to navigate the interface, create molecules, making measurements, modifying bond lengths, and submitting a job.")]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("Off-campus access")]),e._v(" "),o("p",[e._v("The WebMO-GAMESS installation is only accessible on-campus.")]),e._v(" "),o("p",[e._v("If you are visiting this from another school, you would need your own WebMO-GAMESS build.")])]),e._v(" "),o("div",{staticClass:"danger custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("Teacher's notes: in-progress writing")]),e._v(" "),o("p",[e._v("I show students how to do this step-by-step in class.  This page is secondary in importance and just gives students a reference for later.")])]),e._v(" "),o("h2",{attrs:{id:"preparations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#preparations","aria-hidden":"true"}},[e._v("#")]),e._v(" Preparations")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("A spreadsheet for collecting the data is "),o("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1nQszPquVbAC9RbDCbrdCMJp7xnKyojHhNOTapb9I2kw/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("available here"),o("OutboundLink")],1)]),e._v(" "),o("ul",[o("li",[e._v("If you are my student, a special copy was created for your class, and can be found in your Google Drive")]),e._v(" "),o("li",[e._v("If you are accessing this from elsewhere, you would need to make your own copy ("),o("code",[e._v("File")]),e._v(" -> "),o("code",[e._v("Make a Copy")]),e._v(")")]),e._v(" "),o("li",[e._v("To claim a row, enter your names into a cell under col. A")])])]),e._v(" "),o("li",[o("p",[e._v("A browser window pointing to "),o("a",{attrs:{href:"http://172.17.0.100/~jkwchui/cgi-bin/webmo/login.cgi",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://172.17.0.100/~jkwchui/cgi-bin/webmo/login.cgi"),o("OutboundLink")],1)]),e._v(" "),o("ul",[o("li",[e._v("Username: "),o("code",[e._v("Student")])]),e._v(" "),o("li",[e._v("Password: "),o("code",[e._v("lpcuwc")])])])])]),e._v(" "),o("h2",{attrs:{id:"the-one-minute-tutorial"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-one-minute-tutorial","aria-hidden":"true"}},[e._v("#")]),e._v(" The One-Minute Tutorial")]),e._v(" "),o("center",[o("p"),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item vimeo-player",attrs:{type:"text/html",width:"640",height:"400",src:"https://player.vimeo.com/video/318446982",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),o("p")]),e._v(" "),o("h2",{attrs:{id:"step-by-step"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step","aria-hidden":"true"}},[e._v("#")]),e._v(" Step-by-step")]),e._v(" "),o("h2",{attrs:{id:"creating-a-hydrogen-molecule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-hydrogen-molecule","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating a hydrogen molecule")]),e._v(" "),o("p",[e._v("Starting from the "),o("code",[e._v("Job Manager")]),e._v(", click on "),o("code",[e._v("New job")]),e._v(" to enter the Molecule Builder.")]),e._v(" "),o("figure",{attrs:{"data-type":"image",tabindex:"1"}},[o("a",{attrs:{href:"/image/webMO_newjob.png"}},[o("img",{attrs:{src:"/image/webMO_newjob.png",alt:"Creating a new job"}})]),o("figcaption",[e._v("Creating a new job")])]),e._v(" "),o("p",[e._v("The Molecule Builder has a "),o("code",[e._v("Menu Bar")]),e._v(" across the top, and a "),o("code",[e._v("Toolbar")]),e._v(" on the left hand side.  Today we mostly use the Toolbar (labelled in red).")]),e._v(" "),o("figure",{attrs:{"data-type":"image",tabindex:"2"}},[o("a",{attrs:{href:"/image/WebMO_tooleditor.png"}},[o("img",{attrs:{src:"/image/WebMO_tooleditor.png",alt:"Interface"}})]),o("figcaption",[e._v("Interface")])]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("1, 2")]),e._v(" are "),o("em",[e._v("creation tools")]),e._v(".  You use them to choose elements from the periodic table, after which you can\n"),o("ul",[o("li",[o("em",[e._v("click")]),e._v(" in the main window to create an atom,")]),e._v(" "),o("li",[o("em",[e._v("click-and-drag")]),e._v(" to create a bond")])])]),e._v(" "),o("li",[o("strong",[e._v("3-5")]),e._v(" are "),o("em",[e._v("view tools")]),e._v(", which changes what happen when you click and drag in the main window.  Selecting "),o("strong",[e._v("3")]),e._v(" places your cursor in the "),o("em",[e._v("rotation")]),e._v(" mode, "),o("strong",[e._v("4")]),e._v(" in "),o("em",[e._v("pan/translate")]),e._v(" mode, and "),o("strong",[e._v("5")]),e._v(" zooms in and out.")]),e._v(" "),o("li",[o("strong",[e._v("6")]),e._v(" is the "),o("strong",[e._v("selection")]),e._v(" tool that let you choose atoms or bonds.  Holding "),o("code",[e._v("shift")]),e._v(" as you click lets you choose multiple atoms.")]),e._v(" "),o("li",[o("strong",[e._v("7")]),e._v(" lets you assign charges to atoms.")]),e._v(" "),o("li",[o("strong",[e._v("8")]),e._v(' "cleans up" the molecule, by adding sufficient hydrogens to C/N/O, and using VSEPR to estimate the geometry.')]),e._v(" "),o("li",[o("strong",[e._v("9")]),e._v(" specifies the symmetries of the molecule.")]),e._v(" "),o("li",[o("strong",[e._v("10")]),e._v(": undo/redo")]),e._v(" "),o("li",[o("strong",[e._v("11")]),e._v(" changes how atoms look in the window.")])]),e._v(" "),o("p",[e._v("To create a hydrogen molecule,")]),e._v(" "),o("ol",[o("li",[e._v("Click on "),o("strong",[e._v("2 - periodic table")]),e._v(", and choose H.")]),e._v(" "),o("li",[e._v("Click once in the main window to create an H atom.")]),e._v(" "),o("li",[e._v("Click on the existing H atom "),o("em",[e._v("and drag away")]),e._v(" to create a bond and another H atom.")])]),e._v(" "),o("p",[e._v("You can use the same procedure to create more complex molecules.")]),e._v(" "),o("h3",{attrs:{id:"measuring-and-adjusting-the-bond-length"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#measuring-and-adjusting-the-bond-length","aria-hidden":"true"}},[e._v("#")]),e._v(" Measuring and adjusting the bond length")]),e._v(" "),o("p",[e._v("At the moment, the distance between the hydrogens is as long as you've drawn it.  We can measure the bond length:")]),e._v(" "),o("ol",[o("li",[e._v("Click on "),o("strong",[e._v("6 - Selection")])]),e._v(" "),o("li",[o("strong",[e._v("Holding "),o("code",[e._v("Shift")])]),e._v(", click on both H atoms.  (You can also click on the bond directly.)")])]),e._v(" "),o("p",[e._v("The bond length is then reported in the status bar (lower left).")]),e._v(" "),o("p",[e._v("With the bond selected, click on "),o("code",[e._v("Adjust")]),e._v(" -> "),o("code",[e._v("Bond length")]),e._v(" in the Menu Bar to change the bond length (e.g., to 1.00 Angstrom).")]),e._v(" "),o("h2",{attrs:{id:"your-first-calculation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#your-first-calculation","aria-hidden":"true"}},[e._v("#")]),e._v(" Your first calculation")]),e._v(" "),o("p",[e._v("Click on the lower right arrow to advance to the calculations.  You need to now configure the parameters.")]),e._v(" "),o("h3",{attrs:{id:"parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Job Name")]),e._v(".  How this job shows up on the Job Manager.  I recommend the format "),o("code",[e._v("[Your name] - [molecule] - [parameters]")]),e._v(".  Example: "),o("code",[e._v("Jon Chui - H2 - 1350 pm")])]),e._v(" "),o("li",[o("strong",[e._v("Calculation")]),e._v(".  The "),o("em",[e._v("kind")]),e._v(" of calculation that is being done.  "),o("code",[e._v("Molecular energy")]),e._v(" means calculating the energy of the molecule in that particular situation.")]),e._v(" "),o("li",[o("strong",[e._v("Theory")]),e._v('.  The assumptions that go into the calculation.  How should atoms be modelled?  Are they "just mechanical spheres of different sizes", or are they formed of electrons and nuclei?  What mathematical model should the computer use to describe electrons?  To describe this mathematically, do you want a function '),o("em",[e._v("f(molecule, parameters)")]),e._v(" or "),o("em",[e._v("g(molecule, parameters)")]),e._v(" or "),o("em",[e._v("h(molecule, parameters)")]),e._v("?")]),e._v(" "),o("li",[o("strong",[e._v("Basis set")]),e._v(".  What math should we use to approximate orbitals?  This is one of the parameters that you would provide to the function "),o("em",[e._v("f(molecule, {basis set, [other parameters]})")]),e._v(".")])]),e._v(" "),o("p",[e._v("For your first job use the following defaults:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Job name")]),e._v(": "),o("code",[e._v("[your name] - H2 - [length]")])]),e._v(" "),o("li",[o("strong",[e._v("Calculation")]),e._v(": "),o("code",[e._v("Molecular energy")])]),e._v(" "),o("li",[o("strong",[e._v("Theory")]),e._v(": "),o("code",[e._v("RHF")])]),e._v(" "),o("li",[o("strong",[e._v("Basis set")]),e._v(": "),o("code",[e._v("Routine: 6-31G(d)")])]),e._v(" "),o("li",[o("strong",[e._v("Charge")]),e._v(": "),o("code",[e._v("0")])]),e._v(" "),o("li",[o("strong",[e._v("Multiplicity")]),e._v(": "),o("code",[e._v("Singlet")])])]),e._v(" "),o("p",[e._v("Click on the blue arrow on the right to advance.")]),e._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("Theory of molecular modeling")]),e._v(" "),o("p",[e._v("If you are using molecular modeling for your IA, you will need a much more in-depth understanding to choose an appropriate method / basis set.  You will probably also need to change parameters under the "),o("code",[e._v("Advanced")]),e._v(" tab.")])]),e._v(" "),o("h3",{attrs:{id:"viewing-output"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#viewing-output","aria-hidden":"true"}},[e._v("#")]),e._v(" Viewing output")]),e._v(" "),o("p",[e._v("The desired output for this calculation is under "),o("code",[e._v("RHF Energy")]),e._v(", expressed in Hartree.  Hartree is an energy unit for objects at atomic level, and can be converted to kJ/mol.  This is done for you in the spreadsheet.")]),e._v(" "),o("p",[e._v("Working together as a class, map out the energy when the hydrogen atoms are 0.3 to 2 Angstrom apart.")]),e._v(" "),o("h2",{attrs:{id:"interpreting-the-output"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#interpreting-the-output","aria-hidden":"true"}},[e._v("#")]),e._v(" Interpreting the output")]),e._v(" "),o("p",[e._v("Examine the graph and try to explain:")]),e._v(" "),o("ol",[o("li",[e._v("Why does the energy drop (becoming more stable) as the hydrogen atoms approach?")]),e._v(" "),o("li",[e._v("Why does the energy rises steeply when they are too close together?")]),e._v(" "),o("li",[e._v("What does the "),o("em",[e._v("distance")]),e._v(" where the energy is at a minima represent?")]),e._v(" "),o("li",[e._v("How can the bond energy of a H-H bond be determined?")]),e._v(" "),o("li",[e._v("How good was your calculation?\n"),o("ul",[o("li",[e._v("Does the bond length fit with experimental observations?")]),e._v(" "),o("li",[e._v("Does the bond energy fits with experimental measurements?")])])]),e._v(" "),o("li",[e._v("Could this energy-distance curve be modelled mathematically?\n"),o("ul",[o("li",[e._v("How?")]),e._v(" "),o("li",[e._v("Has this been done before?")])])])]),e._v(" "),o("p",[e._v("And then,")]),e._v(" "),o("ul",[o("li",[e._v('How are "molecular modeling" and "database" different?')])]),e._v(" "),o("h2",{attrs:{id:"geometry-optimization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#geometry-optimization","aria-hidden":"true"}},[e._v("#")]),e._v(" Geometry optimization")]),e._v(" "),o("p",[e._v('Chemists frequently wants to find out the "most stable" shape of a molecule.  Instead of making the user change each bond length and angle manually until they find the minima, there is a pre-defined job type that do this search for you.  This is called '),o("code",[e._v("geometry optimization")]),e._v(".")]),e._v(" "),o("p",[e._v("Repeat the same build process, but submit a geometry optimization job this time.")]),e._v(" "),o("h2",{attrs:{id:"additional-ideas"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#additional-ideas","aria-hidden":"true"}},[e._v("#")]),e._v(" Additional ideas")]),e._v(" "),o("p",[e._v("Today you used molecular modeling to")]),e._v(" "),o("ul",[o("li",[e._v("evaluate the stability of a molecule subjected to "),o("em",[e._v("arbitrary")]),e._v(" distortions,")]),e._v(" "),o("li",[e._v("determine bond energies (by tearing two atoms infinitely apart), and")]),e._v(" "),o("li",[e._v("finding the most stable geometry.")])]),e._v(" "),o("p",[e._v('These can be extended to investigate an infinite number of questions.  For example, the "arbitrary distortion" is not restricted to stretching bond lengths, but also compressing bond angles and twisting torsional (dihedral) angles.  As you progress through the chemistry course, keep this in mind - perhaps there are IA ideas that are calling for you to solve!')])],1)},[],!1,null,null,null);t.default=i.exports}}]);