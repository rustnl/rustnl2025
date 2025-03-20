---
layout: "../../layouts/TalkLayout.astro"
tracks:
 - rust project
talkTitle: "From Simple to PubGrub: The Evolution of Cargo's Resolver"
talkLevel: "All"
talkTags: ["cargo"]
talkDuration: 30
speakers: [
    {
        name: "Jacob Finkelman",
        title: "Cargo Team Member, and Software Development Engineer at AWS",
        org: "",
        image: "",
        url: "",
        linkedin: "",
        twitter: "",
        mastodon: "",
        github: "https://github.com/Eh2406",
        bluesky: "",
    },
]
day: "wednesday"
---

Cargo's 10 year journey from basic dependency handling to its upcoming
PubGrub-based resolver, reflects the growing complexity of the Rust ecosystem.
We'll start with fundamental concepts of dependency resolution, explore a
minimal implementation, and see how performance requirements drive complexity,
and how complexity resist development. From this history we will
understand why logical consistency becomes crucial for maintainability,
ultimately leading to Cargo's effort to adopt PubGrub's algorithm.

////// <!-- sepatator between abstract and bio -->

I have been using Rust since 2015, a member of the Cargo Team since 2018, and
the rest is history.
