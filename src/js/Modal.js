// import { node } from "webpack";
export class Modal {
    constructor(classes) {
        this.classes = classes;
        this.modal = '';
        this.modalContent = '';
        this.modalCloseBtn = '';
        this.overlay = '';
    }

    buildModal(content) {
        //Overlay
        this.overlay = this.createDOMNode(this.overlay, 'div', 'overlay', 'overlay_modal');
    }
    createDomNode(node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes);
        return node
    };

};

