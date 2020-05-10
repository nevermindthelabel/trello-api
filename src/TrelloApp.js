import { LitElement, html, css } from 'lit-element';
import './components/input.js';
import { idList, API_KEY, TOKEN } from './auth/auth.js';

export class TrelloApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
      placeholder: { type: String }
    };
  }

  constructor() {
    super();
    this.placeholder = '';
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }
      main {
        flex-grow: 1;
      }
      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }
    `;
  }

  render() {
    return html`
      <main>
      <form>
        <div className="input-container">
          <text-input
          id="name"
          placeholder="name"
          label="name"
          ></text-input>
          <text-input
          id="purpose"
          placeholder="purpose"
          label="purpose"
          ></text-input>
          <text-input
          id="message"
          placeholder="message"
          label="message"
          ></text-input>
          <button type="submit" @click="${this.submit}">Submit</button>
        </div>
        </form>
      </main>
    `;
  }
  submit(e) {
    e.preventDefault();
    const name = this.shadowRoot.querySelector('#name').value;
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    }
    postData(`https://api.trello.com/1/cards?idList=${idList}&key=${API_KEY}&token=${TOKEN}&name=${name}`).then(data => console.log(data));
  }
}
