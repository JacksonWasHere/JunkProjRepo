function Obstacle(x,y,w,h) {
  this.x = x
  this.y = y
  this.width = w
  this.height = h
  this.within = function(rocket) {
    var rx = rocket.pos.x
    var ry = rocket.pos.y
    return rx<this.x+this.width && rx>this.x && ry<this.y+this.height && ry>this.y
  }
  this.show = function(){
    rect(this.x,this.y,this.width,this.height)
  }
}
