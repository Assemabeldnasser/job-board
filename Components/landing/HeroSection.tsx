import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function HeroSection() {
    return (
        <>
            <section className="grid border-b-[3px] border-foreground">
                <div className="p-5 md:p-10">
                    <p className="label-mono mb-4 inline-block bg-primary px-2 py-1 text-primary-foreground">● 48,291 OPEN ROLES — UPDATED HOURLY</p>
                    <h1 className="font-display text-[19vw] leading-[0.82] md:text-[11vw] lg:text-[9.5vw]">
                        Find work.<br /><span className="px-1">Break</span> rules<span className="text-signal">.</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-lg font-bold md:text-2xl">Thousands of jobs from companies building what comes next.</p>
                </div>

                <aside aria-label="How it works" className="grid border-foreground border-t-[3px] sm:grid-cols-3">
                    {[["01", "FIND", "bg-accent"], ["02", "APPLY", "bg-card"], ["03", "GET HIRED", "bg-primary text-primary-foreground"]].map(([n, w, c]) => (
                        <div key={n} className={`${c} flex flex-col justify-between border-foreground p-5 [&:not(:last-child)]:border-b-[3px] sm:max-lg:[&:not(:last-child)]:border-r-[3px] sm:max-lg:border-b-0`}>
                            <span className="label-mono">STEP</span>
                            <span className="font-display text-6xl md:text-7xl">{n} /<br />{w}</span>
                        </div>
                    ))}
                </aside>
            </section>
        </>
    );
}