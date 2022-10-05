/** @class FlatHead */
class FlatHead extends HTMLElement {
    constructor() {
        super();
        console.log( 'FlatHead constructing...' );
        // const currentDocument = document.currentScript.ownerDocument;
        // this.attachShadow( { mode: 'open' } );
        
        // const template = currentDocument.querySelector( '#flat-head-template' );
        // const instance = template.content.cloneNode( true );
        // this.shadowRoot.appendChild( instance );
        // this.shadowRoot.innerHTML = `<div>I am a very useful screwdriver.</div>`;

    }

    async connectedCallback() {
        let the_template = await fetch( '/part_three/components/FlatHead/FlatHead.html' );
        let temp = await the_template.text();
        console.log( temp );
        this.attachShadow( { mode: 'open' }).innerHTML = temp;
    }
}

customElements.define( 'flat-head', FlatHead );
