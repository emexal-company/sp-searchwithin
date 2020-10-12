import { PageViewElement } from '@components/page-view-element';
import { customElement, query ,property} from 'lit-element';

import styles from './demo-searchwithin.styles';
import template from './demo-searchwithin.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

import Prism from "prismjs";

@customElement('demo-searchwithin')
export class DemoSearchwithin extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-searchwithin': DemoSearchwithin;
  }
}
