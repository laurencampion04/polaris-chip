import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
      #card-list {
        display: flex; 
      }
      img {
        width: 50%; 

      }
      .card { 
        font-size: 25px;
        display: inline-flex; 
        width: 800px;
        height: 440px; 
        padding: 8px; 
        margin: 8px; 
        background-color: pink;  
      }
      h1{
        font-size: 30px;
        margin-left: 300px; 
      }
    `;
  }

  render() {
    return html`<div>${this.title}</div>`; 
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
