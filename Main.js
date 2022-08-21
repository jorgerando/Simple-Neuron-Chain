
var weightVisualizers = []
let inIm
var trainImg = []
var neurons = []
var nImag = 100
let h = 10 ;
let largeW = 80 ;
let padding = 5 ;


function setup() {

  createCanvas(1000, 870);

  // import data
  for(var a = 0 ; a < 10 ; a++ ){
   var number = [] ;
   for(var i = 0 ; i < nImag ; i++) {
         var img = loadImage('https://jorgerando.github.io/Simple-Neuron-Chain-From-Scratch/mnist_png/train/'+String(a)+'/'+String(i)+'_.png');
         number.push(img)
   }
   trainImg.push(number)
  }

  // weight visualizers

  for(var i = 0 ; i < 10 ; i++){
    var pos = createVector(width/2.5,h)
    var v = new Visualizer(largeW,pos)
    h += largeW + padding ;
    weightVisualizers.push(v)
  }

  // input image
  let large = 300 ;
  inIm = new Visualizer(large,createVector(20,height/2 -large/2 ))

  // iniciali neurons
  for(var i = 0 ; i < 10 ;i++){
    var neu = new Neuron(28*28)
    neurons.push(neu)
  }
}

var i = 0 ;
var j = 0 ;
var error = 0
let errorAc = 10000

function draw() {

  background(255)
  var img = trainImg[i][j]
  //console.log("I :",i,"J :",j)
  inIm.ver(img)

  textSize(32);
  text(" Data Point :", 20,300/2 +40  );
  textSize(15);
  text("    Etiqueta : " +String(i), 20,300/2+70 );
  text("    Iteracion : " +String(j), 20,300/2+90 );


  var errorI = 0
  var predicciones = [] ;
  for(var p = 0 ; p < 10 ; p++){

    var pre = neurons[p].predic(img)
    predicciones.push(pre)
    if(p == i){
     neurons[p].updateWeight(img,pre,1)
     errorN = pow((1-pre),2)
    }else{
     neurons[p].updateWeight(img,pre,0)
     errorN = pow((0-pre),2)
    }
    errorI+=errorN
  }

  //console.log("Predicciones :",predicciones)
  var h = 0 ;
  for(var p = 0 ; p < 10 ; p++){
    var pesos = neurons[p].weights()
    weightVisualizers[p].verWeight(pesos)

    var pos = createVector(width/2.5,h)
    textSize(10);
    text(" Prediccion : "+String(predicciones[p]),pos.x+100 ,pos.y+40);
    ellipse(pos.x-20 ,pos.y+40,20,20)
    h += largeW + padding ;
  }

  error+=errorI
  textSize(15);

  if (j != 0 && j % 10 == 0  ){
     text("Trainig Error : " +String(errorAc), 150,300/2+70 )
     errorAc = error
     console.log("Error de Entrenamiento",errorAc)
     error = 0
  }else{
     text("Trainig Error : " +String(errorAc), 150,300/2+70 )
  }

  i++
  if(i >=10){
    i = 0 ;
    j++ ;
  }
  if( j >= nImag ) {
    j = 0 ;
  }


  frameRate(10)

}
