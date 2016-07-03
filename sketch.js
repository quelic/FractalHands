var id = 0;
var drawing = true;
var objects = [];


function setup() {
  createCanvas(1200, 900);
  objects[0] = new Branch();
  strokeWeight(15);
  colorMode(HSB, 256, 256, 256, 256);
  //    branch[i] = new Attractor(random(width), random(height), random(10, 25));
}

function draw() {
  background(0);
 // text(objects.length + " ", 10, 10);
  if (mouseIsPressed && drawing != false) {
    objects[id].create(mouseX, mouseY);
  }
  translate(width / 2, height / 2);
  objects[id].display();
  if (drawing == true) {
    fractal()
  }
}

function keyPressed() {
  drawing = true;
}

function fractal() {
  var len = 1;
  if (id > 0) {
    for (var i = 0; i < objects.length; i++) {
      objects[i].update();
      fractalize(objects[i].x[objects[i].steps - 1], objects[i].y[objects[i].steps - 1], i, len, 0, objects[i].subbranches);
    }
  }

}

function fractalize(endx, endy, i, len, rot, numbranches) {

  this.rot = rot;
  push();
  //  print (intx);
  scale(len);

  rotate(rot);

  objects[i].display();

  translate(endx, endy);


  if (len > 0.5) {
    for (var br = 1; br < numbranches; br++) {
      fractalize(objects[i].x[objects[i].steps - 1], objects[i].y[objects[i].steps - 1], i, len / 1.5, (objects[i].r / numbranches) + this.rot, objects[i].subbranches);
    }

  }

  pop();

}

function mouseReleased() {
  drawing = true;
  var total = objects[id].steps;
  //print("x1 " + objects[id].x[objects[id].steps - 1] + " " + objects[id].x[0]);
  // objects[id].update();
  id++;
  objects[id] = new Branch(0, 0, 0, 0);

}