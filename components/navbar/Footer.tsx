"use client"
import Link from "next/link";

export default function Footer() {
    return (
  <footer className="mt-16 border-t-[3px] border-foreground bg-primary text-primary-foreground max-md:pb-20">
      <div className="grid gap-8 p-6 md:grid-cols-[2fr_1fr_1fr_1fr] md:p-10">
        <div>
          <div className="font-display text-6xl md:text-8xl">WORK<span className="text-accent">//</span>NOW</div>
          <p className="label-mono mt-4 text-primary-foreground/70">INDEPENDENT JOB BOARD. EST. {new Date().getFullYear()}.
</p>
        </div>
        {[
          ["CANDIDATES", [["/jobs", "Search jobs"]]],
          ["EMPLOYERS", [["/post-job", "Post a job"]]],
          ["BROWSE", [["/categories", "Categories"], ["/companies", "Companies"]]],
        ].map(([h, links]) => (
          <div key={h as string}>
            <div className="label-mono mb-3 text-accent">{h as string}</div>
            <ul className="space-y-2">
              {(links as string[][]).map(([to, l]) => (
                <li key={to}><Link href={to} className="font-bold uppercase hover:bg-accent hover:text-accent-foreground">{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="label-mono border-t-2 border-primary-foreground/30 px-6 py-3 md:px-10">© {new Date().getFullYear()} WORK//NOW — NO RECRUITER SPAM. EVER.</div>
    </footer>
    );
}