import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './searchwithin.styles';
import standardTemplate from './searchwithin.template';

@customElement('sp-searchwithin')
export class Searchwithin extends Base {
  public static componentStyles = labelStyles;

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-searchwithin': Searchwithin;
  }
}
