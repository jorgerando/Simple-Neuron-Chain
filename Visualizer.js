

class Visualizer {

  constructor(large,p) {
      this.position = p
      this.pixels = 28 ;
      this.inc = (large/28) ;

  }

  ver(img){
    for(var x = 0 ; x < this.pixels ; x++ ){
      for(var y = 0 ; y < this.pixels ; y++ ){
          var color = img.get(x,y)
          noStroke()
          fill(color)
          rect(x*this.inc+this.position.x,y*this.inc+this.position.y,this.inc,this.inc)
      }
    }
  }

}
