import { CandidatesData } from "@/data/CandidatesData";
import { dbConnect } from "@/lib/db";
import { Candidate } from "@/types/Candidate";
import { ServiceResult } from "@/types/ServiceResult";

export async function getCandidates():Promise<ServiceResult<Candidate[]>>{
    await dbConnect();
    // TODO : DB to Adjust Applications
return {success:true, data:CandidatesData}
}