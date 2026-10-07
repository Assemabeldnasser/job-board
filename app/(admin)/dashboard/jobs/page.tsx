import Link from "next/link";
export default function JobManagement (){
    return(
        <div>
            <h1> Job Management Dashboard </h1>
            <Link href="/dashboard/jobs/new" className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> Add New Job </Link>
            <Link href="/dashboard/jobs/1" className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> Job 1 </Link>
            <Link href="/dashboard/jobs/2" className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> Job 2 </Link>

        </div>
    );
}