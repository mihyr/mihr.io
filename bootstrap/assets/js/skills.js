
var skills = [
  {"header" : "Languages",
    "captions" : [
      "HTML/CSS",
      "JS",
      "Python",
      "C++",
      "Bash"
    ],
    "values" : [
      0.60,
      0.60,
      0.90,
       0.80,
      0.85
    ]
  },
  {"header" : "Tools",
    "captions" : [
      "Arch/Ubuntu",
      "Cmake",
      "Git",
      "Docker",
      "Unit Test"
    ],
    "values" : [
      0.80,
      0.60,
      0.90,
      0.70,
      0.70
    ]
  },
  {"header" : "Robotics",
    "captions" : [
      "Moveit",
      "SLAM",
      "ROS",
      "Gazebo/Webots",
      "PID/LQR"
    ],
    "values" : [
      0.80,
      0.70,
      0.90,
      0.80,
      0.70
    ]
  }
];

var pentagonIndex = 0;
var valueIndex = 0;
var width = 0;
var height = 0;
var radOffset = Math.PI/2
var sides = 5; // Number of sides in the polygon
var theta = 2 * Math.PI/sides; // radians per section

function getXY(i, radius) {
  return {"x": Math.cos(radOffset +theta * i) * radius*width + width/2,
    "y": Math.sin(radOffset +theta * i) * radius*height + height/2};
}

var hue = [];
var hueOffset = 25;

for (var s in skills) {
  $(".skills").append('<div class="pentagon" id="interests"><div class="header"></div><canvas class="pentCanvas"/></div>');
  hue[s] = (hueOffset + s * 255/skills.length) % 255;
}

$(".pentagon").each(function(index){
  width = $(this).width();
  height = $(this).height();
  var ctx = $(this).find('canvas')[0].getContext('2d');
  ctx.canvas.width = width;
  ctx.canvas.height = height;
  ctx.font="20px Arial";
  ctx.textAlign="center";
  
  /*** LABEL ***/
  color = "rgba(255, 255, 255, 0.75)";
  ctx.fillStyle = color;
  ctx.fillText(skills[pentagonIndex].header, width/2, 15);

  ctx.font="16px Monospace";   

  /*** PENTAGON BACKGROUND ***/
  for (var i = 0; i < sides; i++) {
    // For each side, draw two segments: the side, and the radius
    ctx.beginPath();
    xy = getXY(i, 0.3);
    colorJitter = 25 + theta*i*2;
    color = "rgba(1, 1, 1, 0.6)";
    font_color =  "rgba(1, 1, 1, 0.8)";
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.moveTo(0.5*width, 0.5*height); //center
    ctx.lineTo(xy.x, xy.y);
    xy = getXY(i+1, 0.3);
    ctx.lineTo(xy.x, xy.y);
    xy = getXY(i, 0.37);
    console.log();
    ctx.fillText(skills[ pentagonIndex].captions[valueIndex],xy.x+5, xy.y +5);
    valueIndex++;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  
  valueIndex = 0;
  ctx.beginPath();
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    //(165, 40, 176, 0.5)
  ctx.strokeStyle = "rgba(29, 120, 186, 0.3)";
  ctx.lineWidth = 5;
  var value = skills[pentagonIndex].values[valueIndex];
  xy = getXY(i, value * 0.3);
  ctx.moveTo(xy.x,xy.y);
  /*** SKILL GRAPH ***/
  for (var i = 0; i < sides; i++) {
    xy = getXY(i, value * 0.3);
    ctx.lineTo(xy.x,xy.y);
    valueIndex++;
    value = skills[pentagonIndex].values[valueIndex];
  }
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  valueIndex = 0;  
  pentagonIndex++;
});
