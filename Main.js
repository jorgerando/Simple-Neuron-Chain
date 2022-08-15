
var weightVisualizers = []
let inIm ;
var trainImg = []
var neu ;

function setup() {

  createCanvas(1000, 870);

  for(i = 0 ; i < 1000 ; i++) {

    var img = loadImage('https://jorgerando.github.io/Simple-Neuron-Chain/mnist_png/train/8/'+String(4)+'.png');
    trainImg.push(img)
  }

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

  neu = new Neuron(28*28)

}

function draw() {

  for(var i = 0 ; i < 10 ; i++){
    weightVisualizers[i].ver(trainImg[i])
  }
  inIm.ver(trainImg[0])

  pred = neu.predic(trainImg[0])
  neu.updateWeight(trainImg[0],pred,1)
  console.log( "Prediccion : "+ pred )


}
