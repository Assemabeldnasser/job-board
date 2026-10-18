import { CandidatesData } from "@/data/CandidatesData";
import { Candidate } from "@/types/Candidate";
import { ServiceResult } from "@/types/ServiceResult";

export async function getCandidates():Promise<ServiceResult<Candidate[]>>{
    // TODO : DB to Adjust Applications
return {success:true, data:CandidatesData}
}