import Link from "next/link";

import jobList from "../../db/jobList.json";

const page = async ({ params }) => {
  const { id } = await params;

  const jobDetails = jobList.find((job) => job.id === id);

  return (
    <div className="w-[90%] p-2 flex flex-col font-bold mx-auto my-2">
      <h1 className="text-2xl my-2 text-pink-600"> {jobDetails.title}</h1>

      <span className="text-gray-600 my-2">
        Location : {jobDetails.location}
      </span>
      <span>Company : {jobDetails.companyName}</span>

      <div className="my-2 border-2 border-orange-400 p-2">
        <p className="text-green-800 my-3">About : {jobDetails.description}</p>
        <p>Job Type : {jobDetails.employmentType}</p>
        <p>Salary : {jobDetails.salary}</p>
        <p>Experience Required : {jobDetails.experience}</p>
      </div>
      <section className="border-2 border-black p-2 my-2">
        <h2>Requirements</h2>
        <ul className="italic text-purple-800 list-disc p-2 mx-2 ">
          {jobDetails.requirements.map((req) => {
            return <li key={req}>{req}</li>;
          })}
        </ul>
      </section>

      <button className="p-2 text-lg my-3  rounded-md bg-green-900 text-white hover:bg-green-700">
        Apply 👉
      </button>
      <Link
        href={"/"}
        className="p-2 text-center text-lg my-3  rounded-md bg-orange-900 text-white hover:bg-orange-700"
      >
        Back to Job List Page 👈
      </Link>
    </div>
  );
};

export default page;
