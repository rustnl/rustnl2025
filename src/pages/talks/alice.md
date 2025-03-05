---
layout: "../../layouts/TalkLayout.astro"
tracks: 
 - main
talkTitle: "Bevy's immutable components: managing side effects in a parallel world"
talkLevel: ""
talkTags: []
talkDuration: 30 # 15 or 30 min
speakers: [{
    name: "Alice Ivy Cecile",
    image: "alice_cecile.jpg", # images go in public/images/people
    title: "Bevy community leader & mad scientist",
    org: "",
    url: "",
    bluesky: "https://bsky.app/profile/alice-i-cecile.bsky.social",
    linkedin: "",
    twitter: "",
    mastodon: "https://mastodon.gamedev.place/@alice_i_cecile",
    github: "https://github.com/alice-i-cecile",
}]
day: "wednesday"
---

Every now and then, Bevy users would ask for a simple helper: give me a way to mark a component on an entity as "read-only" so library authors could uphold invariants tied to the value of a public component. Unfortunately, there was a gaping hole: you could simply remove the component, mutate it and then reinsert it.

But... wait. That reinsertion would trigger "lifecycle hooks", a new feature that automatically respond to components' insertion and removal. Suddenly, this broken little helper was a powerful tool for ensuring global correctness.
In this talk, I'll cover Bevy's automatically parallel Entity-Component-System (ECS) data flow, why parallelism can make maintaining invariants hard, and how we're using "immutable components" to finally implement error-resistant relationships and indexes.

////// <!-- sepatator between abstract and bio -->

Alice leads and coordinates Bevy's bubbling open source community as they build the next generation of game engine in Rust!
