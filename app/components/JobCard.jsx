import Link from 'next/link'
import React from 'react'

const JobCard = ({id,title,companyName,location,employmentType}) => {
  return (
    <Link href={`/jobDetails/${id}`} className='flex bg-slate-300 rounded-md mx-2 hover:bg-slate-400   font-bold flex-col border-4 hover:scale-105 transition-all p-2 m-2 border-green-700 w-[300px] min-h-[200px]'>
      <span className='text-xl text-violet-900 my-2'>Title : {title}</span>
      <span>Company : {companyName}</span>
      <span>Location : {location}</span>
      <span>Type : {employmentType}</span>
    </Link>
  )
}

export default JobCard
