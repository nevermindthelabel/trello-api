import { css, html, LitElement } from 'lit-element';

export class TextInput extends LitElement {
  static get properties() {
    return {
      value: { type: String },
      firstText: { type: String },
      label: { type: String },
      input: { type: Object }
    }
  }

  constructor() {
    super();
    this.value = '';
    this.firstText = '';
  }

  firstUpdated() {

  }

  updated() {
    console.log(this.firstText);
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
      <input type="text" name="" id="name" @change="${this.handleInput}" .value="${this.firstText}" @submit="${() => this.firstText = ''}" /></label>
      <button type="submit" @click="${() => console.log(this.firstText)}">submit</button>
    `
  }
  handleInput(e) {
    this.firstText = e.target.value;
  }
}

customElements.define('text-input', TextInput);
