---
title: Setup Instructions
order: 2
pcx-content-type: best-practices
---

# Server Deployment Instructions

You may use any cloud platform like [DigitalOcean](https://www.digitalocean.com/), [AWS EC2](https://aws.amazon.com/ec2/), [GCP](https://cloud.google.com/), [Azure](https://azure.microsoft.com/en-us/) or even a home server to deploy this bundle.

1. Package Installation:
* Create a catkin workspace
    ```
    mkdir -p ~/catkin_ws/src
    cd ~/catkin_ws/src/
    ```
* Clone the repo into `catkin_ws/src`
    ```
    git clone https://github.com/whomihirpatel/4G-Networked_Robots.git
    cd 4G-Networked_Robots
    git submodule update --init
    ```
    - Install other required packages using 
    ```
    pip install -r requirements.txt
    ```
    - Installation instructions for [webviz](https://webviz.io/) can be found [here](https://github.com/cruise-automation/webviz)
    - Easiest way to deploy webviz is through webviz Docker image.
    ```
    docker run -p 'port':'port' cruise/webviz
    ```
    
* Build the workspace and activate it
    ```
    cd ~/catkin_ws/
    catkin_make
    source ~/catkin_ws/devel/setup.zsh
    ```
2. Web Hosting:
- Installation instructions for NGINX web server can be hound [here](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)
- [nginx_scripts](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/nginx_scripts) folder configuration files which can be used as a tempelate. 
- Detailed Instructions on front-end hosting, database listing and routing VPN traffic are given in the [nginx_scripts](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/nginx_scripts) folder.

3. VPN Hosting:
- Installation instructions for VPN Server can be hound [here](https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-ubuntu-20-04) and [here](https://openvpn.net/community-resources/how-to/)
- Make sure to generate a unique client certificate for each robot and assign a static tun0 IP for each client.
- update the `server.conf` to allow inter-client communication and allow static IP assignment by adding following lines:
    ```
    ifconfig-pool-persist ipp.txt
    client-to-client
    push "route 192.168.4.0 255.255.255.0"
    ```
4. Front-end
- A front-end minimal website is developed. It can be used to connect robots to server, visualize data, check log and see server_database.
- Further instructions on front-end is given in [website_front_end](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/website_front_end) folder.
- Some html snippets are taken from [codepen](https://codepen.io/rkpasia/pen/LNEQod)

## Connecting Robots to the server

- If you are using robots connected to wifi and can allow incoming web-socket traffic to your robot, you may skip to next step
- If you are using robots conencted to cellular network or have incoming traffic blocked on your wifi, you may to connect to the server via VPN tunnel and route the traffic on the server.
    - Generate a unique CA certificate for your robot. Detailed instructions [here](https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-a-certificate-authority-ca-on-ubuntu-20-04)
    - edit the ipp.txt file in openvpn directory and add name of your CA authority (i.e. name you used in unique CA certificate), followed by desired/available static ip.
    ```
    sample,10.8.0.4,fddd:1194:1194:1194::1001
    ```
    - Route the VPN traffic from server port to VPN device port using command
    ```
    sudo iptables -t nat -A PREROUTING -p tcp --dport 10101 -j DNAT --to-destination 10.8.0.4:9090
    ```
    - Though it is advised to block external ports using `sudo ufw enable` and use NGINX to reverse-proxy all traffic through port 80.
        - In that case front-end will communicate with individual robots via port 80 insted of any other server port.
        - Make a nginx `.conf` file which reverse-proxy the external traffic to localhost. A sample `robot_name.conf` is provided in [nginx_scripts](https://github.com/whomihirpatel/4G-Networked_Robots/tree/master/nginx_scripts) folder.

- Now both, your server and robots are ready!


> Author: [Mihir Patel](https://github.com/mihyr)