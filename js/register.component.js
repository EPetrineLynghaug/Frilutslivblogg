class Register extends HTMLElement {
 constructor(){
  super()

 }

 connectedCallback(){
  this.render();
 }

 render() {
    this.classList.add("register")
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
      
       <button class="btn registrer-btn">Registrer deg</button>
     </form>
   </div>  
 `;
    
 }

}
export default Register;