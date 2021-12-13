---
title: Setup Instructions
order: 2
type: overview
---
<ContentColumn>

## Setup Instructions

- Create a catkin workspace

    ```
    mkdir -p ~/catkin_ws/src
    cd ~/catkin_ws/src/
    ```

- Clone the repo into `catkin_ws/src`, build the workspace and activate it

    ```
    git clone https://github.com/mihyr/robokinesis.git
    cd ~/catkin_ws/
    catkin_make
    source ~/catkin_ws/devel/setup.zsh
    ```

## Usage Instructions

- Initialization:  
  - Define sensor inputs, desired topics, range, frequency, remote robot IP and port in the `config/params.yaml` file.

- Training & testing:
  - Create a dataset of actions and its corresponding raw sensor data  
  - Train the model using the Perceptron node, using folliwong command:

    ```
    roslaunch robokinesis train.launch
    ```
    
  - The perceptron node will train the model and save it to the `config/model.yaml` file.

- Implementation:
  - Connect the robot to the wearable's IP and port, using [rosbridge_suite](https://github.com/RobotWebTools/rosbridge_suite)
  - To control the robot, run following command on the wearable device:

    ```
    roslaunch robokinesis bringup.launch
    ```
  - Control the robot with actions used to the train model

## Dependencies

<TableWrap>

Title | Link
------------ | -------------
rosbridge_suite | [Github](https://github.com/RobotWebTools/rosbridge_suite)

</TableWrap>

> Author: [Mihir Patel](https://github.com/mihyr)