/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { PolymerElement } from "../node_modules/@polymer/polymer/polymer-element.js";
import "../node_modules/@polymer/iron-icon/iron-icon.js";
import './shop-button.js';
import './shop-icons.js';
import { html } from "../node_modules/@polymer/polymer/lib/utils/html-tag.js";

class Shop404Warning extends PolymerElement {
  static get template() {
    return html`
    <style include="shop-button">

      :host {
        display: block;
        text-align: center;
        color: var(--app-secondary-color);
      }

      iron-icon {
        display: inline-block;
        width: 60px;
        height: 60px;
      }

      h1 {
        margin: 50px 0 50px 0;
        font-weight: 300;
      }

    </style>

    <div>
      <iron-icon icon="error"></iron-icon>
      <h1>Sorry, we couldn't find that page</h1>
    </div>
    <shop-button>
      <a href="/">Go to the home page</a>
    </shop-button>
`;
  }

  static get is() {
    return 'shop-404-warning';
  }

}

customElements.define(Shop404Warning.is, Shop404Warning);