import JobList from "./components/JobList";
import SearchAndFilter from "./components/SearchAndFilter";


export default function Home() {
  return (
    <main>
    <SearchAndFilter/>
    <JobList/>
    </main>
  );
}
