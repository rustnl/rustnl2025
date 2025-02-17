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
---

In a classic case of "Rewrite It In Rust", implementing a novel
algorithm for identifying binding sites in DNA led to a 100x improvement in 
speed. This talk emphasizes on *what* made it easier with Rust compared
to C & C++, which are still in use predominantly in high-performance bioinformatics.

////// <!-- sepatator between abstract and bio -->

Hi, I'm Martin (or @althonos online)! Originally from Paris, I started my PhD at the [EMBL](https://www.embl.org/) in Heidelberg in 2019, in partnership with [ETH Zürich](https://ethz.ch/en.html), before moving to the [Leiden University Medical Center](https://www.lumc.nl/en/) in 2024. Molecular Biologist and Computer Scientist by training, I've been working on high-performance computing on the side of my main research project focusing on the human gut microbiome.

I started writing Rust code in 2017, used it primarily for my MSc thesis project in 2019, and since then I have eagerly followed the evolution of the core language as well as the flourishing ecosystem of libraries. I use Rust for high-performance computing when possible, although I also end up supporting legacy scientific code written in C/C++, and my main language for data analysis or quick prototyping remains Python. 

I am interested in high-performance computing, but also in API design, embedded systems, and more. I'm leading a small programming club at our institute, where we go over various topics regarding software engineering. I play the bass and the guitar and I make random covers in my living room when I (rarely) get the time.


