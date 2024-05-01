import Http from "./http.component.js";

class Login extends HTMLElement {
  constructor() {
    super();

    this.http = new Http();
  }

  connectedCallback() {
    this.render();
    this.listener();
  }

  render() {
    this.classList.add("login");
    this.innerHTML = `
        <img src="../media/Eventyrer.JPG" alt="Bilde" style="width:100%">
        <div class="login-container">
          <form>
            <div class="input-wrapper">
             <label for="Email">Email:</label>
              <input type="email" id="Email" name="Email" placeholder="Skriv inn e-post">
            </div>
            
            <div class="input-wrapper">
              <label for="Passord">Passord:</label>
              <input type="password" id="Passord" name="Passord" placeholder="Skriv inn passord">
            </div>

            <div class="actions">
              <a href="#">Registrer</a>
            <button type="button" class="btn login-btn">Logg in</button>
            </div>
          </form>
        </div>
      `;
  }

  listener() {
    const submitButton = this.querySelector(".login-btn");

    const emailInput = this.querySelector("#Email");
    const passwordInput = this.querySelector("#Passord");

    const emailRegex = /[^@]*@stud\.noroff\.no/g;
    const pswRegex = /[a-zA-Z0-9]{8,20}/g;

    submitButton.addEventListener("click", async () => {
      submitButton.disabled = true;

      let emailMatch = emailRegex.exec(emailInput.value);
      let passwordMatch = pswRegex.exec(passwordInput.value);

      if (!emailMatch) {
        console.error("Emailen er ikke korrekt");
      }

      if (!passwordMatch) {
        console.error("Passordet må være mellom 8-20 karrakterer");
      }

      const newRequest = {
        url: "/auth/login",
        method: "POST",
        body: {
          email: emailInput.value,
          password: passwordInput.value,
        },
      };

      // console.log(newRequest);
      const response = await this.http.request(newRequest);

      if (response.data.accessToken) {
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );

        window.location.href = '/index.html';
      }
    });
  }
}

export default Login;
