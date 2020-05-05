import { css, html, LitElement } from 'lit-element';

export class TextInput extends LitElement {
  static get properties() {
    return {
      value: { type: String },
      firstText: { type: String },
      label: { type: String },
      input: { type: Object },
      placeholder: { type: String, attribute: true }
    }
  }

  constructor() {
    super();
    this.firstText = '';
  }

  firstUpdated() {
  }

  updated() {

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
      <input type="text" name="" placeholder="${this.placeholder}" id="name" @change="${this.handleInput}" .value="${this.firstText}" @submit="${() => this.firstText = ''}" /></label>
    `
  }
  handleInput(e) {
    this.firstText = e.target.value;
  }
}

customElements.define('text-input', TextInput);
