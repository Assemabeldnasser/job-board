import Link from "next/link";
export default function AdminDashboard (){
    return(
        <div>
            <h1> Admin Dashboard </h1>
            <Link href="/dashboard/jobs" className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> View Jobs </Link>
            <Link href="/dashboard/applications" className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> View Applications </Link>

        </div>
    );
}