import Header from '../Components/Header/Header';
import avatarData from "../data/avatarData.json";

export default function Groups() {
var arrayChibits = [];

  const getArrayChibits = () => {
    avatarData.map((data) => {
      arrayChibits.push(data.name);
    })
  }
  getArrayChibits();
  console.log(arrayChibits)


    return (
      <>
      <Header />
      <div style={{ padding: 50 }}>
          <div class="container">
            Fer un shuffle dins d'un .map() en una array per tants ID com hi hagi i separar-los cada 5 en una línea diferent ??
          </div>
        </div>
      </>
    );
  }