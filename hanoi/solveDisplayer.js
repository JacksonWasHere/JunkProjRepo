var solveArr = []
var tower = []
var tSize = 11
function setup(){
  createCanvas(600,400)
  background(100)
  solveBoi = new solver()
  solveArr = solveBoi.getSolutionForSize(tSize)
  for (var i = 0; i < tSize; i++) {
    tower.push([])
    if(i==0){
      for (var j = tSize; j > 0; j--) {
        tower[i].push(j)
      }
    }
  }
  console.log(tower);
}
var k = 0
function draw(){
  background(100)
  frameRate(100)
  drawTower()
  move(solveArr[k])
  k++
}
function move(move){
  var value = tower[move[0]].pop()
  tower[move[1]].push(value)
}
function drawTower(){
  rectMode(CENTER)
  fill(139, 239, 117)
  rect(150,300,20,200)
  rect(300,300,20,200)
  rect(450,300,20,200)
  for (var i = 0; i < tower.length; i++) {
    for (var j = 0; j < tower[i].length; j++) {
      tower[i][j]
      fill(160, 123, 70)
      rect(150+150*i,height-j*10-5,tower[i][j]*5+10,10)
    }
  }
}
