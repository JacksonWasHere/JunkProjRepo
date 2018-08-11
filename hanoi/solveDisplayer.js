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
        tower[i].push(new disk(j,150,height-(tSize-j)*10-5))
      }
    }
  }
  console.log(tower);
}
var k = 0
function draw(){
  background(100)
  rectMode(CENTER)
  fill(139, 239, 117)
  rect(150,300,20,200)
  rect(300,300,20,200)
  rect(450,300,20,200)
  frameRate(100)
  move(solveArr[k])
  drawTower(5)
  if(k<solveArr.length){
    k++
  }
}
function move(move){
  var disk = tower[move[0]].pop()
  disk.x=move[1]*150+150
  disk.y=height-tower[move[1]].length*10-5
  tower[move[1]].push(disk)
}
function drawTower(move){
  for (var i = 0; i < tower.length; i++) {
    for (var j = 0; j < tower[i].length; j++) {
      var disk=tower[i][j]
      fill(160, 123, 70)
      rect(disk.x,disk.y,disk.value*5+10,10)
      // if (disk==tower[move[0]][0]) {
      //   tower[i][j].animate(i*150+150,j*10,move[])
      // }
    }
  }
  return k+1
}
