import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {
    static get tag() {
        return 'counter-app'; 
    }

    contructor() {
        super();
        this.counter = 25;
        this.min = 1;
        this.max = 50; 
    }

    static get styles() {
        return css`    
        
        :host {
            display: inline-flex; 
        }

        span {
            background-color: pink;
            color: black;
            width: 30px;
            height: 20px; 

        }

        :host([counter="10"]) .header {
            color: #000000; 
        }

        .card{
            background-color: #ff5500; 
            width: 200px;
            height: 200px;
            margin: 1px; 
            padding: 16px;
            display: flex; 

        }

        .maxBtn {
            background-color: #000000;
            color: #ffffff;
            margin: 16px 16px 16px 16px; 
        }
    
    `; 
    }

    makeItRain() {
        // this is called a dynamic import. It means it won't import the code for confetti until this method is called
        // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
        // will only run AFTER the code is imported and available to us
        import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
          (module) => {
            // This is a minor timing 'hack'. We know the code library above will import prior to this running
            // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
            // this "hack" ensures the element has had time to process in the DOM so that when we set popped
            // it's listening for changes so it can react
            setTimeout(() => {
              // forcibly set the poppped attribute on something with id confetti
              // while I've said in general NOT to do this, the confetti container element will reset this
              // after the animation runs so it's a simple way to generate the effect over and over again
              this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
            }, 0);
          }
        );
    }

    render() {
        return html`
            <style>
                :host([counter="${this.min}"]) .header {
                    color: pink; 
                }

                :host([counter="${this.max}"]) .header {
                    color: pink;
                }
            </style>
            <confetti-container id="confetti">
                <div class="card"> 
                    <div class="header">
                    <header>${this.counter}</header>
            </div>
            <div class="buttonRow">
                <button @click="${this.subtractionOne}" ?disabled="${this.min === this.counter}" class="subtractionBtn">-</button>
                <button @click="${this.addnOne}" ?disabled="${this.max === this.counter}" class="additionBtn">-</button>
            </div> 
        </div>
        </confetti-container>
        `;
    }
    
    static get properties() {
        return {
            counter: { type: Number, reflect: true},
            min: {type: Number, reflect: true},
            max: {type: Number, reflect: true},
        }; 
    }
}

globalThis.customElements.define(CounterApp.tag, CounterApp); 
