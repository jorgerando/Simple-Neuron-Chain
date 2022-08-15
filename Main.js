
var weightVisualizers = []
let inIm ;
var trainImg = []
var neu ;
var  a = 0;
function setup() {

  createCanvas(1000, 870);
  for( a = 0 ;  a < 10 ; a++ ){
    for(i = 0 ; i < 1000 ; i++) {
      var imgA = []
      var img = loadImage('https://jorgerando.github.io/Simple-Neuron-Chain/mnist_png/train/'+String(a)+'/'+String(i)+'_.png');
      imgA.push(img)
   }
     trainImg.push(imgA)
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
  inIm.ver(trainImg[a])

  pred = neu.predic(trainImg[a])
  neu.updateWeight(trainImg[a],pred,1)
  console.log( "Prediccion : "+ pred )
  a++

}
