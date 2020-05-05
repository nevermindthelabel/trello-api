import { LitElement, html, css } from 'lit-element';
import './components/input.js';

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
        <div className="input-container">
          <text-input
          ></text-input>
          <text-input></text-input>
          <text-input></text-input>
        </div>
      </main>
    `;
  }
}
