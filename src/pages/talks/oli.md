---
layout: "../../layouts/TalkLayout.astro"
tracks:
 - rust project
talkTitle: "Adding Pattern Types to the Type System"
talkLevel: "rustc contributors"
talkTags: ["rustc"]
talkDuration: 30
speakers: [
    {
        name: "Oli Scherer",
        title: "Senior Rust Compiler Engineer at AWS",
        org: "",
        image: "oli.jpg",
        url: "",
        linkedin: "",
        twitter: "",
        mastodon: "https://hachyderm.io/@oli",
        github: "https://github.com/oli-obk",
    },
]
day: "wednesday"
---

Representing pattern types in the type system in a coherent way has a lot of
interesting parts that no other types have had so far.
I'll talk about the lowering process from AST, over HIR, to the type system and
finally into layout information.
I'll finish by explaining why generic pattern types are very incomplete so
far and how we are planning to support them properly.

////// <!-- sepatator between abstract and bio -->

The day before this talk it will have been 10 years since I opened my first PR
touching the Rust const evaluator.
I did this, because I wanted to implement a very hacky version of range pattern
types in a crate, but was lacking some const eval features for it.
7 years ago I became a compiler team member and have been maintaining the Rust
compiler full time for the last 4 years.
