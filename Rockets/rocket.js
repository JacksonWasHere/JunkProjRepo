function Rocket(dna) {
  this.pos = createVector(width/8,height)
  this.vel = createVector()
  this.acc = createVector()
  this.complete = false
  if (dna) {
    this.dna = dna
  } else {
    this.dna = new DNA()
  }
  this.fitness

  this.applyForce = function(force){
    this.acc.add(force)
  }
  this.update = function(rectangles){
    var d = dist(this.pos.x,this.pos.y,target.x,target.y)
    if (d < 19) {
      this.complete = true
      this.fitness = 2
    }
    if (!this.complete) {
      this.applyForce(this.dna.genes[count])

      this.vel.add(this.acc)
      this.pos.add(this.vel)
      this.acc.mult(0)
    }
    for (var i = 0; i < rectangles.length; i++) {
      if (rectangles[i].within(this)) {
        this.complete = true
        var d = dist(this.pos.x,this.pos.y,target.x,target.y)
        this.fitness = 1/d
        break;
      }
    }
  }
  this.show = function(){
    push()
    translate(this.pos.x,this.pos.y)
    rotate(this.vel.heading())
    rectMode(CENTER)
    fill(100,255,100,150)
    rect(0,0,25,5)
    pop()
  }

  this.calcFitness = function(){
    if (!this.complete) {
      var d = dist(this.pos.x,this.pos.y,target.x,target.y)
      this.fitness = 1/d
    }
  }

}
