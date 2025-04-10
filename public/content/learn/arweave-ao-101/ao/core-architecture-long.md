---
title: "Core Architecture of AO: A Decentralized Computing Model"
description: "Explore the core architecture of AO, which operates on a decentralized computing model featuring Messages, Processes, and the AO Grid for efficient and scalable computations."
---

AO operates on a **decentralized computing model** consisting of three major components: **Messages, Processes, and the AO Grid**. These allow AO to execute computations in a **highly scalable and efficient manner**.

## **1. Messages and Processes**
AO is built around **two core elements**:
- **Messages** → Data packets that instruct the system on **what tasks to execute**.
- **Processes** → Independent computing units that **handle execution**.

AO introduces a **Holographic State model**, eliminating the need for **shared global state**. Instead of maintaining an entire network-wide state, AO **computes state on demand**, improving efficiency.

## **2. The AO Grid: Three Core Units**
AO’s infrastructure consists of **three primary unit types**:

### **Messenger Units (MUs)**
- Handle **message routing** between processes.
- Ensure **secure and efficient communication**.

### **Scheduler Units (SUs)**
- Order messages and assign them an **epoch and nonce**.
- Store messages permanently on **Arweave**.

### **Compute Units (CUs)**
- Execute computational tasks.
- Retrieve necessary data and return computed results.

## **3. Why AO is Different**
- **Horizontally scalable** → New units can be added dynamically.
- **No shared state** → Processes compute on demand.
- **Perfect for AI & onchain applications** → Eliminates bottlenecks seen in traditional blockchain models.

## **Sources**
- [AO Processes](https://cookbook_ao.g8way.io/concepts/specs.html)
- [AO Messages](https://cookbook_ao.g8way.io/concepts/messages.html)
- [AO Units](https://cookbook_ao.g8way.io/concepts/units.html)