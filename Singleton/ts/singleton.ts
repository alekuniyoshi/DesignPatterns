class SingletonTs {
    private static instance: SingletonTs;
    public random: number;

    private constructor() {
        this.random = Math.random();
    }

    public static getInstance(): SingletonTs {
        if (!this.instance) {
            this.instance = new SingletonTs();
        }
        return this.instance;
    } 
}

const singletonts1 = SingletonTs.getInstance();
const singletonts2 = SingletonTs.getInstance();
console.log(singletonts1.random);
console.log(singletonts2.random);
/* 
singletonts1.random = 77;
singletonts2.random = 99; */

/* console.log(singletonts1.random);
console.log(singletonts2.random); */
