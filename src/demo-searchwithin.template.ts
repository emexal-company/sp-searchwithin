import { html } from 'lit-element';
import { DemoSearchwithin } from './demo-searchwithin.component';

import '@spectrum/sp-searchwithin';
import '@spectrum/sp-container';

import '@spectrum/sp-demo';

export default function template(this: DemoSearchwithin) {
  return html`
  <sp-container>
      <sp-rule medium label="Default"></sp-rule>
      <sp-demo width="400">
        <pre><sp-searchwithin>
  <sp-dropdown width="100">
    <sp-dropdownitem text="All"></sp-dropdownitem>
  </sp-dropdown>
  <sp-textfield placeholder="Search"></sp-textfield>
  <sp-clearbutton></sp-clearbutton>
</sp-searchwithin></pre>
      </sp-demo>

      <sp-rule medium label="Open"></sp-rule>
      <sp-demo width="400">
        <pre><sp-searchwithin>
  <sp-dropdown open width="200">
    <sp-dropdownitem text="All"></sp-dropdownitem>
    <sp-dropdownitem text="Campaigns"></sp-dropdownitem>
    <sp-dropdownitem text="Audiences"></sp-dropdownitem>
    <sp-dropdownitem text="Tags"></sp-dropdownitem>
  </sp-dropdown>
  <sp-textfield placeholder="Search"></sp-textfield>
  <sp-clearbutton></sp-clearbutton>
</sp-searchwithin></pre>
      </sp-demo>

      <sp-rule medium label="Default (Changed Selection)"></sp-rule>
      <sp-demo width="400">
        <pre><sp-searchwithin>
  <sp-dropdown open width="200">
    <sp-dropdownitem text="All"></sp-dropdownitem>
    <sp-dropdownitem selected text="Campaigns"></sp-dropdownitem>
    <sp-dropdownitem text="Audiences"></sp-dropdownitem>
    <sp-dropdownitem text="Tags"></sp-dropdownitem>
  </sp-dropdown>
  <sp-textfield placeholder="Search"></sp-textfield>
  <sp-clearbutton></sp-clearbutton>
</sp-searchwithin></pre>
      </sp-demo>

      <sp-rule medium label="Disabled"></sp-rule>
      <sp-demo width="400">
        <pre><sp-searchwithin>
  <sp-dropdown disabled width="200">
    <sp-dropdownitem text="All"></sp-dropdownitem>
    <sp-dropdownitem text="Campaigns"></sp-dropdownitem>
    <sp-dropdownitem text="Audiences"></sp-dropdownitem>
    <sp-dropdownitem text="Tags"></sp-dropdownitem>
  </sp-dropdown>
  <sp-textfield disabled placeholder="Term"></sp-textfield>
  <sp-clearbutton></sp-clearbutton>
</sp-searchwithin></pre>
      </sp-demo>
  </sp-container>
  `;
  
}
