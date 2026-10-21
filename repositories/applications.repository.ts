import { ApplicationsData } from "@/data/ApplicationsData";
import { dbConnect } from "@/lib/db";
import { ApplicationModel } from "@/lib/models/application.model";
import { ApplyToJobInput } from "@/services/applications/applications.validation";
import { Application } from "@/types/Application";
import { Types } from "mongoose";


type ApplicationLean = Omit<Application,"id" |"appliedDate"> & {_id:{toString():string};__v?:number;appliedDate:string |Date};

function toApplication (doc:ApplicationLean):Application{
    const {_id,__v,candidateId,jobId,appliedDate,...rest}=doc;
    return {...rest,id:_id.toString(),
        candidateId:candidateId.toString(),
        jobId:jobId.toString(),
        appliedDate: appliedDate instanceof Date ? appliedDate.toISOString().split("T")[0] 
        : String(appliedDate)};
}

export async function findAllApplications ():Promise<Application[]>{
    await dbConnect();
    const applications=await ApplicationModel.find({}).lean<ApplicationLean[]>();
    return applications.map(toApplication);
}

export async function findApplicationById(id:string):Promise<Application | null>{
    await dbConnect();
    const application = await ApplicationModel.findById(id).lean<ApplicationLean>();
    return application? toApplication(application):null;
}

export async function saveNewApplication(application:Omit<Application,"id"|"appliedDate">):Promise<Application>{
    await dbConnect();
    const newApplication = await ApplicationModel.create({...application,candidateId:new Types.ObjectId(application.candidateId)});
    return newApplication;
}

export async function findApplicationByCandidateId(candidateId:string):Promise<Application[]>{
    await dbConnect();
    const applications = await ApplicationModel.find({candidateId}).lean<ApplicationLean[]>();
    return applications.map(toApplication);
}

export async function findApplicationByJobId(jobId:string):Promise<Application[]>{
    await dbConnect();
    const applications = await ApplicationModel.find({jobId}).lean<ApplicationLean[]>();
    return applications.map(toApplication);
}

export async function findApplicationByStatus(status:string):Promise<Application[]>{
    await dbConnect();
    const applications = await ApplicationModel.find({status}).lean<ApplicationLean[]>();
    return applications.map(toApplication);

}

export async function seedTestApplications ():Promise<Application[]>{
    await dbConnect();
    const applications = await ApplicationModel.insertMany(ApplicationsData);
    return applications.map((application:ApplicationLean)=>toApplication(application));
}