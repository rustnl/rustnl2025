---
layout: "../../layouts/MarkdownLayout.astro"
title: "Build cross-platform GUIs in Rust"
time: "9:00 - 13:00"
slug: "embedded"
level: "intermediate"
beginnerFriendly: false
---

As a low level language, Rust is perfectly suitable for making user interfaces the old fashioned way, with native APIs. Rust’s expressiveness and high level abstractions make it ideal for building intricate and complex user interfaces. However, writing a GUI application in today’s world typically means supporting many platforms.

This workshop introduces Slint, a Rust based declarative GUI toolkit, and will show you how to build GUI applications with Rust. By the end of the workshop, you will have built a fully functioning cross-platform application in Rust. Little to basic Rust knowledge is sufficient to follow the contents of the workshop.

In the workshop, the participants will build a weather station app to learn the basics of Slint and its Rust API.

The workshop is run in collaboration with Espressif; each participant will be provided with hardware.

The rough agenda could look as follows:

Starting with Slint 
a. Visual Studio Extension 
b. Weather station boilerplate app

Slint Language
a. Syntax and Concepts
b. Building Widgets to display weather data

Slint Rust API 
a. slint-build crate
b. Threading and Event-Loop 
c. Model trait 
d. Integrating a Rust backend for weather station UI
    
Overview Target Platforms 
a. Desktop 
b. WebAssembly 
c. Embedded Linux 
d. ESP