---
title: ROS on Pi Zero 
order: 4
pcx-content-type: best-practices
---

# How to setup ROS on Pi Zero W

Raspberry Pi zero is ARMV6 and ROS is not available via apt as debian binaries for ARMV6.
I used `Arch Linux` as base OS and built `ROS Noetic` from source.

## Arch Linux ARM V6 Setup

- Steps to install Arch Linux on armv6 is available [here](https://archlinuxarm.org/platforms/armv6/raspberry-pi).
- Once arch is installed, you may either follow below steps on pi itself or by chrooting into the system.
- My steps for chrooting are available [here](https://pegasus.mihr.io/Instructions/rpi).

## Building ROS from source for ARMV6

 
- Install Dependencies
```bash
sudo apt-get update && sudo apt-get upgrade
sudo apt install -y python-rosdep python-rosinstall-generator python-wstool python-rosinstall build-essential cmake
```

- Init Rosdep
```bash
export ROS_OS_OVERRIDE=debian:wheezy
sudo rosdep init
rosdep update
```

- Init ROS Workspace
```bash
mkdir -p ~/ros_ws && cd ~/ros_ws

rosinstall_generator ros_comm --rosdistro noetic --deps --wet-only --tar > noetic.rosinstall
wstool init src noetic.rosinstall
```

- Resolve Dependencies
```bash
rosdep install -y --from-paths src --ignore-src --rosdistro noetic -r
```

- Build ROS and Install to `/opt/ros/noetic`
```bash
sudo ./src/catkin/bin/catkin_make_isolated --install -DCMAKE_BUILD_TYPE=Release --install-space /opt/ros/noetic
```

- To install additional packages
```bash
rosinstall_generator ros_comm package-name --rosdistro noetic --deps --wet-only --tar > noetic.rosinstall
wstool merge noetic.rosinstall
wstool update -t src
rosdep install -y --from-paths src --ignore-src --rosdistro noetic -y -r
sudo ./src/catkin/bin/catkin_make_isolated --install -DCMAKE_BUILD_TYPE=Release --install-space /opt/ros/noetic --pkg pkgname
```

- To install any other ROS distro, change `noetic` to preferred distro name.

> Author: [Mihir Patel](https://github.com/mihyr)