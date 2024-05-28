import AuthService from "../../services/auth.service.js";

class Register extends HTMLElement {
  constructor() {
    super();

    this.authService = new AuthService();
  }

  connectedCallback() {
    this.render();
    this.listener();
  }

  render() {
    this.classList.add("register");
    this.innerHTML = `
      <div class="notification hidden">
        <span class="notification-title"></span>
        <span class="notification-body"></span>
      </div>
      <img src="../media/Eventyrer.JPG" alt="Bilde" style="width:100%">
      <div class="register-container">
        <form>
          <div class="input-wrapper">
            <label for="Name">Name:</label>
            <input type="name" id="Name" name="Name" placeholder="Skriv inn Fornavn og etternavn">
          </div>

          <div class="input-wrapper">
            <label for="Email">Email:</label>
            <input type="email" id="Email" name="Email" placeholder="Skriv inn e-post">
          </div>

          <div class="input-wrapper">
            <label for="Passord">Passord:</label>
            <input type="password" id="Passord" name="Passord" placeholder="Skriv inn passord">
          </div>
          
          <button type="button" class="btn registrer-btn">Registrer deg</button>
        </form>
      </div>  
    `;
  }

  listener() {
    const submitButton = this.querySelector(".registrer-btn");

    const notify = this.querySelector(".notification");
    const notifyTitle = this.querySelector(".notification-title");
    const notifyBody = this.querySelector(".notification-body");

    const nameInput = this.querySelector("#Name");
    const emailInput = this.querySelector("#Email");
    const passwordInput = this.querySelector("#Passord");

    const emailRegex = /[^@]*@stud\.noroff\.no/g;
    const pswRegex = /[a-zA-Z0-9]{8,20}/g;

    submitButton.addEventListener("click", async () => {
      submitButton.disabled = true;

      if (nameInput.value.length <= 1) {
        notify.classList.remove("hidden");
        notify.classList.add("error");
        notifyTitle.innerHTML = "Ugyldig brukernavn";
        notifyBody.innerHTML =
          "Navnet må være minst 2 bokstaver.";
        return;
      }

      let emailMatch = emailRegex.exec(emailInput.value);
      if (!emailMatch) {
        notify.classList.remove("hidden");
        notify.classList.add("error");
        notifyTitle.innerHTML = "Feil epost";
        notifyBody.innerHTML = "Eposten må være en noroff e-post. ";
        return;
      }

      let passwordMatch = pswRegex.exec(passwordInput.value);
      if (!passwordMatch) {
        notify.classList.remove("hidden");
        notify.classList.add("error");
        notifyTitle.innerHTML = "Ugyldig passord";
        notifyBody.innerHTML =
          "passord mål være mellom 8-20 tegn og inneholde en bokstav. ";
        return;
      }

      if (
        await this.authService.register(
          nameInput.value,
          emailInput.value,
          passwordInput.value
        )
      ) {
        notify.classList.remove("hidden");
        notify.classList.add("success");
        notifyTitle.innerHTML = "registerer vellykket!";
        notifyBody.innerHTML = "Du er nå registert";
      } else {
        notify.classList.remove("hidden");
        notify.classList.add("error");
        notifyTitle.innerHTML = "Register feilet!";
        notifyBody.innerHTML = "Registreringen feilet, prøv igjen.";
      }
    });
  }
}

export default Register;
