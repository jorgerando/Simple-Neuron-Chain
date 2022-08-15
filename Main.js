
var weightVisualizers = []
let inIm ;

function setup() {

  createCanvas(1000, 870);

  /*
  for(i = 0 ; i < 1000 ; i++) {
    var r = random(5000)
    r = int(r)
    ruta = 'https://jorgerando.github.io/Simple-Neuron-Chain/mnist_png/train/0/'+ String(r)+'.png'
    console.log(ruta)
    var img = loadImage('https://jorgerando.github.io/Simple-Neuron-Chain/mnist_png/train/2/'+ String(r)+'.png');
    trainImg.push(img)
  }
  */
  
  img = loadImage('https://jorgerando.github.io/Simple-Neuron-Chain/mnist_png/train/0/1.png');

  // weight visualizers
  let h = 10 ;
  let largeW = 80 ;
  let padding = 5 ;

  for(var i = 0 ; i < 10 ; i++){
    var pos = createVector(width/2.5,h)
    var v = new Visualizer(largeW,pos)
    h += largeW + padding ;
    weightVisualizers.push(v)
    fill(0)
    ellipse(pos.x-20 ,pos.y+40,20,20)
  }
  // input image
  let large = 300 ;
  inIm = new Visualizer(large,createVector(20,height/2 -large/2 ))
  weightVisualizers.push(v)

}

function draw() {


  for(var i = 0 ; i < 10 ; i++){
    weightVisualizers[i].ver(img)
  }
  inIm.ver(img)

}
