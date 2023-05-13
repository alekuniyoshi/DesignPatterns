interface Component {
    getDetail(): string;
}

class ProductComponent implements Component {

    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    getDetail(): string {
        return `${this.name}`;
    }

}

//Decorator
abstract class ProductDecorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    getDetail(): string {
        return this.component.getDetail();
    }
}

//Decorator 1
class ComercialInfoProductDecorator extends ProductDecorator {

    private tradeName: string;
    private brand: string;

    constructor(component: Component, tradeName: string, brand: string) {
        super(component);
        this.tradeName = tradeName;
        this.brand = brand;
    }

    getDetail(): string {
        return `${this.tradeName} ${this.brand} ` + super.getDetail();
    }
}

//Decorator 2
class StoreProductDecorator extends ProductDecorator {
    private price: number;

    constructor(component: Component, price: number) {
        super(component);
        this.price = price;
    }

    getDetail(): string {
        return super.getDetail() + ` ${this.price}`;
    }
}


class HTMLProductDecorator extends ProductDecorator {
    getDetail(): string {
        return `<h1>Product Information </h1>
        <p>${super.getDetail()}</p>`;
    }
}

//Ejecution
//Component
const productComponent = new ProductComponent("Beer");
console.log(productComponent.getDetail());

//decorator 1 with component
const comercialInfoProductDecorator = new ComercialInfoProductDecorator(productComponent, "Asahi Premium", "Asahi");
console.log(comercialInfoProductDecorator.getDetail());

//decorator 2 with component
const storeProductDecorator = new StoreProductDecorator(productComponent, 200);
console.log(storeProductDecorator.getDetail());

//docorator 2 with decorator 1
const storeProductDecorator2 = new StoreProductDecorator(comercialInfoProductDecorator, 200);
console.log(storeProductDecorator2.getDetail());

//docorator 3 with docorator 2 with decorator 1
const htmlProductDecorator = new HTMLProductDecorator(storeProductDecorator2);
console.log(htmlProductDecorator.getDetail());
