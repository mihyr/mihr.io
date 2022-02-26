---
title: Workflow
order: 1
pcx-content-type: best-practices
---
# Workflow

## How does it work?

- Robokinesis ROS package has 2 nodes:

  - Perceptron node: uses single layer multi-class perceptron to train a model that maps the input raw sensor data to distinguishable signals  

  - Core node: maps the distinguishable sensor data to ROS topics at user-defined range and frequency  

- The Ros-Bridge-Suite package subscribes to converted ROS topics and streams to the remote robot over a WebSocket connection

The diagram below shows the entire software architecture, along with hardware connections.

![diagram](https://raw.githubusercontent.com/mihyr/robokinesis/main/media/diagram.png)

> Author: [Mihir Patel](https://github.com/mihyr)