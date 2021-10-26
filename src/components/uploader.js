import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

// @customElement('uploader')
export class Uploader extends LitElement {
  render() {
    return html`
      <input type="file" id="file" @change="${e => this.handleFileChange(e)}" />
      <label for="file">
        <slot></slot>
      </label>
    `;
  }

  handleFileChange(e) {
    const { files } = e.target;

    async function sendData(url, data) {
      const formData = new FormData();
      console.log(data);
      for (const name in data) {
        formData.append(name, data[name]);
      }
      console.log(formData);
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });
      console.log(response);
      // ...
    }
    sendData('https://api.trello.com/1/cards/${card}/attachments', {
      key: 'yourKey',
      token: 'yorToken',
      file: files[0]
    });
  }
}

customElements.define('uploader-component', Uploader);
