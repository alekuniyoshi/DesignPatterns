class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return `<form method="post" action="${this.action}">
     ${this.controls.reduce((ac, c) => {
       return (
         ac +
         `<div>
       ${this.getLabel(c)}
       ${this.getInput(c)} 
       </div>`
       );
     }, "")}
     <button type="submit">Send</button>
    </form>`;
  }

  getLabel(control) {
    return `<label>${control.text}</label>`;
  }

  getInput(control) {
    return `<input type="${control.type}"
    id="${control.name}
    name=${control.name}"
    />`;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.action = "";
    this.controls = [];
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: "text",
    });
    return this;
  }

  setEmail(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: "email",
    });
    return this;
  }

  setCheckBox(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: "checkbox",
    });
    return this;
  }

  setColor(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: "color",
    });
    return this;
  }

  build() {
    const frm = new Form(this.controls, this.action);
    this.reset();
    return frm;
  }
}

//Director
class FormDirector {
  constructor(formBuilder) {
    this.setBuilder(formBuilder);
  }

  setBuilder(formBuilder) {
    this.formBuilder = formBuilder;
  }

  createPeopleForm() {
    this.formBuilder.reset();
    this.formBuilder
      .setText("firstName", "Name")
      .setText("lastName", "Lastname");
  }

  createContactForm() {
    this.formBuilder.reset();
    this.formBuilder
      .setText("firstName", "Name")
      .setText("lastName", "Lastname")
      .setEmail("email", "email");
  }
}

const formBuilder = new FormBuilder();
const formPeople = formBuilder
  .setAction("add.php")
  .setText("firstName", "Name")
  .setText("lastName", "Lastname")
  .setCheckBox("drinker", "Are you drinker?")
  .setColor("color", "Choose a color")
  .build();

form1.innerHTML = formPeople.getContent();


const director = new FormDirector(formBuilder);
director.createPeopleForm();
form3.innerHTML = formBuilder.build().getContent();

director.createPeopleForm();
form4.innerHTML = formBuilder.build().getContent();

director.createContactForm();
form5.innerHTML = formBuilder.build().getContent();
