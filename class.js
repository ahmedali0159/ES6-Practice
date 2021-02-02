class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.collage = "Ramizuddin collage";
    }
}

const student1 = new Student(15, "Ahmed");
const student2 = new Student(50, "Ali");
const student3 = new Student(29, "Hira");
console.log(student1, student2, student3);