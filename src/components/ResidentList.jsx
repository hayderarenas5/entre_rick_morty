import { useEffect, useState } from "react"
import ResidentCard from "./ResidentCard"
import { paginationsLogic } from "../utils/pagination"

const ResidentList = ({residents}) => {

  const [currentPage, setCurrentPage] = useState(1)
  
  const {pages, residentsInPage} =paginationsLogic(currentPage, residents)

  useEffect(() => {
    setCurrentPage(1)
  }, [residents]) 
  

  return (

    //todo generame columnas de forma automatica cada 300px
    <section >
        <ul className="text-jg flex pt-4 gap-3 justify-center flex-wrap pb-1">
          {
            pages.map((page)=>(
              <li key={page}>
                <button className={`bg-transparent text-white py-2 px-4 hover:bg-slate-500 ${page === currentPage && "bg-green-800"}`} onClick={()=>setCurrentPage(page)}>{page}</button>
              </li>
            ))
          }
        </ul>
        <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-6 max-w-[1000px] mx-auto py-10">
            {/* //!Es bueno que si el prop es plurar poner el parametro de map en singular
            //? La key la lleva el elemento padre en ete caso como el componente es digamoslo la unica etiqueta
            //? lo llevaria el y se le pasaria un dato unico en este caso el endpoint ya que contiene el id al final */}
            
            {residentsInPage.map((resident) => (
            <ResidentCard key={resident} residentEndpoint={resident}/>
            ))}
        </section>

        {/* //?Paginacion */}
        {/* //TOdo  flex-wrap obliga que si no cabe la cantidad de paginas se agrege una segunda fila*/}
        <ul className="text-jg flex gap-3 justify-center flex-wrap pb-10">
          {
            pages.map((page)=>(
              <li key={page}>
                <button className={`bg-transparent text-white py-2 px-4 hover:bg-slate-500 ${page === currentPage && "bg-green-800"}`} onClick={()=>setCurrentPage(page)}>{page}</button>
              </li>
            ))
          }
        </ul>
    </section>
  )
}
export default ResidentList