import Link from "next/link";
type prob = {
    params : Promise<{AppId : string}>;
}
export default async function ReviewApp ({params}:prob){
    const {AppId} = await params;
    console.log(AppId);
    
    return(
        <div>
            <h1> Review Application </h1>
            <Link href="/dashboard/appplications" className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> Back to All Application </Link>
            <Link href={`dashboard/appplications/${AppId}`} className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> Back to Reviewed Application </Link>
        </div>
    );
}