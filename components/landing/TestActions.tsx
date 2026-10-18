'use client'

import { Button } from "../ui/button";
import { testAction } from "@/actions/testAction";
import { Input } from "../ui/input";

export default function TestAction() {
    // const handleTestAction = async () => {
    //     await testAction("Assem", 31)
    // };
    return (
        <div>
            <h1> Test Action</h1>
            <form action={testAction} className=" flex flex-col py-3">
                <Input type="text" name="Input1" placeholder="Name"></Input>
                <Input type="number" name="Input2" placeholder="Age"></Input>
                <Button type="submit"> Test Action </Button>
            </form>
        </div>
    );
} 