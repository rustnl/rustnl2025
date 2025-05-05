---
layout: "../../layouts/TalkLayout.astro"

tracks: 
 - ecosystem
 - gosim-spotlight
talkTitle: "Bringing Rust to .NET"
talkLevel: "All"
talkTags: ["GOSIM Spotlight"]
talkDuration: 10

speakers: [{
    name: "Michał “FractalFir” Kostrubiec",
    image: "michal.jpg",
    title: "",
    org: "",
    url: "https://fractalfir.github.io",
    bluesky: "",
    linkedin: "https://www.linkedin.com/in/micha%C5%82-kostrubiec-85a037269/",
    twitter: "",
    mastodon: "",
    github: "https://github.com/FractalFir",
}]
day: "tuesday"
---

Rust and .NET seem like they are from different planets - however, this does not have to be the case.

In this talk, I will tell you about `rustc_codegen_clr`, and my work in trying to bridge the gap between Rust and .NET.

I will show you how Rust code can directly use .NET APIs. I will also talk a bit about creating .NET-friendly APIs in Rust, and compiler-side support for class definitions.

So, come and take a sit, as I show you how we can bring those two worlds together!

////// <!-- sepatator between abstract and bio -->

Hi! I am Michał Kostrubiec(aka FractalFir). I am a young(19 year old) student from Poland, obsessed with compilers and procedural generation - code is my artform. 
For the past 1.5 years, I have been working on compiling Rust for some obscure targets. I managed to get Rust running inside the .NET runtime, 
and I am now working on compiling Rust to C. This would allow us to run Rust pretty much anywhere, which is neat :).

I also am a big space nerd - I love writing gravity simulations.


