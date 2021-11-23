import Header from '../Components/Header/Header';
import "./PergaminoStyles.css";

export default function Pergamino() {
  var myArray = [
    "Els reis de la pista: Tres persones que vulguin surten a ballar una cançó",
    "De Padawan a Jedi: Algú aleatori es prepara una classe de 5 minuts per al proper dia del que vulgui",
    "La hora còmica: qui vulgui que expliqui un acudit",
    "The chair is lava: Tota la classe 30 minuts de peu",
    "Dumbledore s’ha emportat totes les llums: Feu una classe a les fosques",
    "Aprendre és tant important com llegir. 30 minuts de classe i la resta de lectura",
    "Un voluntari ha de ballar la cançó que algun company aleatori hagi escollit",
    "Temps de cinema: Tota la classe haurà de fer un resum/ressenya d’alguna pel·lícula que hagin vist",
    "Ring ring ring, t’ha tocat la bonoloto. Pots parlar sense parar durant 5 minuts",
    "Obrint el bagul dels records… El professor escolleix una activitat per repassar el que s’ha fet durant el curs",
    "Un huracà ha passat i la veu se’ns ha emportat. Durant la següent hora només podeu parlar amb signes!",
    "Hola historiadors, avui heu d’escriu la biografia/descripció d’algú (mínim 5 línies)",
    "Qui es qui? Tots els nens han d’imitar a les nenes i després les nenes als nens",
    "Chiquito de la calzada jooooor... algú aleatori/voluntari ha d’explicar alguna història graciosa/monòleg",
    "La voz kids: La classe cantarà el karaoke que el professor digui",
    "El monstre de les sabates ha passat per la classe. Durant la següent hora, tots amb les sabates fora!",
    "Temps de teatre. Algú aleatori ha de representar amb mímica una sèrie o pel·lícula i la classe ho ha d’adivinar",
    "El monstre de les vocals ha vingut. El pròxim cop que es passi llista, no es poden pronunciar les vocals dels noms",
    "Apadrineu un mestre. Algú aleatori passa llista en comptes del professor",
    "La informació està en els detalls… Tens 30 segons per dibuixar un objecte petit de la classe",
    "Toca tornar a connectar amb la natura! Tots 15 minuts asseguts al terra",
    "Mala sort! Heu de fer un exercici extra de deures o una divisió",
    "Una aurora boreal ha passat per damunt de l’escola, tots tenim 5 minuts per relaxar-nos i observar-la",
    "Director d’orquestra se’l requereix! Algú aleatori escolleix una cançó i tota la classe l’ha de cantar o ballar",
    "Deixem-nos portar pels sons. Dibuixe’m la música que el professor ens posi",
    "Tres persones aleatories han de sortir a explicar un conte o un acudit",
    "Batedora de llocs: tota la classe es canvia de lloc… ningú pot quedar-se on està!",
    "Ha arribat l’hipnotitzador… algú aleatori haurà d’actuar com una gallina durant la pròxima classe",
    "“Al agua patos”. 2 persones aleatòries poden anar a beure aigua en qualsevol moment durant tot el dia",
    "Virtualitzem-nos! Tota la classe pot dibuixar l’avatar que li agradaria tenir en un videojoc",
    "El primer i últim de la llista escolleixen una cançó per escoltar a classe",
    "Temps era temps… El mestre ha d’explicar alguna anècdota divertida",
    "És el teu dia de sort, avui no hi ha deures per ningú!",
    "Dalí i Picasso et necessiten! Fes un dibuix a la pissarra, després la classe haurà d'endevinar què és",
    "Reptes matemàtics… El primer en fer bé les 3 multiplicacions que el docent posarà a la pissarra, pot escollir una cançó",
    "Escape room verbal… he de solucionar l’enigma que el vostre mestre us proposarà!",
    "Els astres s’han alineat… 5 minuts més de pati per tots!",
    "La bruixa maduixa us ha llençat un encanteri! Durant 30 minuts ningú pot separar els llavis!",
    "Matemàstic! 5 divisions i/o multiplicacions per a tots!",
    "Tempesta de neutrons! Tots a ballar el buggy buggy durant 20 segons!",
    "Algú ha vist al fantasma de l’òpera.. demostrem-li què bé sabem cantar-la!",
    "Payday, lucky day... Algú aleatori obté 500 punts d’experiència!"
    ];
     function outPutOptions(arr) {
       var output = '';
       var length = arr.length;
       for (var x = 0; x < length; x++) {
         if(length - 1 === x) {
                 output += arr[x] + '';
            } else {
              output += arr[x] + ', ';
            }
       }
       return output;
     }
      
      function getRandom(){
        return myArray[Math.floor(Math.random()*myArray.length)];        
      }

      const showPergamino = () => {
        document.getElementById('fraseBonita').innerHTML = getRandom()
      }

      const deletePergamino = () => {
        document.getElementById('fraseBonita').innerHTML = ''
      }
  return (
    <>
      <Header />
     
        <button class="createGroupsButton pergaButton" type="button" onClick={showPergamino}>Obrir pergamí</button>
        <button class="closeButton" type="button" onClick={deletePergamino}>Borrar</button>

        <div class="containerPergamino">
          <img src="https://recursostic.net/wp-content/uploads/2021/03/pergamino.png" class="pergaImg" style={{marginBottom: -75}}/>

          <div class ="containerFraseBonita">
          <div class ="fraseBonita-container">
          <h3 id="fraseBonita"></h3>
          </div>
          <div class ="enter-options">
          </div>
          </div>

          <div class ="containerPergamino">
          <img src="https://recursostic.net/wp-content/uploads/2021/03/pergamino.png" class="pergaImg" style={{marginTop: -75}}/>
          </div>
        </div>
    </>
  );
}