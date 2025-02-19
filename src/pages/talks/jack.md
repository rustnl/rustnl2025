---
layout: "../../layouts/TalkLayout.astro"

tracks: 
 - deep_dive
talkTitle: "Building High Performance Search Indexes in Rust with SIMD"
talkLevel: "Intermediate"
talkTags: ["search", "ai", "performance", "simd", "database"]
talkDuration: 30 # 15 or 30 min

speakers: [{
    name: "Jack Pertschuk",
    image: "jack.jpeg",
    title: "",
    org: "Pinecone",
    url: "",
    linkedin: "https://www.linkedin.com/in/jack-pertschuk-833196114/",
    twitter: "",
    mastodon: "",
    github: "",
}]
day: "wednesday"
---

I will discuss building high performance search indexes in Rust and show that we can achieve SoTA performance for both sparse and dense vector retrieval. To achieve these results we leverage the Rust compiler’s access to vectorized instructions and granular compiler controls.

////// <!-- sepatator between abstract and bio -->

Jack is a founding engineer and manager of the Applied Research and Algorithms team at Pinecone, the market leader in managed nearest-neighbor vector embedding search at scale. Prior to Pinecone, Jack was a founder of SidekickQA and creator of the NBoost open source neural ranking engine. He is an active member of the NYC Rust community and is passionate about solving problems at the intersection of ML and databases.

