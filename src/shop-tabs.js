/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import { IronSelectableBehavior } from '@polymer/iron-selector/iron-selectable.js';
import './shop-tabs-overlay.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="shop-tabs">
  <template strip-whitespace="">
    <style>
      :host {
        @apply --layout;
        @apply --layout-center-center;
      }

      #container {
        position: relative;
      }

      shop-tabs-overlay {
        @apply --shop-tab-overlay;
      }
    </style>
    <div id="container">
      <shop-tabs-overlay id="overlay"></shop-tabs-overlay>
      <slot></slot>
    </div>
  </template>
  
</dom-module>`;

document.head.appendChild($_documentContainer.content);

class ShopTabs extends mixinBehaviors(
  [IronSelectableBehavior], PolymerElement) {

  static get is() { return 'shop-tabs'; }

  static get observers() { return [
    '_onSelectedItemChanged(selectedItem)'
  ]}

  _onSelectedItemChanged(selectedItem) {
    if (selectedItem === undefined && this.selected) return;

    this.$.overlay.target = selectedItem;
  }
}

customElements.define(ShopTabs.is, ShopTabs);
