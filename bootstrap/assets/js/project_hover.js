//Taken from https://codepen.io/steveeeie/pen/NVWMEM
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
    $(".card__details").html('Netbots project is a cloud infrastructure developed where remote robots whether on wifi or cellular, can connect, store and share information as well as perform computationally intensive tasks offboard, i.e. on the server. Using netbots server, remote turtlebots performed SLAM offboard and when disconnected, a copy of the map is saved in the server map database, sorted by their GPS location. The front-end responsive page helps the user to connect their robot to the network, control it, visualize live maps as well as access map databases. <br/><br/> <p style="color:#00C4FF;"> < Click to know more</p>');
    
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
    
} else if  (bg === 0) {
  document.body.style.background = 'linear-gradient(135deg, #00C4FF, #9D1BB2)';
  document.body.style.backgroundAttachment = "fixed";
  $(".card__details").css({"display": "none"});
  $(".card__title").css({"display": "none"});
}
}