---
title: Robokinesis BOM
order: 4
pcx-content-type: best-practices
---

# Robokinesis Components

## BOM

<TableWrap>

| Component                | Specs                      |
| ------------------------ | -------------------------- |
| [AltIMU-10 v5 (Pololu)](https://www.pololu.com/product/2739)    | Acc / Gyro / Compass / Alt |
| [MyoWare Muscle Sensor v3](https://www.pololu.com/product/2732) | Raw Analog Signals         |
| [Raspberry Pi Zero WH](https://www.raspberrypi.com/products/raspberry-pi-zero-w/)    | Arch Linux Distro          |
| [Adafruit ADS1115  ADC](https://www.adafruit.com/product/1085)   | 16 Bit, 4 Channel          |

</TableWrap>

## Hardware considerations

- Pi Zero W was chosen considering its size (user can wear it), inbuilt WiFi/Bluetooth (to communicate directly to the robot, eliminating the need to have a computer in between wearable and robot), and can run ROS onboard (all computation would be done on the wearable).

- For the demo, a turtlebot3 was controlled using the wearable.

- To maneuver the turtlebot, only 4 topics are required to be mapped, hence reducing the number of distinguishable signals required to 4.

- For 4 distinguishable signals, the IMU alone is enough.

- The hardware setup with sensors IMU and muscle sensor, can give up to 9+4 distinguishable signals, and hence can be mapped to 13 different ROS topics of user’s choice.

- The fewer the number of topics required, the faster the publishing frequency will be. Hence, it’s a tradeoff for the given constraints of the hardware.

## Lessons Learned

This project allowed developing skills required for developing ROS-based packages for constrained RTOS hardware, also giving exposure to challenges like latency, sensor heating (changes calibration), etc, and tuning code to minimize error and overcome the mentioned challenges. Robotics is now penetrating domestic/consumer markets, developing a low-cost wearable project for controlling robots

The images below show the internal hardware, cased hardware, and with EMG sensors. (The device can hold up to 4 EMG sensors as the ADC is 4 channels.)

> Author: [Mihir Patel](https://github.com/mihyr)