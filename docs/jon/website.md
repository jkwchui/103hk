# About This Website (2019)

After a decade with Wordpress, I pulled the plug.  The idea had been in gestation for about three years.  Learning by me and developments by others have finally made possible this attempt.

Decisions happen from a mix of push and pull, aversions and affinities.  This decision is committed largely through philosophical pulls.  The effort is challenging but full of joy to see visions made real.  In this essay I try to articulate the thinking.

## Dimensions and Agency

*Dimension* and *agency* are two qualities of a media.  Invisible, they are nonetheless the rails on which Thoughts run.  What is accessible beyond the rails depends on the stamina and prowess of the reader.

Dimensionality describes the bandwidth of information at any instant:

1. **1D** communications presents ideas sequentially, one piece of information articulated at a time.  Verbal and written prose are 1D.
2. **1+δ D** superimposes additional elements onto a 1D media to convey additional relationship.  Examples include using fonts and colors to indicate continuity between ideas.
3. **2+δ D** presents idea on a plane.  Images and tables can convey size / distance / arrangement / categories --- in sum, compare and contrasts.  Data visualization, visual story telling, graphic design [...] are disciplines that seek to stretch the δ into a Δ.
4. **2D + _t_** shows additionally images that evolve through time.  Animation falls in this category.
5. **3D** allows interacting with complex objects, relations, and most importantly, perspectives.  True 3D involves physical models, or AR/VR.  Many of its features can be simulated in pseudo 3D, which allows user rotation of an object that is presented in a 2D plane.
6. **3D + _t_** presents an evolving 3D model.  Life is like this.
7. **>=4 D** generally confuses our puny human minds.

All these accept 🎵 and 🌹 and [...] for simultaneously evoking emoions.

*Agency* describes who chooses what is being presented.

* **Writer-directed** tells what the author wishes to say, whereas
* **Reader-directed** answers what the reader wishes to know.

Existing works are mostly blends of 80% 1D + 20% 2D:

1. 80% words, which is by nature sequentially and holds one idea at a time, and
2. 20% pictures/tables
   1. for changes, these pictures often describes **states**, conditions *before* and *after* interesting things happening, but never *during*

They are also purely author-directive: any reader will find the book to be identical.  The media constrains what could be said.

1D is easier to craft[^ease] and, in some cases, better for conveying the idea.  (Ideas that benefit from a 1D representation seems to be those that are complex and taxes the reader's mind to the brink of what it is capable of.)

[^ease]: Writers would disagree about 1D being easy.  "*My* short story (1D) is more time-consuming to write than *your* video (2D+t+🎵)" is not the relevant comparison; the resource required to turn *your* short story into into an equivalent length film.

What I wish to explore is to 

* push up the dimensionality as appropriate, and 
* blend in reader-directives.  
  
I often write about chemistry: chemistry involves objects transforming in time, and the most closely we can align the representations, the most the learning can be translated to the real world.  I propose to do this by, as possible, blending 

* **visual** representations, and
* **animations** that try to capture *transitions*, the exact moments where the interesting things are happen*ing*
* **interactions**, exploring phenomena by watching it change in real time, connecting different levels of abstract representations (graphs, pictures, symbols).  Numbers that the user can change and explore.

### Example 1: 1D -> 2D+t

Instead of *describing* that

>  electron, with the same charge, repels each other

Or images that *suggests* motion:

<center>

> ![Electron repulsion](./electronRepulsion.svg =300x)

</center>

We will present two electrons trapped together:

<center>

<anim-electronRepulsionSimple />

</center>

Clicking on the walls let the electrons free.  Try!

### Example 2: 1D -> 2D -> 3D

Instead of *describing* that

> DNA is a double-helix.

Or showing:

> ![DNA Double Helix, Francis & Crick](https://www.nature.com/scitable/content/4453/watsoncrick_1953_FULL.jpg =x150)

We present this:

<Molecule pdb="1bna" />

### Example 3: Interactive problems

[INSERT number question]

In some way this is what I wish I had when I learnt chemistry.  In the 90's I made these same repelling e^-^ in Flash; the attempt quickly crumbled under its own weight.  The hardware was (relatively) slow; the software, both for creation and delivery, lagged; the wetware (me) needed many more years of upgrading.

<!-- [INSERT WARDLEY MAP OF NICHE: vert: Visibility, hor: evolution] -->

In 2019, I think it's time to give it another try.  The stack I used here can be seen in the [Colophon](../colophon.html), and you can read all the source from [the Github Repository](https://github.com/jkwchui/chem-jon-hk).

<!-- ## Cultural Statement

The Internet of the 90s was weird & clunky, but the Internet of the 10s is a disease.  The business model of the day is to capture your attention, make you addicted, surveille you, and sell it to the highest bidder.  It has adverse social consequences.  It's wrong.

The Internet needs not be a parasite that injects a neural toxin to manipulate its host.  We need more examples  -->