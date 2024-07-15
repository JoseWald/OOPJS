
 export class Customer{
    constructor(name,Id){
            this.name=name
            this.Id=Id
            this.rentedCars=[]
    }

    rentCar(Car){
        if(Car.isAivalable){
            Car.updateAivalability()
            this.rentedCars.push(Car)
        }else{
            console.log("Sorry this car is already rented "+this.name+" can rent it when it will be get returned ")
        }
   
    }

    returnCar(Car){
        if(this.rentedCars.indexOf(Car)===-1){
            console.log("This car is not in his rented list")
        }else{
            this.rentedCars=this.rentedCars.filter(item=>item!==Car)
            console.log(Car.brand+" model "+Car.model+" is  returned by "+this.name)
        }
     
    }

    rentedCarList(){
        if(this.rentedCars.length===0){
            console.log("There is no more car rented by"+this.name)
        }else{
            console.log(this.name+" rented:\n")
            for(let i=0 ; i<this.rentedCars.length;i++){
                console.log(this.rentedCars[i].brand +" N°"+this.rentedCars[i].licensePlate +" model:"+this.rentedCars[i].model)
            }
        }
      
        console.log("\n")
    }
}
