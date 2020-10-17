type CityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type TechType = {
    id: number
    title: string
}

type StudentType = {
    age: number
    name: string
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

const student: StudentType = {
    "name": "Leha",
    age: 35,
    isActive: true,
    address: {
        streetTitle: "Arsenalnaya",
        city: {
            title: "Devyatkino",
            countryTitle: "Russiya"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}

console.log(student.age);
console.log(student.name);
console.log(student.address.city.title)
console.log(student.technologies[2].title);



export default student;