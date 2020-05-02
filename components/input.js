import { css, html, LitElement } from 'lit-element';

export class TextInput extends LitElement {
  static get properties() {
    return {
      value: { type: String },
      text: { type: String },
      label: { type: String },
      input: { type: Object }
    }
  }

  constructor() {
    super();
    this.value = '';
    this.text = '';
  }

  firstUpdated() {

  }

  updated() {
    console.log(this.text);
    console.log(this.value);
  }

  static get styles() {
    return [
      css `
        :host {
          display: block;
        }
      `
    ];
  }
  render() {
    return html `
      <label htmlFor="name">
      <input type="text" name="" id="name" @input="${this.handleInput}" .value="${this.text}"/></label>
      <button @click="${() => console.log(this.text)}">submit</button>
    `
  }
  handleInput(e) {
    this.text = e.target.value;
  }
}

customElements.define('text-input', TextInput);
