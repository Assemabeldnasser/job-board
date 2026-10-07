import Link from "next/link";

export default function job() {
    return (
        <div className="border-2 rounded-lg text-center width-50">
            <h1 className="text-lg text-center font-bold">Job Detials</h1>
            <h3>Front End</h3>
            <p> Looking for Engineer</p>
            <Link className="bg-blue-500 border-2 rounded-lg cursor-pointer my-2 px-1 hover:bg-blue-600 border-blue-200 text-white" href="/jobs/1" replace> Apply Now</Link>
        </div>
    );
}