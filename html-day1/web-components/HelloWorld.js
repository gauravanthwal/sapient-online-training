class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var msg = document.createElement("h2");
    msg.innerHTML = "Hello World !";
    this.appendChild(msg);
  }
}

customElements.define("hello-world", HelloWorld);
