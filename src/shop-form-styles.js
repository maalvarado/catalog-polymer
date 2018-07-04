import '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="shop-form-styles">
  <template>
    <style>

      :host {
        display: block;
      }

      .main-frame {
        margin: 0 auto;
        padding: 0 24px 48px 24px;
        max-width: 900px;
        overflow: hidden;
      }

      .subsection:not([visible]) {
        display: none;
      }

      .empty-cart {
        text-align: center;
        white-space: nowrap;
        color: var(--app-secondary-color);
      }

      h2 {
        font-size: 13px;
      }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
