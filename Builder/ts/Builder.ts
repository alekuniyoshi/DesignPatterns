class PersonTs {
    private name: string;
    private lastName: string;
    private age: number;
    private country: string;
    private city: string;
    private hobbies: string[];


    constructor(name: string,
        lastName: string,
        age: number,
        country: string,
        city: string,
        hobbies: string[]
    ) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }
    getFullName(): string {
        return this.name + " " + this.lastName;
    }
}

interface PersonBuilderTs {
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    setName(name: string): PersonBuilderTs;
    setLastName(lastName: string): PersonBuilderTs;
    setAge(age: number): PersonBuilderTs;
    setCountry(country: string): PersonBuilderTs;
    setCity(city: string): PersonBuilderTs;
    addHobby(hobby: string): PersonBuilderTs;
    buildTs(): PersonTs;
}


class NormalPersonBuilder implements PersonBuilderTs {
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    constructor() {
        this.name = "";
        this.lastName = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    reset(): void {
        this.name = "";
        this.lastName = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    setName(name: string): PersonBuilderTs {
        this.name = name;
        return this;
    }

    setLastName(lastName: string): PersonBuilderTs {
        this.lastName = lastName;
        return this;
    }

    setAge(age: number): PersonBuilderTs {
        this.age = age;
        return this;
    }

    setCountry(country: string): PersonBuilderTs {
        this.country = country;
        return this;
    }

    setCity(city: string): PersonBuilderTs {
        this.city = city;
        return this;
    }


    addHobby(hobby: string): PersonBuilderTs {
        this.hobbies.push(hobby);
        return this;
    }

    buildTs(): PersonTs {
        const person = new PersonTs(this.name,
            this.lastName,
            this.age,
            this.country,
            this.city,
            this.hobbies);

        this.reset();
 
        return person;
    }


}


class PersonDirector {
    private personBuilderTs: PersonBuilderTs;

    constructor(personBuilder: PersonBuilderTs) {
        this.personBuilderTs = personBuilder;
    }

    setPersonBuilder(personBuilder: PersonBuilderTs) {
        this.personBuilderTs = personBuilder;
    }

    createSimplePerson(name: string, lastName: string) {
        this.personBuilderTs.setName(name)
            .setLastName(lastName);
    }


}


//Creation 1
const personBuilder1 = new NormalPersonBuilder();

const alejandro1 = personBuilder1.setName("Alejandro")
    .setLastName("Kuniyoshi")
    .addHobby("Programming")
    .addHobby("listening music")
    .buildTs();

console.log(alejandro1);


//Creation with Director
const personWithDirector = new PersonDirector(personBuilder1);
personWithDirector.createSimplePerson("John","Snow");
const snow = personBuilder1.buildTs();
console.log(snow);

