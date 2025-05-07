---
layout: "../../layouts/TalkLayout.astro"
tracks:
 - ecosystem
 - gosim-spotlight
talkTitle: "std::autodiff - computing derivatives with your compiler"
talkLevel: "All"
talkTags: ["GOSIM Spotlight"]
talkDuration: 10
speakers: [
    {
        name: "Manuel Drehwald",
        title: "Master's student",
        org: "University of Toronto",
        image: "manuel_drehwald.jpeg",
        url: "",
        linkedin: "https://www.linkedin.com/in/manuel-drehwald/",
        twitter: "",
        mastodon: "",
        github: https://github.com/ZuseZ4,
    },

]
day: "tuesday"
---

Computing derivatives (gradients, jacobians, hessians, ...) is relevant for fields like Machine Learning or scientific computing, where we have function parameters that we want to optimize. "Automatic Differentiation" allows us to apply this concept from calculus to real-world code, written in languages like Rust. We are currently working hard on enabling the new std::autodiff macro for nightly. This macro is based on a very performant, but experimental LLVM project called Enzyme. In my talk I will share why our autodiff solution is so fast, how I had to hack the Rust compiler to get it working, and which parts are already ready for testing.

////// <!-- sepatator between abstract and bio -->

I am a graduate student interested in High-performance computing, Machine Learning, and compilers.  Rust is especially interesting for me, since the language design gives us a lot of guarantees, which in turn allow interesting performance optimizations when working with compiler backends like LLVM. Over the last years I have worked on adding new LLVM features like "automatic differentiation" or "gpu offload" to the rust compiler, to make it easier for people to write their next simulation or machine learning application in Rust.
