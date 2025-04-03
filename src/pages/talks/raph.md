---
layout: "../../layouts/TalkLayout.astro"

tracks: 
 - main
talkTitle: "Faster, easier 2D vector rendering"
talkLevel: "All"
talkTags: ["graphics"]
talkDuration: 30 # 15 or 30 min

speakers: [{
    name: "Raph Levien",
    image: "raph.jpg",
    title: "Research engineer at Google",
    org: "Google",
    url: "https://levien.com",
    bluesky: "https://bsky.app/profile/raphlinus.bsky.social",
    linkedin: "https://www.linkedin.com/in/raph-levien-0484504/",
    twitter: "",
    mastodon: "https://mastodon.online/@raph",
    github: "https://github.com/raphlinus",
}]
day: "tuesday"
---

This talk presents new work on high performance vector path and text rendering, to make it not only fast but easier to integrate with other code. Multiple modes are supported, including CPU, GPU, and hybrid. At the heart is a new efficient representation of rendered paths: sparse strips.

////// <!-- sepatator between abstract and bio -->

Raph Levien is a research software engineer on the Google Fonts team, primarily working on GPU font rendering. He's been actively involved in the Rust community for over seven years, and has worked on pulldown-cmark, the Xilem UI toolkit, and other popular crates. He has a PhD from UC Berkeley on the topic of interactive curve editing, and has been involved in font creation and 2D graphics tools most of his career.


