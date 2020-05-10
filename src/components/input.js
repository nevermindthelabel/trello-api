import { css, html, LitElement } from 'lit-element';
import { API_KEY, TOKEN, idList } from '../auth/auth.js'

export class TextInput extends LitElement {
  static get properties() {
    return {
      value: { type: String },
      firstText: { type: String },
      label: { type: String, attribute: true },
      input: { type: Object },
      placeholder: { attribute: true }
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
      <label for="name">
      <input type="text" name="" placeholder="${this.placeholder}" id="${this.label}" @change="${this.handleInput}" .value="${this.firstText}" @submit="${() => this.firstText = ''}" /></label>
    `
  }
  handleInput(e) {
    this.firstText = e.target.value;
  }
}

customElements.define('text-input', TextInput);
