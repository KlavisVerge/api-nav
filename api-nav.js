import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-styles/paper-styles.js';

/**
 * `api-nav`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ApiNav extends PolymerElement {
  static get template() {
    return html`
    <style>
      paper-tabs {
        color: var(--paper-blue-900);
        --paper-tabs-selection-bar-color: var(--paper-blue-900);
        --paper-tab-ink: var(--paper-blue-900);
      }

      a {
        text-decoration: none;
        color: var(--paper-blue-900);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
    <paper-tabs selected=[[selected]] link>
      <paper-tab><a href="https://statsplash.com">Home</a></paper-tab>
      <paper-tab><a href="https://statsplash.com/games">Games</a></paper-tab>
      <paper-tab><a href="https://statsplash.com/about">About</a></paper-tab>
    </paper-tabs>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'api-nav',
      },
      selected: {
        type: Number,
        value: 0
      }
    };
  }

  ready() {
    super.ready();
    if(window.location.pathname.toLowerCase().indexOf('games') != -1){
      this.selected = 1;
    }else if(window.location.pathname.toLowerCase() === 'about'){
      this.selected = 2;
    }else if(window.location.href === 'https://statsplash.com'){
      this.selected = 0;
    }else{
      this.selected = -1;
    }
  }
}

window.customElements.define('api-nav', ApiNav);
