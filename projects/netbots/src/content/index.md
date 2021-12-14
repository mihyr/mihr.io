---
title: Overview
order: 0
pcx-content-type: landing-page
---

# Netbots

## Overview

The goal of this project was to develop a cloud infrastructure where remote robots whether on wifi or cellular, can connect, store and share information as well as perform computationally intensive tasks offboard, i.e. on the server.

I used turtlebots with Sim/GPS modules for testing and development. The robots would connect to the server via web sockets. The server subscribes to the robot's messages and performs SLam online. A local, as well as a global map, is streamed back to the remote robots. When disconnected from the server, a copy of the map is saved in the server's map database, sorted by their GPS location. A front-end website (hosted on the server) helps the user to connect their robot to the network, control it, visualize live maps as well as access map databases.


Please check my live project website [netbotslive.mihr.io](https://netbotslive.mihr.io/). Below are the instructions for using this package to deploy your own server.

## Server workflow

![workflow](https://github.com/mihyr/Networked-Robots/raw/master/workflow.png)

## Network Architecture

![network](https://github.com/mihyr/Networked-Robots/raw/master/network.png)


<YouTube id="IPSj043Fr5I"/>

## Future Work

- I am currently working on improving the global map and using a map database to create a merged map for different GPS grids when enough maps are collected.

- Server_slam and serve map database is a demonstration of offboard computation, data storage, and sharing. But this package can be used to deploy any cloud-based networked robotic system for any offboard computation task, create a shared cloud database and securely connect remote robots whether they are on wifi or cellular!