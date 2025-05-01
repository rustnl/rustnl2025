---
layout: "../../layouts/TalkLayout.astro"
tracks:
 - ecosystem
 - gosim-spotlight
talkTitle: "Wild linker: status and plans"
talkLevel: "All"
talkTags: ["GOSIM Spotlight"]
talkDuration: 10
speakers: [
    {
        name: "David Lattimore",
        title: "",
        org: "",
        image: "david.jpg",
        url: https://davidlattimore.github.io/,
        linkedin: "",
        twitter: "",
        mastodon: https://mas.to/@davidlattimore,
        github: https://github.com/davidlattimore,
    },

]
day: "tuesday"
---

A linker's job is to take all your compiled code and the compiled code of all
your dependencies and combine them together into an executable. This sounds
simple, but there are many details that make it complex. It's also generally
always done from scratch every time you build. The Wild linker is a project
that aims to speed up development by linking incrementally. That's not done yet,
but even without incremental linking, Wild is showing some awesome performance
results. I'll go over what is and isn't done, what's being worked on and planned
for the near future and some longer term plans and how you can contribute.

////// <!-- sepatator between abstract and bio -->

David is a Rust developer from Sydney, Australia. He's currently taking a few
year break from paid employment to work full time on open source projects,
primarily the Wild linker. He enjoys low level details, optimising code, and has
a particular interest in speeding up Rust development cycles.

