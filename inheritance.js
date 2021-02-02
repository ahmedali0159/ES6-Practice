class Parent {
    constructor(){
        this.fatherName = "Mohidul";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Manaf");
const baby2 = new Child("Lutba");
console.log(baby.getFullName());
console.log(baby2.getFullName());