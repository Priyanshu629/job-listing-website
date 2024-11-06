"use client"

import { useJobs } from '../context/jobsContext'

const SearchAndFilter = () => {
const {setSearchJobTitle,filterJobs}=useJobs()
  return (
    <section className="w-[90%] mx-auto flex-wrap flex justify-around items-center p-2 ">
      <div>
       <input onChange={(e)=>setSearchJobTitle(e.target.value)}  type="text" className=" border-2 border-violet-800 p-1 m-2 rounded-md text-lg " placeholder="Search by Job Title" />
      </div>

       <select onChange={(e)=>filterJobs(e.target.value)} className='border-2 border-black p-2'>
        <option value="">Filter</option>
        <option value="Full-Time">Full Time</option>
        <option value="Part-Time">Part Time</option>
        <option value="Contract">Contract</option>
        <option value="Freelance">Freelance</option>
       </select>

      </section>
  )
}

export default SearchAndFilter
