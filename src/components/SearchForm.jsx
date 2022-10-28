import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";

const Countries = ()=>{
    const [destination , setDestination] = useState("Tunis")

    useEffect(()=>{
        axios.get("https://hotels-com-provider.p.rapidapi.com/v1/destinations/search",{
          params : {query: destination, currency: 'USD', locale: 'en_US'},
          headers: {
            'X-RapidAPI-Key': '0666f94a3fmshbaa10fa2c552f38p117c13jsn6ebcaf93cc75',
            'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
          }
        })
        .then(({data})=>console.log(data.suggestions.find((suggest)=>suggest.group=="HOTEL_GROUP")))
        .catch((err)=>console.log("error", err))
      },[])
    return(
        <select name="destionations" id="destionations" className='w-full' onChange={(e)=>setDestination(e.target.value)}>
                <option value="Tunis">Tunis</option>
                <option value="Ariana">Ariana</option>
                <option value="Ben Arous">Ben Arous</option>
                <option value="Mannouna">Mannouba</option>
                <option value="Bizerte">Bizerte</option>
                <option value="Nabeul">Nabeul</option>
                <option value="Béja">Béja</option>
                <option value="Jendouba">Jendouba</option>
                <option value="Zaghouan">Zaghouan</option>
                <option value="Siliana">Siliana</option>
                <option value="Le Kef">Le Kef</option>
                <option value="Sousse">Sousse</option>
                <option value="Monastir">Monastir</option>
                <option value="Mahdia">Mahdia</option>
                <option value="Kasserine">Kasserine</option>
                <option value="Kairouan">Kairouan</option>
                <option value="Gafsa">Gafsa</option>
                <option value="Sfax">Sfax</option>
                <option value="Gabès">Gabès</option>
                <option value="Médenine">Médenine</option>
                <option value="Tozeur">Tozeur</option>
                <option value="Kebili">Kebili</option>
                <option value="Ttataouine">Ttataouine</option>
        </select>
    )
}

const SearchForm = () => {
  return (
   
<div className="flex items-center justify-center p-12">
 
  <div className="mx-auto w-full max-w-[550px]">
    <form>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="fName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Hotel Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Hotel Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="destionations"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Destination
            </label>
            <div className='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'>
            <Countries/>

            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <label
          for="guest"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          How many people are you reserving?
        </label>
        <input
          type="number"
          name="guest"
          id="guest"
          placeholder="5"
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="date"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Arrival
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="time"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Departure
            </label>
            <input
              type="date"
              name="time"
              id="time"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      
      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default SearchForm