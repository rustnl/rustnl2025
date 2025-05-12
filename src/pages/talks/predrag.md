---
layout: "../../layouts/TalkLayout.astro"
tracks:
 - rust project
talkTitle: "What it'll take to eradicate unintended breakage from Rust"
talkLevel: "Rust Project members and contributors"
talkTags: ["rustc"]
talkDuration: 30
speakers: [
    {
        name: "Predrag Gruevski",
        title: "",
        org: "",
        image: "",
        url: "https://predr.ag/",
        linkedin: "",
        twitter: "https://twitter.com/PredragGruevski",
        mastodon: "https://hachyderm.io/@predrag",
        github: "https://github.com/obi1kenobi",
        bluesky: "https://bsky.app/profile/predraggruevski.bsky.social",
    },
]
day: "wednesday"
---

Unintentional breakage sucks for everyone involved. It's a sociotechnical
problem, and we need to do better on both the "socio" and the "technical"
parts. SemVer is a part of it, but just a small part: it doesn't cover
all aspects of stability, some stability guarantees are fuzzy, some changes are
"breaking but not major" etc. If running `cargo update` breaks my program, being
told "sorry, that change was breaking but not major" isn't any consolation!

Solving this will require a user-centric view of breakage. Acting upon that
view will require the enthusiastic participation of a broad set of folks who
will be in the room. At minimum: rustdoc, cargo, lang, compiler, libs,
crates.io + docs.rs. That's a lot of people! But here we get to decide what the
experience of using Rust in 2030 and beyond is like, and I'd like to make a
pitch for why this investment will pay off spectacularly if we do it right.

////// <!-- sepatator between abstract and bio -->

Predrag has spent the last 9 years working on query engines for almost every
kind of data imaginable: from relational and graph databases to APIs and
unstructured data files. He built Trustfall, a universal query engine that can
query any data source(s), and cargo-semver-checks, a semantic versioning linter
for Rust.

Previously, Predrag was a principal engineer at Kensho Technologies, did
performance engineering research at MIT, and competed in international math and
programming competitions.

When not in front of a screen, Predrag enjoys skiing, ice hockey, and board
games. He is also a huge space nerd. Ask him about the time he went to watch a
giant rocket explode!

