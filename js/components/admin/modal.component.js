class ModalComponent extends HTMLElement {
  constructor(post, callback) {
    super();

    this.confirmText = "ja jeg vil slette posten";
    this.post = post;
    this.callback = callback;
  }

  connectedCallback() {
    this.render();
    this.listeners();
  }

  render() {
    this.innerHTML = `
        <div class="modal-card">
            <div class="modal-header">
                <div class="title">Slett posten?</div>
                <div class="description">
                    Er du sikker på at du vil slette: ${this.post.title}?
                </div>
            </div>
            <span>Bekreft med å skrive: ${this.confirmText}</span>
            <input type="text" id="modal-input" placeholder="${this.confirmText}">
            <div class="modal-actions">
                <button id="modal-cancel" class="btn">Avbryt</button>
                <button id="modal-confirm" class="btn slett-btn" disabled>Slett</button>
            </div>
        </div>
    `;
  }

  delete() {
    this.remove();
    this.callback();
  }

  listeners() {
    const modalCancel = this.querySelector("#modal-cancel");
    const modalConfirm = this.querySelector("#modal-confirm");
    const modalInput = this.querySelector("#modal-input");

    modalCancel.addEventListener("click", (event) => {
      event.preventDefault();
      this.remove();
    });

    modalConfirm.addEventListener("click", (event) => {
      event.preventDefault();
      this.delete();
    });

    modalInput.addEventListener("keyup", (event) => {
      if (modalInput.value.toLowerCase() === this.confirmText) {
        modalConfirm.removeAttribute("disabled");
      }

      if (
        event.key === "Enter" &&
        modalInput.value.toLowerCase() === this.confirmText
      ) {
        event.preventDefault();
        this.delete();
      }
    });
  }
}

export default ModalComponent;
