---
layout: "../../layouts/TalkLayout.astro"

tracks: 
 - main
talkTitle: "Gigabytes per second of DNA: using Rust for matching genomic motifs"
talkLevel: "Intermediate"
talkTags: ["bioinformatics", "genomics", "simd", "science"]
talkDuration: 15 # 15 or 30 min

speakers: [{
    name: "Martin Larralde",
    image: "martin.jpeg",
    title: "",
    org: "Leiden University Medical Center",
    url: "https://zellerlab.github.io/team/larralde-martin",
    bluesky: "",
    linkedin: "",
    twitter: "",
    mastodon: "",
    github: "https://github.com/althonos",
}]
day: "wednesday"
---

In a classic case of "Rewrite It In Rust", implementing a novel
algorithm for identifying binding sites in DNA led to a 100x improvement in 
speed. This talk emphasizes on *what* made it easier with Rust compared
to C & C++, which are still in use predominantly in high-performance bioinformatics.

////// <!-- sepatator between abstract and bio -->

Martin is a PhD student in Bioinformatics, originally from Paris. After starting his PhD at [EMBL](https://www.embl.org/) in Heidelberg in 2019, in co-supervision with [ETH Zürich](https://ethz.ch/en.html), he moved to the [Leiden University Medical Center in 2024](https://www.lumc.nl/en/).
Molecular Biologist and Computer Scientist by training, he used part of his PhD to write Python APIs for legacy C and C++ scientific code ([PyHMMER](https://github.com/althonos/pyhmmer), [Pyrodigal](https://github.com/althonos/pyrodigal)), as well as new implementations for high-performance computing problems, where Rust is gaining traction.
When he's not writing code or research papers, he plays the bass and the guitar for a solo post-punk project.
