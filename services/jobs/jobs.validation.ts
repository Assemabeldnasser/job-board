import {z} from "zod"

export const createJobSchema = z.object({
title: z.string().trim().min(1, "Title is required"),
company: z.string().trim().min(1, "Company is required"),
location: z.string().trim().min(1, "Location is required"),
// type: z.enum(["FULL-TIME","PART-TIME","CONTRACT","FREELANCE",]),
type: z.string().trim().min(1, "Type is required"),
salary: z.string().trim().min(1, "Salary is required"),
tags: z.array(z.string()).min(1, "Tags are required").optional(),
description: z.string().trim().min(1, "Description is required"),
requirements:  z.array(z.string().min(1, "Requirements are required")),
posted: z.iso.datetime(),
});

export type CreateJobInput = z.infer<typeof createJobSchema>;