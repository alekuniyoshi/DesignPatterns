class EncoderTextAbstration {
  constructor(encoder) {
    this.encoder = encoder;
  }

  encode(str) {
    return this.encoder.encode(str);
  }

  decode(str) {
    return this.encoder.decode(str);
  }
}

class Base64EncoderImplementor {
  encode(str) {
    return window.btoa(decodeURI(encodeURIComponent(str)));
  }

  decode(str) {
    return decodeURIComponent(decodeURI(window.atob(str)));
  }
}

class HTMLEncoderImplementor {
  encode(str) {
    return str.split(".").reduce((ac, e) => {
      return ac + `<p>${e.trim()}</p>`;
    }, "");
  }
  decode(str) {
    return str.split("</p>").reduce((ac, e) => {
      return e !== "" ? ac + e.replace("<p>", "") + ". " : ac + "";
    }, "");
  }
}

const encoder1 = new EncoderTextAbstration(new Base64EncoderImplementor());
console.log(encoder1.encode("Duck"));
console.log(encoder1.decode("RHVjaw=="));

const encoder2 = new EncoderTextAbstration(new HTMLEncoderImplementor());
console.log(
  encoder2.encode("This is a string. Here we had a ponint. Another point")
);

console.log(
  encoder2.decode(
    "<p>This is a string</p><p>Here we had a ponint</p><p>Another point</p>"
  )
);
