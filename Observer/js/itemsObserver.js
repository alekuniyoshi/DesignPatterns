class Subject {
  constructor() {
    this.observers = []; //Array of observers that the subject notify them.
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((e) => e.refresh(data));
  }
}

class itemsSubject extends Subject {
  constructor() {
    super();
    this.data = [];
  }

  add(item) {
    this.data.push(item);
    this.notify(this.data);
  }
}

class HtmlElementOberver {
  constructor(element) {
    this.element = element;
  }

  refresh(data) {
    this.element.innerHTML = data.reduce((ac, e) => {
      return ac + `<p>${e}</p>`;
    }, "");
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn;
  }

  /* function that the subject can notify the observe */
  refresh(data) {
    this.fn(data);
  }
}

const items = new itemsSubject();
const div1Observe = new HtmlElementOberver(div1);
const observe = new Observer((data) => {
  div3.innerHTML = data.length;
});

items.subscribe(div1Observe);
items.subscribe(observe);

function add() {
  const name = txtName.value;
  items.add(name);
}
