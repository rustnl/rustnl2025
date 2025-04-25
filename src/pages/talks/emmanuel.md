---
layout: "../../layouts/TalkLayout.astro"
tracks: 
 - deep_dive
talkTitle: "Ariel OS - An Open Source Embedded Rust OS for Networked Multi-Core Microcontrollers"
talkLevel: "Intermediate"
talkTags: ["embedded systems"]
talkDuration: 15 # 15 or 30 min
speakers: [
    {
        name: "Emmanuel Baccelli",
        title: "",
        org: "Inria & Freie Universität Berlin",
        image: "emmanuel.jpg",
        url: "https://emmanuelbaccelli.com/",
        linkedin: "",
        twitter: "",
        mastodon: "",
        github: "",
    },
    {
        name: "Koen Zandberg",
        title: "",
        org: "Inria & Freie Universität Berlin",
        url: "https://emmanuelbaccelli.com/",
        linkedin: "",
        twitter: "",
        mastodon: "",
        github: "https://github.com/bergzand",
        description: "",
    },
]
day: "wednesday"
---

The Rust Embedded ecosystem is alive & kicking, but trails the C world regarding integration. Enter Ariel OS, integrating the best of Rust on microcontrollers (Embassy, esp-hal, defmt…) and adding missing OS features (multi-core scheduler, metabuild system…) for safe, ergonomic embedded development.

////// <!-- sepatator between abstract and bio -->

Emmanuel Baccelli is a scientific researcher working for Inria, as well as professor at Freie Universität Berlin.
After working at AT&T Labs in Florham Park, New Jersey, USA, then for Metro Optix Inc. in the Silicon Valley as software engineer until 2002,
Emmanuel joined Hitachi Europe as research engineer in 2003, and eventually received his Ph.D. from Ecole Polytechnique, Paris, France in 2006.
Emmanuel's main research interests involve Internet of Things, low-power software and security, spontaneous wireless networks, design and analysis of network protocols and algorithms.
He has co-authored dozens of articles published in relevant IEEE and ACM conferences and journals in these research domains.
In 2013, he co-founded the open source community developing [RIOT](https://github.com/RIOT-OS/RIOT/), an operating system for low-power microcontrollers. 
In 2024, Emmanuel co-founded -- and coordinates since -- the open source community developing the embedded Rust operating system [Ariel](https://github.com/ariel-os/ariel-os). 
