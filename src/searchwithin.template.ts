import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Searchwithin } from './searchwithin.component';

export default function standardTemplate(this: Searchwithin) {

return html`
  <form class="spectrum-SearchWithin">
    <slot></slot>
  </form>
   `;
}
