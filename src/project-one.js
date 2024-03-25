import { LitElement, html, css } from "lit"; 

class ProjectOne extends LitElement {
    static properties = {
        items : {type: Array }, 
    }

    static styles = css`
        :host {
            display: block
        }
    
        my-item {
            display: block;
            background-color: blue; 
            padding: 16px; 
        }
    `;

    
}