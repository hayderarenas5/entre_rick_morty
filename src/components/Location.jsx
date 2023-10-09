import { IconSearch } from "@tabler/icons-react"
import axios from "axios"
const Location = ({location, setLocation}) => {
  const handleSubmit= (e)=>{
    e.preventDefault()
    const idLocation= e.target.idLocation.value

    axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({data})=> setLocation(data))
      .catch(({err})=> console.log(err))
  } 
  return (
    <section>
      <div className="relative grid place-items-center h-[550px]">
        <img className="overflow-hidden animate-spin-slow" src="/port-remo.png" alt="" />
        <img className="absolute" src="/logo.png" alt="" />
      </div>
        <div className="grid gap-2 mx-auto max-w-max">
          <form onSubmit={handleSubmit} className="flex items-center max-w-max mx-auto overflow-hidden">
            <input placeholder="Type a new location ..." name="idLocation" className="text-white text-center w-[360px] h-full bg-transparent outline-none border-2 border-[#5DBD56]" type="number" />
            <button type="submit" className="flex gap-2 items-center p-2 bg-[#4b8347] border-2 border-[#5DBD56]">Search <IconSearch size={18}/>
            </button>
          </form> 
          
        </div>
        <section className=" mt-6 max-w-[700px] mx-auto border-[#5DBD56] border-2">
            <h3 className="text-[#5DBD56] flex justify-center py-4">¡Wellcome to [{location?.name}] !</h3>

            <ul className="text-slate-500 flex gap-7 justify-center pb-4">
                <li>Type: {location?.type}</li>
                <li>Dimension: {location?.dimension}</li>
                <li>Population: {location?.residents.length}</li>
            </ul>
          </section>
    </section>
  )
}
export default Location