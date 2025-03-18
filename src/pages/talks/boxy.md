---
layout: "../../layouts/TalkLayout.astro"
tracks:
 - rust project
talkTitle: "The State of Const Generics"
talkLevel: "Rust Project members and contributors"
talkTags: ["rustc"]
talkDuration: 15
speakers: [
    {
        name: "Boxy UwU",
        title: "",
        org: "",
        image: "",
        url: "",
        linkedin: "",
        twitter: "",
        mastodon: "",
        github: "https://github.com/BoxyUwU",
        bluesky: "",
    },
]
day: "wednesday"
---

A minimum subset of const generics was stabilized in 2021 with a significant
number of limitations. While not much has changed stabley for const generics
since then, the state of const generics on nightly has shifted massively,
getting much closer to being able to lift the majority of these limitations.

This talk presents a brief overview of the set of unstable features relating to
const generics, what's made them so difficult to ship, and where they currently
stand regarding stabilization.

////// <!-- sepatator between abstract and bio -->

Boxy is a member of the Rust Project's Types, Compiler and Release teams as
well as a lead of the Const Generics Project Group. They are currently working
to bring const generics on par with type generics, and to document the
implementation of the type system to make contributing to the type system more
accessible.
