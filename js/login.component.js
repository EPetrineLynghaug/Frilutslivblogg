class Login extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
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
            <button class="btn login-btn">Logg in</button>
            </div>
          </form>
        </div>
      `;
  }
}

export default Login;
