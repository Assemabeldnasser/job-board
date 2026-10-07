
type prob  = {
    params: Promise<{id:string}>;
}; 
export default async function detailedJob({params}:prob) {
    const {id}= await params;
    return (
        <div className="border-2 rounded-lg text-center width-50">
            <h1 className="text-lg text-center font-bold">Job Title</h1>
            <h3>Job Position</h3>
            <p> Salary</p>
        </div>
    );
}