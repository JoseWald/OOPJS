export class Car {
    constructor(licensePlate,brand,model){
        this.licensePlate=licensePlate
        this.brand=brand
        this.model=model
        this.isAivalable=true
    }

    getDetail(){
        console.log("Car N°:"+this.licensePlate+"\n"+
                    "brand:"+this.brand+"\n"+
                    "model:"+this.model
        )
        this.isAivalable?console.log("Aivalable now"):console.log("Not aivalable")
    }

    updateAivalability(){
        this.isAivalable=!this.isAivalable
    }
}


export default Car
