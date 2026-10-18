"use server"

import { createjob } from "@/services/jobs/jobs.services";

export async function testAction(formdata: FormData) {
    const Input1 = formdata.get("Input1");
    const Input2 = formdata.get("Input2");
    console.log("Test Action", Input1, Input2);
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
}