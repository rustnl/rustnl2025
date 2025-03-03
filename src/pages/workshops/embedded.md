---
layout: "../../layouts/WorkshopLayout.astro"
title: "Building Embedded GUIs with Rust"
abstract: "Developing graphical user interfaces for embedded systems comes with challenges such as limited resources, diverse hardware platforms, and real-time constraints. This workshop will introduce you to Slint and the Espressif Rust ecosystem, guiding you through building a weather station app on Espressif’s hardware. By the end, you will have a fully functional GUI running on an embedded device, with insights into how Rust is shaping the future of embedded development."
time: "9:00 - 13:00"
slug: "embedded"
level: "intermediate"
beginnerFriendly: false
---

Developing graphical user interfaces for embedded systems comes with challenges such as limited resources, diverse hardware platforms, and real-time constraints. This workshop will introduce you to Slint and the Espressif Rust ecosystem, guiding you through building a weather station app on Espressif’s hardware. By the end, you will have a fully functional GUI running on an embedded device, with insights into how Rust is shaping the future of embedded development.

Slint, a Rust-based declarative GUI toolkit, provides a lightweight and efficient way to build modern UIs for embedded devices. While optimized for resource-constrained environments, Slint also enables seamless cross-platform development, allowing the same codebase to run on embedded devices, desktops, and even WebAssembly.

Espressif Systems is known for its widely used ESP32 series of microcontrollers, powering IoT and embedded applications worldwide. Espressif has been actively adding first-class Rust support for their hardware, making Rust a compelling choice for embedded development.

**Workshop Details**

This workshop provides each participant with hardware to develop and test their applications.

**Agenda**

1 . Getting Started with Rust and Slint on Espressif

- Setting up the Rust toolchain for Espressif hardware
- Installing and configuring Slint for embedded development
- Using the Visual Studio Code extension
- Exploring the weather station boilerplate app

2 . Slint Language Fundamentals

- Syntax and key concepts
- Creating widgets to display real-time sensor data

3 . Slint Rust API for Embedded Systems

- Understanding the slint-build crate
- Threading and event loops in embedded environments
- Implementing the Model trait
- Integrating a Rust backend for sensor data processing

4 . Target Platform Overview

- ESP-based microcontrollers
- Desktop (Windows, macOS, Linux)