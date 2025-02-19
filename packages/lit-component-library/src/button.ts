import { html, LitElement } from 'lit-element';
import { customElement, property } from 'lit/decorators.js'

@customElement('my-button')
export class MyButton extends LitElement {
    @property({ type: String }) label = '';

    render() {
        return html`
      <button style="display: block; padding: 1rem; margin-bottom: 1rem; background-color: blue; color: white;">
        ${this.label}
      </button>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-button': MyButton
    }
}
