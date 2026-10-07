import Link from "next/link";
export default function NewJob (){
    return(
        <div>
            <h1> Add New Job </h1>
            <Link href="/dashboard/jobs" className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> Back to Jobs </Link>
        </div>
    );
}