---
layout: "../../layouts/TalkLayout.astro"

tracks: 
 - main
talkTitle: "Corrosive C - Compiling Rust to C to target new platforms"
talkLevel: "Intermediate"
talkTags: ["Rust", "Compiler", "Backend", "C"]
talkDuration: 30 # 15 or 30 min

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

Rust is a language we all know and love; however, we can't yet use it on all systems. Certain architectures / platforms don't support Rust at all, only providing a C compiler. In this talk, I will show you how we can compile Rust to C, allowing us to bring the language to new places!

////// <!-- sepatator between abstract and bio -->

Hi! I am Michał Kostrubiec(aka FractalFir). I am a young(19 year old) student from Poland, obsessed with compilers and procedural generation - code is my artform. 
For the past 1.5 years, I have been working on compiling Rust for some obscure targets. I managed to get Rust running inside the .NET runtime, 
and I am now working on compiling Rust to C. This would allow us to run Rust pretty much anywhere, which is neat :).

I also am a big space nerd - I love writing gravity simulations.


