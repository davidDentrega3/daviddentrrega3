class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      David Del Campo Salazar.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);