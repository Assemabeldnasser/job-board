import Link from "next/link";
type prob = {
    params : Promise<{AppId : string}>;
}
export default async function CustomiseJob ({params}:prob){
    const {AppId} = await params;
    console.log(AppId);
    
    return(
        <div>
            <h1> Application View </h1>
            <Link href={`/dashboard/applications/${AppId}/review`} className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400"> Review Application </Link>

        </div>
    );
}