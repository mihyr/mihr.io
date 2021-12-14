---
title: Package Description
order: 1
pcx-content-type: best-practices
---

# Package Description

This repository consists of several packages as listed below:

|Packages | Description|
|------------ | -------------|
|[agent_bringup](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/agent_bringup)| ROS package which helps robot to connect to the server. This package is to be deloyed on turtlebot.|
|[server_listener](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/server_listener) | ROS package used for connecting to remote robots, subscribe to desired topics as 'json' message and republish it as ros message under `/robot_name/topic` on the server.|
|[server_slam](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/server_slam) | ROS package used to perform slam offboard i.e. on the server|
|[server_publisher](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/server_publisher) | ROS package that uses `server_slam` and `server_listener` package and completes entire workflow pipeline to fetch, compute and publish data back to the robot.|
|[website_front_end](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/website_front_end) | This folder contains website files which help user to connect their robot to the server|
|[nginx_scripts](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/nginx_scripts) | This folder contains NGINX scripts I wrote for my server. It can be used as a tempelate.|
|[cellular_resources](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/cellular_resources) | Some helpful resources for robots on cellular network.|

## Submodule Dependencies

|Title | Link|
|------------ | -------------|
|m-explore | [Github](https://github.com/hrnr/m-explore)|
|webviz | [Github](https://github.com/cruise-automation/webviz)|


> Author: [Mihir Patel](https://github.com/mihyr)