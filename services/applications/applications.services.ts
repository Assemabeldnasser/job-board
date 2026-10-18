import { ApplicationsData } from "@/data/ApplicationsData";
import { Application } from "@/types/Application";
import { ServiceResult } from "@/types/ServiceResult";

export async function getApplications():Promise<ServiceResult<Application[]>>{
    // TODO : DB to Adjust Applications
return {success:true, data:ApplicationsData}
}