//  Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person{
    constructor(name , age, country){
        this.name=name;
        this.age=age;
        this.country=country;
    }
    displayDetails(){
        console.log("Name of the person "+this.name);
        console.log("Age of the person "+this.age);
        console.log("Country of the person "+this.country);
    }
    
}
    const person1 = new Person("jayaprakash",24,"india");
    const person2 = new Person("Viart Kohli",37,"India");
    console.log("---Person-1 details---- ")
    person1.displayDetails();
    console.log("\n---Person-2 details---- ")
    person2.displayDetails();