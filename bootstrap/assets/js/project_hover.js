// My snippet, hosted on https://codepen.io/mihyr/pen/WNZJyQp

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

// My custom fn

function bgChange(bg) {
// console.log(bg);
let colordark = 'linear-gradient(135deg, #001015, #1b001f)';
// colordark = 'linear-gradient(135deg, #001f29, #1b001f)'
if (bg === 1) {
    document.body.style.background = colordark;
    document.body.style.backgroundAttachment = "fixed";

    $(".card__title").css({"display": "block","margin-left": "25%",  "margin-top": "6%"});
    $(".card__title").text('Pegasus Drone');
    $(".card__details").css({"display": "block","margin-left": "25%",  "margin-top": "10%"});

    $(".card__details").html('Pegasus is my ongoing Final Project in Aerial Robotics. The Pegasus drone being developed is equipped with a stereo camera for large scale 3D mapping. The project explores methods of offboard computation for map generation and data sharing while being in tandem with a ground vehicle. <br/><br/> <p style="color:#00C4FF;"> < Click to know more</p>');
    
    
    
} else if  (bg === 2) {
    document.body.style.background = colordark;
    document.body.style.backgroundAttachment = "fixed";

    $(".card__title").css({"display": "block","margin-left": "50%",  "margin-top": "6%"});
    $(".card__title").text('Netbots');
    $(".card__details").css({"display": "block", "margin-left": "50%",  "margin-top": "10%"});
    $(".card__details").html('Netbots project is a ROS based cloud infrastructure built on AWS EC2 from scratch where remote robots whether on wifi or cellular, can connect via secured VPN tunnel, store and share information as well as perform computationally intensive tasks on the server. Performed offboard mapping (on server) with GPS and Feature based map merging using lidar data from multiple remote robots. The front-end responsive page helps the user to connect their robot to the network, control it, visualize live maps as well as access consolidated map databases. <br/><br/> <p style="color:#00C4FF;"> < Click to know more</p>');
    
} else if  (bg === 3) {
    document.body.style.background = colordark;
    document.body.style.backgroundAttachment = "fixed";
    
    $(".card__title").css({"display": "block","margin-left": "10%",  "margin-top": "6%"});
    $(".card__title").text('Robokinesis');
    $(".card__details").css({"display": "block","margin-left": "10%",  "margin-top": "10%"});
    $(".card__details").html('Robokinesis is a low-cost wearable device that has the potential to control or interact with any ROS-based mobile robots and manipulators. The developed ROS package uses multi-class perceptron that maps the raw sensor data to distinguishable signals, which are further converted into user-defined ROS topics and streamed directly to the robot at the desired frequency. <br/><br/> <p style="color:#00C4FF; text-align:right;" > Click to know more > </p>');
    
} else if  (bg === 4) {
    document.body.style.background = colordark;
    document.body.style.backgroundAttachment = "fixed";

    $(".card__title").css({"display": "block","margin-left": "35%",  "margin-top": "6%"});
    $(".card__title").text('Reconfigurable Modular Robots');
    $(".card__details").css({"display": "block","margin-left": "35%",  "margin-top": "10%"});
    $(".card__details").html('Built cubical homogeneous modular robots, each with four DOF (Tilt, Pan, L/R wheels) & a servo-actuated linkage mechanism to detach the modules. The design is inspired from SMORES (Modlab-UPenn), and re-designed with two passive wheel-to-leg reconfigurable wheels using no additional actuators, that makes modules deployable in both even & uneven terrains. Additionally incorporated power-sharing capability - Power deficient modules can attach to another module to share power.  <br/><br/> <p style="color:#00C4FF; text-align:right;" > Click to know more > </p>');
    
}  else if  (bg === 5) {
    document.body.style.background = colordark;
    document.body.style.backgroundAttachment = "fixed";

    $(".card__title").css({"display": "block","margin-left": "20%",  "margin-top": "35%"});
    $(".card__title").text('Particle Filter');
    $(".card__details").css({"display": "block","margin-left": "20%",  "margin-top": "40%"});

    $(".card__details").html('Programmed Kuka YouBot in CoopeliaSim to plan desired trajectory, perform odometry and execute PI feedback control for a user defined pick and place action <br/><br/> <p style="color:#00C4FF;"> < Click to know more</p>');
    
} else if  (bg === 6) {
    document.body.style.background = colordark;
    document.body.style.backgroundAttachment = "fixed";

    $(".card__title").css({"display": "block","margin-left": "40%",  "margin-top": "35%"});
    $(".card__title").text('Netbots');
    $(".card__details").css({"display": "block", "margin-left": "40%",  "margin-top": "40%"});
    $(".card__details").html('Implemented Particle Filter Localization on Turtlebot3 in ROS2 Galactic using Lidar, wheel odometry and eucledian clustering based landmark detection. <br/><br/> <p style="color:#00C4FF;"> < Click to know more</p>');
    
} else if  (bg === 7) {
    document.body.style.background = colordark;
    document.body.style.backgroundAttachment = "fixed";
    
    $(".card__title").css({"display": "block","margin-left": "5%",  "margin-top": "35%"});
    $(".card__title").text('Robokinesis');
    $(".card__details").css({"display": "block","margin-left": "5%",  "margin-top": "40%"});
    $(".card__details").html('Designed a low-cost Autonomous Weed Removal system for selected Indian agricultural fields. Ended-up Top 10 finalist out of 1120 Participants at the Dassault Systèmes annual Solidworks World Conference, Dallas, TX in 2019. <br/><br/> <p style="color:#00C4FF; text-align:right;" > Click to know more > </p>');
    
} else if  (bg === 8) {
    document.body.style.background = colordark;
    document.body.style.backgroundAttachment = "fixed";

    $(".card__title").css({"display": "block","margin-left": "20%",  "margin-top": "35%"});
    $(".card__title").text('Reconfigurable Modular Robots');
    $(".card__details").css({"display": "block","margin-left": "20%",  "margin-top": "40%"});
    $(".card__details").html('Baxter trajectory generation and feedback control with moveIt!<br/><br/> <p style="color:#00C4FF; text-align:right;" > Click to know more > </p>');
    
} else if  (bg === 9) {
    document.body.style.background = colordark;
    document.body.style.backgroundAttachment = "fixed";

    $(".card__title").css({"display": "block","margin-left": "40%",  "margin-top": "35%"});
    $(".card__title").text('Reconfigurable Modular Robots');
    $(".card__details").css({"display": "block","margin-left": "40%",  "margin-top": "40%"});
    $(".card__details").html('Created a ROS package for object manipulation on Interbotix PX100 robot arm. The package uses Moveit! for trajectory generation,  offers various ROS services for user and can be used in simulation as well as in real world. <br/><br/> <p style="color:#00C4FF; text-align:right;" > Click to know more > </p>');
    
} else if  (bg === 0) {
  document.body.style.background = 'linear-gradient(135deg, #00C4FF, #9D1BB2)';
  document.body.style.backgroundAttachment = "fixed";
  $(".card__details").css({"display": "none"});
  $(".card__title").css({"display": "none"});
}
}