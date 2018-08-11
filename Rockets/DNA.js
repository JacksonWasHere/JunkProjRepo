function DNA(genes) {
  if (genes) {
    this.genes = genes
  }else {
    this.genes = []
    for (var i = 0; i < lifespan; i++) {
      this.genes.push(createVector())
      this.genes[i].setMag(0.1)
    }
  }

  this.crossover = function(partner){
    var newgenes = []
    var mid = floor(random(this.genes.length))
    for (var i = 0; i < this.genes.length; i++) {
      if (i>mid) {
        newgenes[i] = this.genes[i]
      } else {
        newgenes[i] = partner.genes[i]
      }
    }
    return new DNA(newgenes)
  }

  this.mutate = function(){
    for (var i = 0; i < this.genes.length; i++) {
      if (random()<mutation) {
        this.genes[i] = p5.Vector.random2D()
      }
    }
  }
}
