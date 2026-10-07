import Link from "next/link";
export default async function viewApplications (){
    return(
        <div>
            <h1> View Applications </h1>
            <Link href={"/dashboard/applications/1"} className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> Go to App [1] </Link>
            <Link href={"/dashboard/applications/2"} className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> Go to App [2] </Link>
        </div>
    );
}