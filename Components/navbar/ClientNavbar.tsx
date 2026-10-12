"use client"
import Link from "next/link";
import { Button } from "../ui/button";

export default function ClinetNavbar() {
    const nav = [
        { to: "/jobs", label: "JOBS" },
        { to: "/companies", label: "COMPANIES" },
        { to: "/categories", label: "CATEGORIES" },
        { to: "/salaries", label: "SALARIES" },
        { to: "/career", label: "CAREER" },
    ] as const;

    return (
        <header className="sticky top-0 z-40 border-b-[3px] border-foreground bg-background">
            <div className="flex items-stretch">
                <Link
                    href="/"
                    className="group font-display flex items-center border-r-[3px] border-foreground px-4 py-3 text-2xl transition-colors hover:bg-accent md:text-3xl"
                >
                    WORK{" "}
                    <span className="font-bold text-accent transition-colors group-hover:text-signal">
    //
                    </span>{" "}
                    NOW
                </Link>
                <nav aria-label="Main" className="hidden flex-1 lg:flex">
                    {nav.map((n) => (
                        <Link key={n.to} href={n.to} className="label-mono flex items-center border-r-[3px] border-foreground px-5 transition-colors hover:bg-primary hover:text-primary-foreground">{n.label}</Link>
                    ))}
                </nav>
                <div className="ml-auto hidden items-center gap-3 px-4 lg:flex">
                    <Button>POST A JOB</Button>
                    <Button>SIGN IN</Button>
                </div>

            </div>

        </header>
    );
}