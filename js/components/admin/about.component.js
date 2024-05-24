
class About extends HTMLElement {
 constructor(){
  super()

 }

 connectedCallback(){
  this.render();
 }

 render() {
this.innerHTML = `
    <div class="about-page-img">
        <img src="./media/komprimertgithubbilde.jpg" alt="meg">
    </div>
    
    <div class="about-page">
        <div class="about-page-text">
            <h1>Om meg</h1>
            <p>
                Hei! Jeg heter Petrine Lyngghaug, og sammen med min trofaste følgesvenn, hunden Suzie,
                deler jeg våre spennende eventyr her på bloggen. Når jeg ikke er ute på nye oppdagelser, 
                studerer jeg utvikling på heltid. Jeg håper du finner inspirasjon til ditt neste eventyr 
                gjennom våre historier!
            </p>
            <a href="/index.html" class="btn btn-back" id="forsiden">Tilbake til forsiden</a>
        </div> 
        <img src="./media/suzie.png" alt="suzie, tegnet av meg">
    </div>
`
};
}
export default About