# Reflections

## Approach

Broadly, the mapping could be done in two ways:

1. dynamically using GIS or Open Street Map / Google Maps etc, and
2. statically by drawing it on a base map

The programmatic approach can achieve truly real time crowd-sourced info. I chose the low tech approach because I know we have poor understanding of what we need to build (and that building a system would be premature optimization), and consider the disadvantages (manual labor, 3-5 min delay, full map download) acceptable.  

Of the disadvantages, the most severe is the manual labor.  The Control Room is high-intensity, with no breaks for up to 10 hours.  I will describe some of our improvements that lowers the intensity and makes the task more tolerable.  Having seen a few other attempts, I think the judgment / vetting is essential, and automated system will still need this to complement their work.

## Generating the base-map

<Foldable>

Design-wise I feel that the basemap need to be minimal in color and contrast, so actual signals stand out.  I wanted capacity to easily generate bilingual versions.

For 7.21, I achieved this by manually tracing over several screenshots of a Google Map.  (My drawing tools: iPad + Pencil, using Concepts.app to generate resolution-independent vectors.)  Buildings, roads, and annotations (in en/Zh) were in separate layers.  The end of the march was Southorn Playground in Wan Chai, but I expected it to spill out to Gov HQ and/or Chater Garden in Central, and have traced a wide map.  This took about 5 hours and is really stupid in hindsight.

For 7.28, I built my basemap by *styling* with Mapbox Studio, picking out "tiles" through screenshots, and stitched them together with Photoshop's *Photomerge*.  I chose Mapbox Studio because it let me control what is displayed, and how it is displayed, with extremely fine granularity.  Using this I was able to generate two sets of identical basemaps, at high-resolution, in different languages.

The method works sufficiently well, so after Yuen Long, I generated full maps for the Island (from Fortress Hill to HKU) and for Kowloon (Prince Edward to TST).  These runs about 13000 pixels on the long edge and displays clear street names when zoomed in.  Photomerge is the only error-prone step here, with mysterious crashes after long stalls.

::: warning Improvements

It is possible to iterate tiles automatically using the mapbox API or wrapped versions [like this](http://prasantakrdutta.com/print-maps/), but I have not investigated.

:::

</Foldable>

## Difficulties with Communications

I knew we were extremely naive, and our communication notations would not be sufficiently expressive at first imagination.  So I crashed the 7.20 pro-police gathering to get some experience.  It was through that which we realized that the flow direction is possibly the most important thing that we didn't have a notation for.

On 7.21 we were still naive.  We fielded a team of 8 runners and I dealt with everything else.  From the (now called) Control Room, I keep receiving information that takes much back-and-forth to fully understand (from our runners), and much noise that is indecipherable (our favorite whipping boy here was the repeated "X police vehicles on Gloucester Road W".  When you think about it, doesn't tell you anything meaningful!)

We used a coordinate system, and that helped us narrow the location precisely and concisely.  The weakness is that a coordinate system necessarily restricts us to a particular district, and doesn't work when folks just walk and walk and walk.

::: warning Improvements

Runners need training and experience.  They are **NOT** plug-and-play, and I am quite skeptical of crowd-sourcing all information indiscriminately.  As a civilian movement, it is worth looking at growing a cross-group team that can apply the same --- or at least compatible --- reporting protocol, once we have an adequately expressive notation.

:::

Runners can find themselves in fast-changing situations where they are actively threatened.  (Tear gas comes sudden, fast, and furious.)  Often they are not locals and really don't know where they are; the same goes for the Control Room.

...and then, monitoring several channels, watching 4-in-1 live, responding to runners, drawing map, post-process (compression, versioning) and distributing is really alot to do for one person.

## Formalizing the Control Room

Trained runners does not solve the Control Room problems:

1. Too much task-loading,
2. Unfamiliarity with locations
3. restrictions of a fixed coordinate/district system

We resolved this by *building a system* that let us split task into the current setup:

<center>

<mermaid>
graph TB
    r1(Runner 1) --> i1(Integrator 1)
    r2(Runner 2) --> i1
    ri(Runner i) --> i1
    tg1(TG channel 1) --> i2(Integrator 2)
    tg2(TG channel 2) --> i2
    tg3(TG channel j) --> i2
    live1(Live channel 1) --> i3(Integrator 3)
    live2(Live channel 2) --> i3
    livek(Live channel k) --> i3
    i1 --> M(mapper)
    i2 --> M
    i3 --> M
    M --> W(103.hk/map)
    M --> tgout(TG channels)
</mermaid>

</center>

One of us prototyped a Google Form / Sheets for standardizing and splitting input.  We then discovered that, by using AirTable instead, we can hook **text** input to Google Geolocate API and turn it into a geocache (location).  It works for even quite poorly structured inputs, input with mistakes in writing/spelling, and absolutely marvellously when cross-street / #-street is available.  Selected geocaches can then be visualized on a Google Map.

The existence of the form means that someone can specialize in interpreting / digesting the amorphous information, and remove these responsibilities from the map-drawing.  Since multiple people could access the form at the same time, we potentially could vet and integrate as many sources as we have Integrators; there does not need to be one mind that holds the whole problem.

The system worked very well for us on 8.03, even though at one point there were four streams of protesters (and scattered Force responses), spread across MK / YMT / TST / Hung Hom, and we had a grand total of 1 runner, 1 integrator, and 1 mapper.  (The Integrator revealed her necessity by her absence; when she left the mapping became, once again, overwhelming.)

## Remaining problems

There are three problems we have that is outstanding, that we have honestly just been fudging our way through.

1. **We have no working mechanism for expiring map annotations**.  Runners can only report what they see, and not what they *don't* see.  It is often impractical for them to download the map and comment on what is outdated, and most of the time only our most experienced runners have the presence-of-mind to do that.
2. **We have no real understanding of area information**.  Runners need access to high vantage points (e.g., roof access) to be able to see and report crowds (both sides).  Our runners usually don't have that.  Perhaps a drone team need to be deployed at selected cases.
3. **Our system hems us to a specialized team with little horizontal/temporal expansion**.  Because we use idiosyncratic combinations of technology, each piece of which requires some onboarding / restricted access, we can neither scale to multiple mobile fronts (8.05!) nor do this on-demand (we *need* three of our core team of four to function).

Bandwidth (we burnt through 200 Gb even with tg distribution) / access / automating the compression is a problem, but relatively minor and probably have easy-to-reach solutions.

## Closing: Recommendations / requests / room for collaboration

We made many rookie errors, and I detailed them here so other groups can avoid them.  

### What did we do that worked? 

* **we iterated a (battle-tested) necessary *but insufficient* vocabulary that any source need to report information**.  If you are building a system for collecting input, and it is missing some of the elements, there are elements of the world that you are not seeing.
  * This is insufficient because it misses a regular mechanism for invalidating expired data.  A possible way (I think SentryHK does it) is to request runners to predict an expiry duration for the event.
  * This is insufficient because it lacks a rigorous way of describing area.
* **the visual design of the output works**.  We get complaints initially (every time!) that red should be used for police instead of purple (I chose to reserve it for urgent matters), otherwise it actually seemed to be clearly interpretable with no issue.
* **geolocate is really, really good**.  I strongly advise that, if possible, you build in a text->location feature.
* **found a minimal personnel requirement**.  Quality of "guy-from-the-street" report is really unusable, and human vetting is a necessity.  However, a team of 2 runners + 2 Control Room *is* sufficient, provided they know what they are doing.

### What help would the 103.hk map team ask for?  What's for the future?

The situation on the ground is fluid, so no one even know what is happening, or whether it is worth building anything more.  I hope Hong Kong don't need to keep going to protests and occupy indefinitely.  We being useful is a very sorrowful situation.

If we need to continue to do this, I think the priority is to have all the mapping groups / users to sit down face-2-face and develop a necessary **and sufficient** vocabulary.  This lets us:

* train runners from all walks of life, so that all reports are meaningful, one report can be used everywhere,
* build systems that we can expect to work (code isn't fudgeable like a hand-drawing)

Tech-wise, I could use a hand for dev the other parts of the website (do you know JS / vueJS / elementUI?  There are some components that would take me days to build that is probably a handful of hours for someone who know what they are doing.)

Our team are all in school, and after summer I can't see us being able to do this every weekend.  But I am not versed enough with GIS / OSM-derivatives to see how a minimally-manned system can be built.