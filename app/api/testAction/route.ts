import { createjob } from "@/services/jobs/jobs.services";

export async function POST(request: Request){
    const data = await request.json();
    const Input1 = data.Input1;
    const Input2 = data.Input2;
console.log("POST",Input1,Input2);
 const job = await createjob({
        // id: "1",
        title: Input1 as string,
        company: Input2 as string,
        location: "",
        type: "",
        salary: "",
        tags: [],
        // posted: "",
        description: "",
        requirements: [],
        // applicants: 0,
        posted:"",
    })
return Response.json({message: "Test Action Successfully"})

}

export async function GET (request:Request){
            return Response.json({message:"Hello"})       
}