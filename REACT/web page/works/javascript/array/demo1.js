//1.1length of an Array
const vegetable=["carrot","cabbage","brinjal","potato"];
console.log("length",vegetable.length);
console.log("<br><br>");
//2.array toString
console.log(vegetable.toString());
console.log("<br><br>");
//pop remove last Element
const car=["bmw","tata","suzuki"];
car.pop();
console.log(car);
console.log("<br><br>");
// push place element in last
car.push("ferrari");
console.log("<br><br>");
// shift  remove the 1st element
car.shift();
console.log(car);
console.log("<br><br>");
//unsfit add new element in the begining
car.unshift("honda");
console.log(car);
console.log("<br><br>");
// delete
delete car[2];
console.log(car);
console.log("<br><br>");
//concat with value
const bike=car.concat("ninja");
console.log(bike);
console.log("<br><br>");
//splice ist indicate position 2nd indicate how many element should removed
car.splice(0,1,"v3","pulsar");
console.log(car);
console.log("<br><br>");
//slice  1st take start position 2nd take end position but it remove the start position value not remove end values
const bike1=car.slice(1,3);
console.log(bike1);
//map()
const data=[{
as:"sample",
cs:"usernmae"	
},
{
	 df:"sample",
    ef:"urname"
}]

 const new1=data.map((val)=>  val.as);
console.log(new1);
//filter
const new2=data.filter((val1)=>val1.as=="sample");
console.log(new2);

//some
const new3=data.some((val2)=>val2.as=="sample");
console.log(new3);

//every
const new4=data.every((val3)=>val3.as=="sample");
console.log(new4);
