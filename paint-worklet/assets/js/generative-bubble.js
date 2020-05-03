registerPaint('bubble', class {

  static get inputProperties() {
    return [
      '--color-1',
      '--color-2',
      '--color-3',
      '--color-4'
    ]
  }

  static get contextOptions() { }

  doesCircleHaveACollision(circle) {
    for(var i = 0; i < this.circles.length; i++) {
      var otherCircle = this.circles[i]
      var a = circle.radius + otherCircle.radius
      var x = circle.x - otherCircle.x
      var y = circle.y - otherCircle.y
  
      if (a >= Math.sqrt((x*x) + (y*y))) {
        return true
      }

    }
    
    if(circle.x + circle.radius >= this.size ||
      circle.x - circle.radius <= 0) {
      return true
    }
      
    if(circle.y + circle.radius >= this.size || circle.y - circle.radius <= 0) {
      return true
    }
    
    return false
  }

  createAndDrawCircle() {
    var newCircle
    var circleSafeToDraw = false

    for(var tries = 0; tries < this.createCircleAttempts; tries++) {
      newCircle = {
        x: Math.floor(Math.random() * this.sizeWidth),
        y: Math.floor(Math.random() * this.sizeHeight),
        radius: this.minRadius
      }

      if(this.doesCircleHaveACollision(newCircle)) {
        continue
      } else {
        circleSafeToDraw = true
        break
      }

    }

    if(!circleSafeToDraw) {
      return
    }

    for(var radiusSize = this.minRadius; radiusSize < this.maxRadius; radiusSize++) {
      newCircle.radius = radiusSize
      
      if(this.doesCircleHaveACollision(newCircle)) {
        newCircle.radius--
        break
      } 

    }

    this.circles.push(newCircle)
    this.context.beginPath()
    this.context.arc(newCircle.x, newCircle.y, newCircle.radius, 0, 2 * Math.PI)
    var randColor = this.colors[Math.floor(Math.random() * 4)]
    this.context.fillStyle = randColor
    this.context.fill()
    this.context.strokeStyle = randColor
    this.context.stroke()

    
  }

  paint(ctx, size, props) {
    this.context = ctx
    this.sizeWidth = size.width
    this.sizeHeight = size.height
    this.context.lineWidth = 0
    this.circles = []
    this.minRadius = 2
    this.maxRadius = 80
    this.totalCircles = 1500
    this.createCircleAttempts = 1500
    this.colors = [props.get('--color-1'), props.get('--color-2'), props.get('--color-3'), props.get('--color-4')]
    
    for( var i = 0; i < this.totalCircles; i++ ) {  
      this.createAndDrawCircle()
    }

  }

});