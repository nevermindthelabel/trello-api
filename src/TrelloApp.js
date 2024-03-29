import { LitElement, html, css } from 'lit';
import './components/input.js';
import './components/uploader.js';

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
          <div class="input-container">
            <text-input id="name" placeholder="name" label="name"></text-input>
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
        <uploader-component></uploader-component>
      </main>
    `;
  }

  submit(e) {
    e.preventDefault();
    console.log(this.shadowRoot.querySelectorAll('text-input'));
    const inputs = this.shadowRoot.querySelectorAll('text-input');
    // const name = this.shadowRoot.querySelector('#name').value;
    // const purpose = this.shadowRoot.querySelector('#purpose').value;
    // const message = this.shadowRoot.querySelector('#purpose').value;
    for (let i = 0; i < inputs.length; i++) {
      console.log(inputs[i].value());
    }

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
    // postData(
    //   `https://api.trello.com/1/cards?idList=${idList}&key=${API_KEY}&token=${TOKEN}&name=${name}`
    // ).then(data => console.log(data));
  }
}

customElements.define('trello-app', TrelloApp);
