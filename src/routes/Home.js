import Header from '../Components/Header/Header';
import './HomeStyles.css';

export default function Home() {
    return (
      <>
      <Header />
      <main>
      <div style={{padding:50}}>
      <div class="row">
  <div class="column">Explicació ClassBits amb slogan catchy</div>
  <div class="column">Foto</div>
</div>
          </div>
          <div style={{padding:50}}>
              2 quadrats amb sobra gris (reutilitzar rtic)=> 1- Generador d'avatars 2-Joc
          </div>
      </main>
      </>
    );
  }
