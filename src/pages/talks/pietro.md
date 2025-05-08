---
layout: "../../layouts/TalkLayout.astro"

tracks: 
 - main
talkTitle: "We deserve helpful tools"
talkLevel: "beginner"
talkTags: []
talkDuration: 30 # 15 or 30 min

speakers: [{
    name: "Pietro Albini",
    image: "pietro_albini.jpg",
    title: "Rust Project's Infrastructure, Security Response, and Release",
    org: "",
    url: "https://www.pietroalbini.org/",
    bluesky: "https://bsky.app/profile/pietroalbini.org",
    linkedin: "",
    twitter: "",
    mastodon: "https://hachyderm.io/@pietroalbini",
    github: "https://github.com/pietroalbini",
}]
day: "tuesday"
---

The Rust compiler's excellent error messages demonstrate it's possible for tools
to be helpful when things go wrong. However, there are still so many tools where
cryptic failures are the norm: we deserve better. I'll show what Rust does to
achieve great error messages, and how other tools can do the same.

////// <!-- sepatator between abstract and bio -->

Part of the Rust project since 2018, Pietro focuses on the behind-the-scenes
work to ensure a reliable and secure Rust is released every six weeks. In the
past, they served two years on the Rust Core Team, led the Rust Infrastructure
Team for four, and worked at Ferrous Systems as the tech lead of Ferrocene.
