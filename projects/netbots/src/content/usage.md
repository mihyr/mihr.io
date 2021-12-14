---
title: Usage Instructions
order: 3
pcx-content-type: best-practices
---

# Usage Instructions

## Server Slam
- To use server for online slam application as shown in the video, simply launch, everything is preconfigured!
```
roslaunch server_publisher publisher.launch front_end_listener:=true local_port:=9090 server_port:=9090
```
- There are multiple roslaunch included in one another, Please check individual packages Readme for their description and usage.

### Client Robot instructions
### Turtlebots
- If you are using a turtlebot, you may use our agent_bringup package on your robot. This package allows you to effortlessly connect your robot to the server.
- Detailed instructions on installation are given in the [agent_bringup](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/agent_bringup) folder.
### Other Robots
- If you are using any other robot, launch
```
roslaunch rosbridge_server rosbridge_websocket.launch port:=9090 websocket_external_port:=80
```
- You need to publish following topics locally and have `robot_description` loaded in rosparam_server
    - `tf`
    - `tf_static`
    - `scan`
    - `joint_states`
## Other Application
- If you want to use server for other application, you may use server_listener, and server_publisher package along with your own package.
- Detailed instructions on using [server_listener](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/server_listener) and [server_publisher](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/server_publisher) package are given in their respective folders


> Author: [Mihir Patel](https://github.com/mihyr)