import AuthService from '../../services/auth.service.js';

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

    const nameInput = this.querySelector("#Name");
    const emailInput = this.querySelector("#Email");
    const passwordInput = this.querySelector("#Passord");

    const emailRegex = /[^@]*@stud\.noroff\.no/g;
    const pswRegex = /[a-zA-Z0-9]{8,20}/g;

    submitButton.addEventListener("click", async () => {
      submitButton.disabled = true;

      if (nameInput.value.length <= 1) {
        console.log("For kort navn, navn må være mer en 1 tegn.");
      }

      let emailMatch = emailRegex.exec(emailInput.value);
      if (!emailMatch) {
        console.log("Emailen tilhører ikke en Noroff bruker");
      }

      let passwordMatch = pswRegex.exec(passwordInput.value);
      if (!passwordMatch) {
        console.log(
          "Passord må inneholde; liten bokstav, stor bokstav, minst 1 tall og være 8-20 tegn"
        );
      }

      if (
        await this.authService.register(
          nameInput.value,
          emailInput.value,
          passwordInput.value
        )
      ) {
        console.log("Registrering vellykket");
      } else {
        console.error("Noe gikk gale.");
      }
    });
  }
}

export default Register;
