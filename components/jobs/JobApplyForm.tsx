"use client";

import { useActionState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { TextArea } from "../ui/textarea";
import { CreateApplicationState, handleCreateApplication } from "@/actions/applications/application.action";
import { useParams } from "next/navigation";

export default function JobApplyForm() {
    const {id:jobId} = useParams<{id:string}>();
    const [state, formAction, isPending] = useActionState<CreateApplicationState, FormData>(handleCreateApplication, undefined);

    return (
        <form action={formAction} className="brutal-border lg:border-l-0 p-8">
            <h3 className="font-heading text-xl font-bold mb-6 border-b-3 border-foreground pb-4">
                APPLY NOW
            </h3>

            <div className="space-y-4">
                <div className="space-y-2">
                    <Label className="text-sm">FULL NAME</Label>
                    <Input type="hidden" name="jobId" value={jobId}/>
                    <Input placeholder="YOUR NAME" name="candidateName" error={state?.errors?.candidateName?.[0]} />
                </div>

                <div className="space-y-2">
                    <Label className="text-sm">EMAIL</Label>
                    <Input type="email" placeholder="YOUR@EMAIL.COM" name="candidateEmail" error={state?.errors?.candidateEmail?.[0]} />
                </div>

                <div className="space-y-2">
                    <Label className="text-sm">LINKEDIN</Label>
                    <Input placeholder="LINKEDIN.COM/IN/..." name="candidateLinkedin" error={state?.errors?.candidateLinkedin?.[0]} />
                </div>
{/* candidateResume */}
                <div>
                    <Label className="font-heading text-xs font-bold uppercase block mb-2">
                        RESUME
                    </Label>

                    <label className="brutal-border border-dashed border-3 p-8 text-center cursor-pointer hover:bg-accent block transition-colors">
                        <p className="font-mono text-sm font-bold">DROP FILE HERE</p>

                        <p className="font-mono text-xs text-muted-foreground mt-1">
                            PDF, DOC - MAX 5MB
                        </p>

                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                        />
                    </label>
                </div>

                <div>
                    <Label className="font-heading text-xs font-bold uppercase block mb-2">
                        COVER NOTE
                    </Label>

                    <TextArea
                        placeholder="WHY THIS ROLE?"
                        rows={5}
                        name="candidateCoverLetter" error={state?.errors?.candidateCoverLetter?.[0]}
                        className="w-full brutal-border bg-background px-4 py-3 font-mono text-sm focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-cobalt resize-y"
                    />
                </div>

                <Button variant="default" className="w-full mt-4">
                    SUBMIT APPLICATION →
                </Button>
            </div>
        </form>
    );
}
