//Implementator
class Editor {
  constructor(implementor) {
    this.implementor = implementor;
  }

  print(width, hight, color) {
    this.implementor.setWidth(width);
    this.implementor.setHight(hight);
    this.implementor.setColor(color);
    this.implementor.print();
  }
}

class HtmlPainter {
  constructor(container) {
    this.container = container;
    this.width = "1px";
    this.height = "1px";
    this.color = "#000000";
  }

  setWidth(width) {
    this.width = width + "px";
  }

  setHight(height) {
    this.height = height + "px";
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.container.innerHTML = `<div
    style="width:${this.width};height:${this.height};
    background:${this.color}";
    >
    </div>`;
  }
}

class CanvasPainter {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.width = "1";
    this.height = "1";
    this.color = "#000000";
  }

  setWidth(width) {
    this.width = width;
  }

  setHight(height) {
    this.height = height;
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}

class EditorWithClear extends Editor {
  constructor(implementor) {
    super(implementor);
  }

  clear() {
    this.implementor.setWidth(0);
    this.implementor.setWidth(0);
    this.implementor.print();
  }
}

// const editor = new Editor(new HtmlPainter(content));
// const editor = new Editor(new CanvasPainter(canvas));
const editor = new EditorWithClear(new HtmlPainter(content));

range.addEventListener("input", (e) => {
  const width = e.target.value;
  const height = e.target.value;
  const color = editorColor.value;
  editor.print(width, height, color);
});

btn.addEventListener("click", () => {
  editor.clear();
});
