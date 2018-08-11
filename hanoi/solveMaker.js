function solver(){
  this.moves=[]
  this.getSolutionForSize=function(size){
    this.moves=[]
    this.solve(size,0,2,1)
    return this.moves
  }
  this.getMoveCountForSize=function(size){
    return pow(2,size)-1
  }
  this.solve=function(size,s,f,e){
    if (size==0) {
      return
    }
    this.solve(size-1,s,e,f)
    this.moves.push([s,f])
    this.solve(size-1,e,f,s)
  }
  this.animate=function(x,y,x1,y1){

  }
}
