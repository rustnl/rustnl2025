---
layout: "../../layouts/TalkLayout.astro"

tracks: 
 - deep dive
talkTitle: "Inching ever closer to the Rust standard library with gccrs"
talkLevel: "Intermediate"
talkTags: ["compiler", "tooling", "gcc"]
talkDuration: 30 # 15 or 30 min

speakers: [{
    name: "Arthur Cohen",
    image: "arthurcohen.jpg",
    title: "Compiler Engineer",
    org: "Embecosm",
    url: "",
    bluesky: "",
    linkedin: "",
    twitter: "",
    mastodon: "https://hachyderm.io/@cohenarthur",
    github: "https://github.com/CohenArthur",
    description: "I am a french compiler software engineer working at Embecosm SAS. I’ve been contributing to the gccrs project for the past four years, and have contributed to alternative rustc compiler backends as well. I have always been really passionate about Rust and programming languages in general, and I hope to help increase its reach a little bit in our own way."
}, {
    name: "Pierre-Emmanuel Patry",
    image: "pierreemmanuelpatry.jpg",
    title: "Compiler Engineer",
    org: "Embecosm",
    url: "",
    bluesky: "",
    linkedin: "https://www.linkedin.com/in/pierre-emmanuel-patry",
    twitter: "",
    mastodon: "",
    github: "https://github.com/P-E-P",
    description: "Toolchain engineer at Embecosm SAS and lecturer at EPITA, Pierre-Emmanuel has been involved with gccrs for the past two years. He has a keen interest in kernel and out of order cpu designs.",
}]
day: "wednesday"
---

Gccrs, an alternative compiler for Rust, has had the goal of compiling the extremely complex std crate for a few years now.
Reaching that milestone will prove that the compiler can handle real Rust code,
and allows us to tell you about all the “interesting” compiler tricks we’ve had to deal with.

////// <!-- sepatator between abstract and bio -->
