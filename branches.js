var Branch = function(x, y, m, name) {
  this.x = [];
  this.y = [];
  this.steps = 0;
  this.intx = 0;
  this.inty = 0;
  this.alfa = 20000;
  this.subbranches = floor(random(3, 7));
  this.h = random(256);
  this.r = radians(random(-180,180));

  this.create = function(x, y) {
    if (this.steps == 0) {
      this.intx = x;
      this.inty = y;
    }
    
     // this.r += radians(random(-.2,.2));
    this.x[this.steps] = x - this.intx;
    this.y[this.steps] = y - this.inty;
    this.steps++;
  }
  this.update = function() {
    for (var i = 1; i < this.x.length; i++) {
      this.x[i] = this.x[i] + random(-1, 1);
      this.y[i] = this.y[i] + random(-1, 1);
      this.r += radians(random(-.1,.1));
    this.h = (this.h+.01)%256;
    }
  }
  this.display = function(size, angle) {
    stroke(this.h, 200, 200, (256 * (this.alfa / 20000)));
    if (this.alfa > 0) {
      for (var i = 1; i < this.x.length; i++) {
        line(this.x[i - 1], this.y[i - 1], this.x[i], this.y[i]);
      }
      this.alfa--;
    }


  }
}