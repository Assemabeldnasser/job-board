import { Job } from "@/types/Job";
import { CreateJobInput, createJobSchema } from "./jobs.validation";
import {z} from "zod"
import { ServiceResult } from "@/types/ServiceResult";
import { findAllJobs, findJobById, seedTestJobs, saveNewJob } from "@/repositories/jobs.respository";

export async function createjob(input: CreateJobInput):Promise<ServiceResult<Job>> {
    const validated = createJobSchema.safeParse(input);
    // console.log("Input = ",input);

    if (!validated.success) {
        console.error(validated.error.message);
        return{success:false,errors: z.flattenError(validated.error).fieldErrors};
    }
    // console.log("Job Created Service", validated);
    // TODO Database will solve this Type
    
    const newJob = await saveNewJob(validated.data);
    return {success:true,data:newJob};
}

export async function getJobs():Promise<ServiceResult<Job[]>> {
    const jobs = await findAllJobs();
    if(!jobs)
        return {success:false, errors: { jobs : ["Jobs not Found"]}}
    return{success:true,data:jobs}
}

export async function getJob(id:string):Promise<ServiceResult<Job>> {
    // await dbConnect();
    // const Job = JobsData.find((job)=> job.id === id)
    // const job = await JobModel.findById(new mongoose.Types.ObjectId(id));
    const job = await findJobById(id);
    if(!job)
        return{success:false,errors:{id:["Job not found"]}}
    return{success:true, data:job}
}

export async function seedJobs():Promise<ServiceResult<Job[]>>{
const jobs = await seedTestJobs();
// if(!jobs)
//     return{success:false,errors:{jobs:["Jobs not found"]}}
return {success:true, data:jobs};
}
