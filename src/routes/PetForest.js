import Header from '../Components/Header/Header';
import './PetForestStyles.css';


export default function PetForest() {
    return (
        <>
          <Header />
            <div class="backgroundForest" style={{ backgroundImage: "url(/images/forest.jpeg)" }}>
                <img class="bulbasaur" src="/images/pets/chibi_bulbasaur.png"></img>
                <img class="cat" src="/images/pets/chibi_cat.png"></img>
                <img class="charmander" src="/images/pets/chibi_charmander.png"></img>
                <img class="dino" src="/images/pets/chibi_dino.png"></img>
                <img class="dog" src="/images/pets/chibi_dog.png"></img>
                <img class="fox" src="/images/pets/chibi_fox.png"></img>
                <img class="lapras" src="/images/pets/chibi_lapras.png"></img>
                <img class="loving_dog" src="/images/pets/chibi_loving_dog.png"></img>
                <img class="pikachu" src="/images/pets/chibi_pikachu.png"></img>
                <img class="squirtle" src="/images/pets/chibi_squirtle.png"></img>
                <img class="thirsty" src="/images/pets/chibi_thirsty.png"></img>
                <img class="unicorn" src="/images/pets/chibi_unicorn.png"></img>
            </div>
        </>
      );
}
