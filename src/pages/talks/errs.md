---
layout: "../../layouts/TalkLayout.astro"
tracks:
 - rust project
talkTitle: "(Almost) Everything You Should Know About The Compiler Frontend"
talkLevel: "Rust Project members and contributors"
talkTags: ["rustc"]
talkDuration: 60
speakers: [
    {
        name: "Michael \"compiler-errors\" Goulet",
        title: "",
        org: "",
        image: "",
        url: "https://errs.io",
        linkedin: "",
        twitter: "",
        mastodon: "",
        github: "https://github.com/compiler-errors",
        bluesky: "https://bsky.app/profile/errs.io",
    },
]
day: "wednesday"
---

Rustc's frontend has various stages, phases, contexts and IRs, with the
code going through transformations and acquiring invariants that build up
to ensure the compiler is well equipped to do its analysis that underpins
Rust's guarantee of soundness and correctness. While many contributors
interact directly with the compiler's frontend, it's not always easy to
understand why things are set up the way they are, and reverse-engineering
the bigger picture is a daunting task to do alone. Come spelunking through
the surprisingly deep caves that are the compiler's frontend -- from
parsing to MIR optimization -- while I try to motivate each step's
existence, explain its general philosophy, constraints and problem-solving
approaches, point out its quirks (in the code!), and hopefully help you
appreciate the complexity of the compiler a bit more.


////// <!-- sepatator between abstract and bio -->

Michael is a compiler and types team member and is employed by AWS to work
on the Rust compiler. He goes by "compiler-errors" online, but most people
call him "errs" for short. He lives in New York City and loves the subway
and urbanism.
