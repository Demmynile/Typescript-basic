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


// union types with literals

let rainbowColor : "blue" | "orange" | "green" = "blue"

rainbowColor = "orange"


 
//enum 
enum RainbowTypes {
	RED,
	ORANGE,
	YELLOW,
	BLUE,
	INDIGO,
	VIOLET
}

let rainbowColor2: RainbowTypes = RainbowTypes.RED


//HOW TO MAKE THINGS OPTIONAL (?.)

let obj5: {
	property: string
	property2?: string
} = {
	property: "",
	property2: "adw"
}

//TYPES AND INTERFACES

//looking rough
const obj9 : {
	firstName : string,
	lastName : string,
	age : number,
	gender: boolean
} = {
	firstName : "",
	lastName : "",
	age : 20,
	gender: true
}

//then looking good using interfaces
// there are only used with object.
interface Person {
	firstName : string,
	lastName : string,
	age : number,
	gender: boolean
}
const obj3: Person = {
	firstName : "",
	lastName : "",
	age : 20,
	gender: true
}


// using types 

type Person2 = {
	firstName : string,
	lastName : string,
	age : number,
	gender: boolean
}

const obj4 : Person2 = {
	firstName : "",
	lastName : "",
	age : 20,
	gender: true
}

// assignning a type as a type.
type Person4 = string

const obj8 :Person4 = "good"

// array of an object

// type is best used when you specify it with other type like array of an object

type Person5 = {
	firstName : string,
	lastName : string,
	age : number,
	gender: boolean
}[]

const ade : Person5 = [ 
	{
	firstName : "",
	lastName : "",
	age : 20,
	gender: true
}
]


//classes
class Car {
	model : string
	color : string
	public age : number
	private peopleInPolicy: string[] = []
    private readonly manufactorDate : string = "2019-01-11"

	constructor(model , color , age){
		this.model = model
		this.color = color
		this.age = age
	}
		describe(){
			console.log(`A ${this.age} year old ${this.color} ${this.model}`)
		}

		addToPolicy(name: string){
            this.peopleInPolicy.push(name)
		}

	}



const myBanter = new Car("jaguar" , "green" , 2) 
 myBanter.describe()
 myBanter.addToPolicy("ademola")
//  myJaguar.peopleInPolicy.push("demola")

 


//cleaner
class Cap {

	private peopleInPolicy: string[] = []
    private readonly manufactorDate : string = "2019-01-11"

	constructor(public model:string , public color: string , public age : number){
		this.model = model
		this.color = color
		this.age = age
	}
		describe(){
			console.log(`A ${this.age} year old ${this.color} ${this.model}`)
		}

		addToPolicy(name: string){
            this.peopleInPolicy.push(name + this.manufactorDate)
			
		}

	}



 const myJaguar = new Car("jaguar" , "green" , 2) 
 myJaguar.describe()
 myJaguar.addToPolicy("ademola")
//  myJaguar.peopleInPolicy.push("demola")