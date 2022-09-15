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

 //Arrays of Arrays

const arrayOfArrays : string[][] = [["ademola" , "balogun" , "adewale"] , ["kenny","taiwo"]]

const arrayOfArrayOfArray : string[][][] = [[[""]]]

//Functions

//normal function without typescript
const add = (num1 , num2) => {
	return num1 + num2
}

add(true , {})


//function with typescript
const subtract = (num1: number , num2: number) : Boolean => {
    return num1 < num2
	// console.log("this must return a boolean based on what you specify to typescript")
}

subtract(20 , 20)

//boolean in this function is the return after operations

//always specify what you want , never let javascript dictate

//void // this is when you didnt want to return anything

const log = () : void => {
	console.log("hello")
}


//Union Types in Typescript

let numberOfString : (string | number | boolean | Object | null | undefined) = "balogun ademola"

numberOfString = {}


// using union types with array

let array1 : (string | number)[] = ["" , 2 , 9]


// using union types with objects

let array2 : {
	first_name : string,
	phone : string | number,
}






 



 


