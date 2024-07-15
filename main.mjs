import {Customer} from "./Customer.mjs"
import {Car} from "./Car.mjs"


const karenjy=new Car(1903,"gasyKar","kapoaka")
const voangory=new Car(2314,"old","unknown")
//karenjy.getDetail()

const Joe=new Customer("Joe",1234)
Joe.rentCar(karenjy)
Joe.rentedCarList()
Joe.returnCar(voangory)
Joe.rentCar(karenjy)
Joe.rentedCarList()
Joe.returnCar(karenjy)
Joe.rentedCarList()

//YOU CAN CONTINUE TO DO MORE TEST HERE , THANK YOU ^_^