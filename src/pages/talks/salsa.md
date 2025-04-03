---
layout: "../../layouts/TalkLayout.astro"
tracks:
 - rust project
talkTitle: "An Incrementally Spicier rust-analyzer"
talkLevel: "Intermediate"
talkTags: ["salsa", "rust-analyzer"]
talkDuration: 30
speakers: [
    {
        name: "David Barsky",
        title: "",
        org: "",
        image: "",
        url: "https://davidbarsky.com/",
        linkedin: "https://linkedin.com/in/davidbarsky",
        twitter: "",
        instagram: "https://instagram.com/endsofthreads",
        mastodon: "",
        github: "https://github.com/davidbarsky",
        bluesky: "https://bsky.app/profile/davidbarsky.com",
        description: "David Barsky is a rust-analyzer team member and is employed by Meta. He also helps maintains the tokio-rs/tracing library.",
    },
    {
        name: "Lukas Wirth",
        title: "",
        org: "",
        image: "",
        url: "http://veykril.github.io/",
        linkedin: "",
        twitter: "",
        mastodon: "",
        github: "https://github.com/veykril",
        bluesky: "https://bsky.app/profile/lukaswirth.bsky.social",
        description: "Lukas is the rust-analyzer team lead and is employed by Ferrous Systems.",
    },
]
day: "tuesday"
---

rust-analyzer recently migrated to a new version of its incremental computation
library, Salsa. This has yielded both major and minor performance wins in
rust-analyzer. In this talk, we’ll discuss the challenges (self-referential
interning! a 5x memory usage regression!), benefits (parallel autocomplete,
persistent caches, and near-instant crate graph additions/removals) of new
Salsa. We’ll also discuss how Salsa works internally and how you can use it in
your own projects.

////// <!-- sepatator between abstract and bio -->
