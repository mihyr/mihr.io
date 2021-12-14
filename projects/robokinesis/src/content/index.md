---
title: Overview
order: 0
pcx-content-type: landing-page
---

# Robokinesis

A wearable device for controlling any ROS based Robot.

<YouTube id="-kWWF0zuSjk"/>

## Overview

Robokinesis is a low-cost wearable device that has the potential to control or interact with any ROS-based mobile robots and manipulators. It is designed to be a general wearable device that can be used to control any robot or manipulator. The Robokinesis ROS package is also modular enough to be used with any other wearable RTOS hardware.

## The idea

_Package Modularity_

> _Any RTOS hardware, Any sensors, Any ROS based robot_
>
> _User-Defined number of sensor inputs, User-Defined number of mapped ROS topics_

- The core goal was to develop a ROS package that can be used on any sensor integrated hardware.  
- The Robokinesis ROS package maps the raw sensor data to user-defined ROS topics onboard and streams it directly to the robot at the desired frequency, without any middle agent. 
- The modularity of this package and the fact that it maps to any desired topic opens an opportunity to a wide range of applications  

_Budget Hardware_

- High-end wearables for controlling ROS-based robots exist, especially used in Human-robot interaction research.  But its ROS packages and SDKs are tightly coupled with its hardware that the package can't be used on low-cost alternatives or in combination with other open-source ROS packages.  


<Aside type="warning" header="Known Issues">

- The trained model doesnt work the same when hardware gets heated.
- Current nodes are written in python, to achieve higher publishing frequency on such hardware, the nodes should be re-written in C++.

</Aside>

> Author: [Mihir Patel](https://github.com/mihyr)