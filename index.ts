//DECLARATION

//Number
let age  = 24;

let weight: number  = 170;

weight = 180;
weight = 160;


 //String

 let first_name : String = "Balogun"

 first_name = 'ademola'


 //Boolean

 let isAuthenticated : Boolean = true;

 isAuthenticated = false;



 //Type Inference
let amount  : any = 20 ;
let say : number | string ;




//object

const obj = {
	firstName : 'Balogun',
	lastName : 'Ademola',
	phone : "2222244343",
	age : 24,
	gender : false

}


const obj2: {
	firstName: String,
	lastName : String,
	phone : String,
	age : Number,
	gender : Boolean

} = {
  firstName : "",
  lastName : "",
  phone : "",
  age : 0,
  gender : true

}

//GET VALUES
obj2.age = 30;
obj.gender = true;

 

//ARRAYS
const arrayOfString : (string | Boolean)[] = ["string1" , "string2" , "string3"]
arrayOfString.push("string")

const arrayOfBooleans : boolean[] = [true , false , true]
arrayOfBooleans.push(true)

const array: string[] = []

array.push("good")


let arrayOfObject : {
	name : String,
	age : number,
	gender: boolean
}[] = []


arrayOfObject.push({
	name : "",
	age : 20,
	gender : true
})





 


