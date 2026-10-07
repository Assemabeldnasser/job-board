import Link from "next/link";
type prob = {
    params : Promise<{JobId : string}>;
}
export default async function CustomiseJob ({params}:prob){
    const {JobId} = await params;
    console.log(JobId);
    
    return(
        <div>
            <h1> Job Detials </h1>
            <Link href="/dashboard/jobs" className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> Return to all Jobs </Link>
            <Link href={`/dashboard/jobs/${JobId}/edit`} className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> Edit Job </Link>

        </div>
    );
}