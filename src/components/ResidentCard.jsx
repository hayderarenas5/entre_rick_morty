import { useEffect, useState } from "react";
import axios from 'axios'

const ResidentCard = ({residentEndpoint}) => {
    
    const [resident, setResident] = useState(null)

    //Todo ('Alive', 'Dead' or 'unknown')
    const characterStatus={
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-slate-500"
    }
    useEffect(() => {
      axios.get(residentEndpoint)
      .then(({ data })=>setResident(data))
      .catch((err)=>console.log(err))
    }, [])
    

  return (
    <article>
        <header className="relative">
            <img src={resident?.image} alt="" />
            {/* //?status */} 
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-1 rounded-md flex items-center gap-2">
                <div className={`h-3 w-3 ${characterStatus[resident?.status]} rounded-full`}>
                </div>
                <span>
                        {resident?.status}
                    </span>
            </div>
        </header>
        <div>
            <h2 className="flex justify-center font-bold">{resident?.name}</h2>
            <hr className="border-t-1 border-[#282841]"/>
            <ul className="p-2">
                <li className="font-semibold flex justify-between"><span className="text-slate-500 ">Spacies:</span> {resident?.species}</li>
                <li className="font-semibold flex justify-between"><span className="text-slate-500"> Origin</span> {resident?.origin.name}</li>
                <li className="font-semibold flex justify-between"><span className="text-slate-500">Times appear</span> {resident?.episode.length}</li>
            </ul>
        </div>
    </article>
  )
}
export default ResidentCard