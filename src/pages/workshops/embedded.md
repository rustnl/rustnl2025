---
layout: "../../layouts/WorkshopLayout.astro"
title: "Build cross-platform GUIs in Rust"
abstract: "This workshop introduces Slint, a Rust based declarative GUI toolkit, and will show you how to build GUI applications with Rust. By the end of the workshop, you will have built a fully functioning cross-platform application in Rust."
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

1. Visual Studio Extension 
2. Weather station boilerplate app

Slint Language

1. Syntax and Concepts
2. Building Widgets to display weather data

Slint Rust API 

1. slint-build crate
2. Threading and Event-Loop 
3. Model trait 
4. Integrating a Rust backend for weather station UI
    
Overview Target Platforms 
1. Desktop 
2. WebAssembly 
3. Embedded Linux 
4. ESP