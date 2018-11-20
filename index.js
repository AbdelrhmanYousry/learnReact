
// var car = {
//   model: "1991",
//   getName: function(){
//     console.log("this car is "+ this.name +" and its mode is " + this.model)
//   }
// }

// var bmw = Object.create(car,{
//   "name": {
//     value: "bmz",
//     enumerable: true
//   }
// } )
// console.log(bmw.name)
// bmw.getName()

// function Car(model, year){
//   this.model = model,
//   this.year = year
//   prototype = {
//     data: 
//   }
//   // this.data = function(){
//   //   console.log("this model is "+this.model +" and its year is "+this.year )
//   // }
// }
// Car.prototype.data = function(){
//     console.log("this model is "+this.model +" and its year is "+this.year )
  
// }

// ====================



// class Car {
//   constructor(model, year){
//     this.model = model,
//     this.year = year
//   }
//   data(){
//     console.log("this model is "+this.model +" and its year is "+this.year )

//   }
// }

// class Bmw extends Car{
//   constructor(){
//     super()
//     this.year = 2000
//   }
//   data(){
//     console.log("this model is "+this.model +" and its year is "+this.year )

//   }
// }
// // bmw = new Car("bmw","1991")
// bmw = new Bmw("bmw","1991")
// bmw.data()


// == IIFE
// immediately invoked function expression
// module design
var saedo = (function(){
  var _age = 20;
  
  return {
    name: "Saeedo",
    newAge: function(num){
      return _age + num
    }
  }
}())

// revealer pattern
// var saedo = (function(){
//   var _age = 20;
//   var newAge = function(num){
//       return _age + num
//     } 
//   return {
//     name: "Saeedo",
//     newAgec 
//   }
// }())

console.log(saedo.newAge(2))
// saedo()