class DocumentContext {
  constructor() {
    this.content = "";
    this.state = new BlankState();
  }

  setState(state) {
    this.state = state;
  }

  write(text) {
    this.state.write(this, text);
  }
}

class BlankState {
  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }
}

class WithContentState {
  write(documentContext, text) {
    documentContext.content += " " + text;
  }
}

class ApprovedState {
    write(documentContext, text) {
      console.error("Aprobed document,is not to be modificate.");
       }
  }

const doc = new DocumentContext();
console.log(doc.state);
doc.write("gato");
console.log(doc.content);
console.log(doc.state);
doc.write("perro")
console.log(doc);

doc.setState(new ApprovedState());
doc.write("elefante")
doc.setState(new WithContentState());
doc.write("leon")
console.log(doc)
