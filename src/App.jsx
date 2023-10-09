import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { gerRandomNumber } from './utils/random'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {
  //Todos los hooks son funciones

    const [location, setLocation] = useState(null)

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location/${gerRandomNumber(126)}`)
      .then(({ data })=>setLocation(data))
      .catch((err)=>console.log(err))
    }, []);
    

  return (
    <main className='px-4 min-h-screen bg-[url("/background_page.png")] text-white'>
      <Location location={location} setLocation={setLocation}/>
      {/* //?con el ?? quiero que aunque lo de la izquierda sea null envie un array[] 
      //TODO y en ? es si el location es null lo ignore y siga con la puntuacion .residents */} 
      <ResidentList residents={location?.residents ?? []}/>
    </main>
  );
}

export default App
