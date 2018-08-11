function Population() {
  this.rockets = []
  this.popsize = 100
  this.matingPool = []
  this.obstacles = []

  for (var i = 0; i < this.popsize; i++) {
    this.rockets.push(new Rocket())
  }
  this.update = function(){
    for (var i = 0; i < this.rockets.length; i++) {
      this.rockets[i].update(this.obstacles)
      this.rockets[i].show()
    }
    for (var i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].show()
    }
  }
  this.update2 = function(){
    for (var i = 0; i < this.rockets.length; i++) {
      this.rockets[i].update(this.obstacles)
    }
  }
  this.nextGen = function(){
    var maxFit = 0
    var averageFit = 0
    for (var i = 0; i < this.rockets.length; i++) {
      this.rockets[i].calcFitness()
      averageFit+=this.rockets[i].fitness
      if (this.rockets[i].fitness>maxFit) {
        maxFit = this.rockets[i].fitness
      }
    }
    averageP.html("Average rocket: "+(averageFit/this.rockets.length));
    bestP.html("Best rocket: "+(maxFit));
    average_data.push(averageFit/this.rockets.length)
    best_data.push(maxFit)

    for (var i = 0; i < this.rockets.length; i++) {
      this.rockets[i].fitness /= maxFit
    }
    this.matingPool = []

    for (var i = 0; i < this.rockets.length; i++) {
      var n = this.rockets[i].fitness * 100
      for (var j = 0; j < n; j++) {
        this.matingPool.push(this.rockets[i])
      }
    }
  }
  this.selection = function(){
    var newPop = []
    for (var i = 0; i < this.rockets.length; i++) {
      var parentA = random(this.matingPool).dna
      var parentB = random(this.matingPool).dna
      var child = parentA.crossover(parentB)
      child.mutate()
      newPop.push(new Rocket(child))
    }
    this.rockets = newPop
  }
}
