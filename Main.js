
let img; // Declarar variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage('~/Escritorio/programas/SimpleNeuronChain/mnist_png/train/0'); // Cargar la imagen
}

function draw() {
  // Muestra la imagen en su tamaño original en la posición (0,0)
  image(img, 0, 0);

}
