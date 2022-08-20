

class Neuron {

   constructor(nW,alfa){
        this.weight = []
        this.pixels = 28
        this.nW = nW
        // weight random inicialice
        for(var i = 0 ; i < nW ; i++ ){
          this.weight[i] = 0
        }
        this.alfa = 1
   }

   sig(x){
     return 1/(1+Math.exp(-x))
   }

   sigD(x){
    return this.sig(x)*(1-this.sig(x))
   }

   predic(img){
     var pred = 0 ;
     var i = 0 ;
     // dot produc W1 * pixel1 + ... + Wn * pixeln
     for(var x = 0 ; x < this.pixels ; x++ ){
       for(var y = 0 ; y < this.pixels ; y++ ){

           var color = img.get(x,y)
           var input = red(color)
           var w  = this.weight[i]
           pred += w * input
           i++
       }
     }
     return this.sig(pred)
   }

   updateWeight(img,pred,true_){

     var i = 0 ;

     var error = pow((true_-pred),2)
     //console.log("Error : "+error)

     for(var x = 0 ; x < this.pixels ; x++ ){
       for(var y = 0 ; y < this.pixels ; y++ ){
           var color = img.get(x,y)
           var input = red(color)

           this.weight[i] = this.weight[i] - this.sigD((pred-true_)*(pred-true_))* 2 * (pred-true_)* input * this.alfa
           i++
       }
     }

   }

   weights(){
     return this.weight ;
   }




}
