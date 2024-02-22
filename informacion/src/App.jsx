import './App.css'
import Profile from './components/Profile';
import imageUrl from './assets/dog6.jpeg';
import img2 from './assets/dog1.jpeg';
import img3 from './assets/dog2.jpeg';
import img4 from './assets/dog3.jpeg';
import img5 from './assets/dog4.jpeg';
import img6 from './assets/dog5.jpeg';


function App() {
  console.log(imageUrl)
     return (
    <div className="App">
     <div className ='contenedor-principal'>
        <h1>Mis desarrolladores favoritos son</h1>
        <Profile
          nombre='Brais Moure'
          pais='España'
          imagen={imageUrl}
          cargo='Ingeniero de Software'
          empresa='MoureDev'
          perfil=' empresa de desarrollo de software MoureDev'
        />
        <Profile
          nombre='Brais Moure'
          pais='España'
          imagen={img2}
          cargo='Ingeniero de Software'
          empresa='MoureDev'
          perfil=' empresa de desarrollo de software MoureDev'
        />
        <Profile
          nombre='Brais Moure'
          pais='España'
          imagen={img3}
          cargo='Ingeniero de Software'
          empresa='MoureDev'
          perfil=' empresa de desarrollo de software MoureDev'
        />
        <Profile
          nombre='Brais Moure'
          pais='España'
          imagen={img4}
          cargo='Ingeniero de Software'
          empresa='MoureDev'
          perfil=' empresa de desarrollo de software MoureDev'
        />
        <Profile
          nombre='Brais Moure'
          pais='España'
          imagen={img5}
          cargo='Ingeniero de Software'
          empresa='MoureDev'
          perfil=' empresa de desarrollo de software MoureDev'
        />
        <Profile
          nombre='Brais Moure'
          pais='España'
          imagen={img6}
          cargo='Ingeniero de Software'
          empresa='MoureDev'
          perfil=' empresa de desarrollo de software MoureDev'
        />
     </div>

    </div>
  );
}

export default App
