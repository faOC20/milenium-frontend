
import { BACK_API } from "astro:env/client"
import Bookmark from "./decoration/Bookmark.astro"
import { useEffect, useState } from "react"

const fetchMonthSummary = async (month, year, isCashea) => {
    const result = await fetch (`http://localhost:5000/api/get-month-revenue`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            year: year,
            month: month,
            isCashea: isCashea
        }),
        credentials: 'include'
    })
    const {data} = await result.json()
    return data
}

export const MonthSummary = ({year, isCashea}) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()+1)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async()=>{
            const data =  await fetchMonthSummary(currentMonth, year, isCashea)

            setData(data)
        }
        fetchData()
        setLoading(false)
    }, [currentMonth])
    
    return (
        <section id="year-revenue-summary" class="w-full py-2">
    
    <div class="shadow  shadow-theme-light-blue rounded-lg  p-9 flex flex-col bg-white overflow-x-auto">
        <div class="flex gap-5">
            <h2 class='font-bold py-2 text-theme-light-blue text-lg md:text-xl'>
                Resumen del mes
            </h2>

    
            <div class="flex text-sm items-center">
                        
                <select 
                onChange={(e)=>{
                    setLoading(true)
                    setCurrentMonth(e.target.value)
                }}
                  id="year" 
                  name="paymentMethod"
                  class="w-full h-fit border px-3 py-2 md:h-full md:py-0 flex border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-ocean-blue"
                >
                  <option value={1} selected={currentMonth === 1}>enero</option>
                  <option value={2} selected={currentMonth === 2}>febrero</option>
                  <option value={3} selected={currentMonth === 3}>marzo</option>
                  <option value={4} selected={currentMonth === 4}>abril</option>
                  <option value={5} selected={currentMonth === 5}>mayo</option>
                  <option value={6} selected={currentMonth === 6}>junio</option>
                  <option value={7} selected={currentMonth === 7}>julio</option>
                  <option value={8} selected={currentMonth === 8}>agosto</option>
                  <option value={9} selected={currentMonth === 9}>septiembre</option>
                  <option value={10} selected={currentMonth === 10}>octubre</option>
                  <option value={11} selected={currentMonth === 11}>noviembre</option>
                  <option value={12} selected={currentMonth === 12}>diciembre</option>
                </select>
              </div>
        </div>
        
        <hr class="mt-5 mb-9 text-black/10"></hr>

        {
            loading ? (""):
            (
                <>
                    {
                        isCashea == '1'?(
                            <table class="min-w-full border-collapse">
                                <thead>
                                    <tr class="bg-gray-50">
                                        <th class="border px-4 py-2 text-center">Total No Pagadas</th>
                                        <th class="border px-4 py-2 text-center">Total Errores Bancarios</th>
                                        <th class="border px-4 py-2 text-center">Total Pagados</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border px-4 py-3 text-center bg-red-100  font-medium">
                                            ${data?.total_unpaid}
                                        </td>
                                        <td class="border px-4 py-3 text-center bg-orange-100  font-medium">
                                            ${data?.total_error}
                                        </td>
                                        <td class="border px-4 py-3 text-center bg-green-100 font-medium">
                                            ${data?.total_paid}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        ):(
                            <table class="min-w-full border-collapse">
                                <thead>
                                    <tr class="bg-gray-50">
                                        <th class="border px-4 py-2 text-center">Total gastos</th>
                                        <th class="border px-4 py-2 text-center">Total ventas</th>
                                        <th class="border px-4 py-2 text-center">Ganancias brutas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border px-4 py-3 text-center bg-red-100  font-medium">
                                            ${data?.total_unpaid}
                                        </td>
                                        <td class="border px-4 py-3 text-center bg-orange-100  font-medium">
                                            ${data?.total_error}
                                        </td>
                                        <td class="border px-4 py-3 text-center bg-green-100 font-medium">
                                            ${data?.total_paid}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                
                </>
            )
        }
        
    </div>
</section>
    )
}

