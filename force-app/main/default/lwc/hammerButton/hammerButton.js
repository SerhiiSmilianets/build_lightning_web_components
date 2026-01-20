import { LightningElement } from 'lwc';

export default class HammerButton extends LightningElement {
  handleClick() {
    this.dispatchEvent(new CustomEvent('click'));
  }
}
