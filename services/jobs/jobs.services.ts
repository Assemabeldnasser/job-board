import { Job } from "@/types/Job";
import { CreateJobInput, createJobSchema } from "./jobs.validation";
import {z} from "zod"

export type ServiceResult<T> =
    | { success: true; data?: T }
    | { success: false; errors?: Record<string, string[]> };

export async function createjob(input: CreateJobInput):Promise<ServiceResult<Job>> {
    const validated = createJobSchema.safeParse(input);
    // console.log("Input = ",input);

    if (!validated.success) {
        console.error(validated.error.message);
        return{success:false,errors: z.flattenError(validated.error).fieldErrors};
    }
    console.log("Job Created Service", validated);
    // TODO Database will solve this Type
    return {success:true,data:validated.data as Job};
}