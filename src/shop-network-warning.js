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

class ShopNetworkWarning extends PolymerElement {
  static get template() {
    return html`
    <style include="shop-button">

      :host {
        display: block;
        padding: 40px 20px;
        text-align: center;
        color: var(--app-secondary-color);
      }

      iron-icon {
        display: inline-block;
        width: 30px;
        height: 30px;
      }

      h1 {
        margin: 50px 0 10px 0;
        font-weight: 300;
      }

      p {
        margin: 0;
      }

      shop-button {
        margin-top: 50px;
      }

    </style>

    <div hidden\$="[[offline]]">
      <h1>Couldn't reach the server</h1>
    </div>
    <div hidden\$="[[!offline]]">
      <iron-icon icon="perm-scan-wifi"></iron-icon>
      <h1>No internet connection</h1>
      <p>Check if your device is connected to a mobile network or WiFi.</p>
    </div>
    <shop-button>
      <button on-click="_tryReconnect">Try Again</button>
    </shop-button>
`;
  }

  static get is() {
    return 'shop-network-warning';
  }

  static get properties() {
    return {
      offline: Boolean
    };
  }

  _tryReconnect() {
    this.dispatchEvent(new CustomEvent('try-reconnect', {
      composed: true
    }));
  }

}

customElements.define(ShopNetworkWarning.is, ShopNetworkWarning);