"use client"
import { useState } from "react";
import JobCard from "./JobCard"
import { useJobs } from "../context/jobsContext";


const JobList = () => {
  const { jobs } = useJobs()
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div >
      <h1 className="text-center font-bold font-serif">List of Available Jobs</h1>

      {
        
        currentJobs.length !== 0 && <p className="text-center text-green-700">{currentJobs.length} Jobs </p>
      }
      {currentJobs.length === 0 && <p className="text-center text-red-700">No jobs found</p>}
      <section className='w-[90%]  p-2 my-3 mx-auto flex flex-wrap '>

        {
          currentJobs.map((job, index) => {
            return <JobCard key={job.id} {...job} />
          })
        }
      </section>
      <div className="w-[90%] max-sm:w-[100%] mx-auto my-1 p-2 flex justify-center items-center">

        {currentPage > 1 && <button
          className="p-2 m-2 border-2 bg-green-500"
          onClick={() => handlePageChange(currentPage - 1)}

        >
          Previous
        </button>}



        <span className="mx-2 font-bold text-sm">Page {currentPage} of {Math.ceil(jobs.length / itemsPerPage)}</span>

        {
          currentPage === Math.ceil(jobs.length / itemsPerPage) ? "" : <button
            className={`p-2 m-2 border-2 bg-green-500 rounded-md`}
            onClick={() => handlePageChange(currentPage + 1)}

          >
            Next
          </button>
        }

      </div>

    </div>
  )
}

export default JobList
