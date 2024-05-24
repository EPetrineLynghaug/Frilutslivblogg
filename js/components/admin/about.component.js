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
<img src="./media/komprimert githubbilde.jpg" alt="meg">
</div>
<h1>Om meg</h1>
<p>Hei! Jeg heter Petrine Lyngghaug, og sammen med min trofaste følgesvenn, hunden Suzie,
     deler jeg våre spennende eventyr her på bloggen. Når jeg ikke er ute på nye oppdagelser, 
     studerer jeg utvikling på heltid. Jeg håper du finner inspirasjon til ditt neste eventyr 
     gjennom våre historier!</p>
`
};
}
export default About