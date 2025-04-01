---
layout: "../../layouts/TalkLayout.astro"
tracks:
 - rust project
talkTitle: "MiniRust: A core language for specifying Rust"
talkLevel: "Rust Project members and contributors"
talkTags: ["rustc"]
talkDuration: 30
speakers: [
    {
        name: "Ralf Jung",
        title: "ETH Zurich, Department of Computer Science",
        org: "",
        image: "ralf.png",
        url: "https://www.ralfj.de/",
        linkedin: "",
        twitter: "",
        mastodon: "",
        github: "https://github.com/RalfJung",
        bluesky: "",
    },
]
day: "wednesday"
---

Real-world programming languages often suffer from notorious under-specification.
This is a particularly bad problem for languages that make heavy use of Undefined Behavior (UB), as that fundamentally prevents using testing to discover the specification:
when a program has UB, it may have arbitrary runtime behavior, so no conclusion can be drawn from the results of such a test.
The state of the art is to write extensive specifications in plain English in an axiomatic style, which causes multiple issues:
the specification is not executable, so it cannot be tested to ensure that it matches the intent of their authors,
and the specification is hard to interpret, resulting in ambiguity and conflicting interpretations.

Since unsafe Rust programs can suffer from UB, all of these problems also affect us in Rust.
Rust therefore needs a specification which ensures that programmers and compiler writers agree on what is and is not Undefined Behavior.

In this talk I will present my work-in-progress project MiniRust, a core language for Rust.
MiniRust aims to be complete, precise, executable, and accessible:
MiniRust should cover all of Rust via a lowering step that expands Rust into MiniRust,
define language behavior unambiguously,
provide a reference interpreter that can be used to test the specification and as a test oracle for language implementations,
and be accessible to Rust developers.
The hope is that MiniRust can eventually become part of the official Rust specification.

////// <!-- sepatator between abstract and bio -->

Ralf Jung is an assistant professor at ETH Zurich working on formal
verification and formal foundations for real-world programming languages, with
a focus on Rust. He's doing research on Rust since 2015 and actively involved
in the Rust project since 2018 in various roles: as maintainer of Miri, as
co-lead of the operational semantics team, as language team advisor, and as a
compiler contributor and team member. His main goal is to give Rust a
mathematically formal official semantics that can be used for testing and
verification.
