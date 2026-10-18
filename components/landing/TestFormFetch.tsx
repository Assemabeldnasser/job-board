"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { createjob } from "@/services/jobs/jobs.services";
import { testAction } from "@/actions/testAction";

export default function TestFetch (){
const [Input1,setInput1]=useState("");
const [Input2,setInput2]=useState(0);

const handleTestFetch = async (e: React.MouseEvent<HTMLButtonElement>) => {
e.preventDefault();
const response = await fetch("/api/testAction",{
    method:"POST",
    body: JSON.stringify({Input1,Input2})
})
if (response.ok)
    console.log("Test OK");
else
    console.log("Test Failed");
}

return(
    <>
    <form>
        <Input type="text" name="Input1" value={Input1} onChange={(e)=> setInput1(e.target.value)} placeholder="Name" />
        <Input type="number" name="Input2" value={Input2} onChange={(e)=> setInput2(Number(e.target.value))} placeholder="Age" />
        <Button onClick={handleTestFetch}> Route </Button>
    </form>

    <form action={testAction}>
        <Input type="text" name="Input1" placeholder="Name" />
        <Input type="number" name="Input2" placeholder="Age" />
        <Button type="submit"> Job </Button>
    </form>
    </>
);

}