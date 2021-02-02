const person = {name: 'jack william', age: 19, job:'programmer', address: 'kochu khet', phone: '01746566942', friends: ['Tom','Jerry','white','mark']};

const complexObject = {
    name: 'abc',
    info: {
        address: 'Uttar badda',
        leader: 'Tiger Leader'
    }
}

const {leader} = complexObject.info;


const {name, job, address, salary} = person;

const phoneNumber = person.phone;

console.log(name, job, address, salary);



const friends = ["Sakib khan","Arman khan", "Salman khan","Aamir khan","Shahrukh khan"];
const [first, ...third] = friends;
console.log(third);