import Header from '../Components/Header/Header';

export default function Home() {
    return (
      <>
      <Header />
      <main>
      <div style={{padding:50}}>
              2 columnes => Explicació sobre ClassBits + imatges
          </div>
          <div style={{padding:50}}>
              2 quadrats amb sobra gris (reutilitzar rtic)=> 1- Generador d'avatars 2-Joc
          </div>
      </main>
      </>
    );
  }