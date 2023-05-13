class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + amount * this.tax;
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}

class ForeignSale {
  getDollarPrice() {
    return 12;
  }

  calculate(amount) {
    return amount * this.getDollarPrice();
  }
}

/* const regularSale = new RegularSaleStrategy(0.1);
const discountSale = new DiscountSaleStrategy(0.1, 3);
const foreignSale = new ForeignSale();


const sale = new SaleContext(regularSale);

sale.setStrategy(foreignSale);

console.log(sale.calculate(100)); */

const data = [
  {
    name: "Erdinger Pikantus",
    country: "Alemania",
    info: "Erdinger Pikantus es una cerveza de estilo weizenbock elaborada en la localidad bávara de Erding.",
    img: "https://dxjcdxuv6chk2.cloudfront.net/assets/biere/flascheglas/pikantus-2020-v2.png",
  },
  {
    name: "Corona",
    country: "México",
    info: "La cerveza Corona es una marca mundialmente conocida, distribuida a lo largo de más de 159 países en los cinco continentes.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Corona-6Pack.JPG",
  },
  {
    name: "Delirium Tremens",
    country: "Bélgica",
    info: "Esta pale ale tiene una efervescencia fina con un toque un tanto picante. Al tomarse, calienta el paladar y deja un sabor fuerte y de un amargor seco.",
    img: "https://www.delirium.be/themes/custom/delirium/assets/img/beers/beer_delirium_tremens_bottle.png",
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, beer) => {
      return (
        ac +
        `<div>
            <h2>${beer.name}</h2>
            <p>${beer.country}</p>
            </div>
            <hr>`
      );
    }, "");
  }
}

class DetailedListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, beer) => {
      return (
        ac +
        `<div>
              <h2>${beer.name}</h2>
              <p>${beer.country}</p>
              <p>${beer.info}</p>
              </div>
              <hr>`
      );
    }, "");
  }
}


class ImagesListStrategy {
    show(data, element) {
      element.innerHTML = data.reduce((ac, beer) => {
        return (
          ac +
          `<div>
              <img width ="20%" src="${beer.img}">
              <h2>${beer.name}</h2>
              </div>
              <hr>`
        );
      }, "");
    }
  }

const strategies = [new ListStrategy(), new DetailedListStrategy(), new ImagesListStrategy()];

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

slcOptions.addEventListener("change", (event) => {
  const selected = event.target.value;
  info.setStrategy(strategies[selected]);
  info.show();
});
