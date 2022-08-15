

class Neuron {

   constructor(nW,alfa){
        this.weight = []
        this.pixels = 28
        this.nW = nW
        // weight random inicialice
        for(var i = 0 ; i < nW ; i++ ){
          this.weight[i] = Math.random()
        }
        this.alfa = 0.01
   }

   predic(img){
     var pred = 0 ;
     var i = 0 ;
     // dot produc W1 * pixel1 + ... + Wn * pixeln
     for(var x = 0 ; x < this.pixels ; x++ ){
       for(var y = 0 ; y < this.pixels ; y++ ){

           var color = img.get(x,y)
           var input = color[0]/255
           pred += this.weight[i] * input
           i++
       }
     }
     return pred
   }

   updateWeight(img,predic,true_){

     var i = 0 ;
     var error = (pred - true_)*(pred -true_)
     console.log("Error : "+error)
     for(var x = 0 ; x < this.pixels ; x++ ){
       for(var y = 0 ; y < this.pixels ; y++ ){
           var color = img.get(x,y)
           var input = color[0]/255
           this.weight[i]-= 2 * pred * input * this.alfa
           i++
       }
     }

   }





}
