import Header from "./components/Header";
import { JobsProvider } from "./context/jobsContext";
import "./globals.css";

export const metadata = {
  title: "Jobly | Find Jobs",
  description: "All the jobs in different profiles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body>
        <Header />
        <JobsProvider>{children}</JobsProvider>
      </body>
    </html>
  );
}
