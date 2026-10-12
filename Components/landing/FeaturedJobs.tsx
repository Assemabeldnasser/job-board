import Link from "next/link";
import { Button } from "../ui/button";
import { JobsData } from "@/data/JobsData";

export default function FeaturedJobs() {
  const featuredJobs = JobsData.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-4xl font-heading font-bold">
            FEATURED POSITIONS
          </h2>

          <p className="font-mono text-sm text-muted-foreground mt-2">
            HAND-PICKED BY OUR AI
          </p>
        </div>

        <Button variant="outline" asChild>
          <Link href="/jobs">VIEW ALL →</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {featuredJobs.map((job, i) => (
          <Link
            href={`/jobs/${job.id}`}
            key={job.id}
            className={`brutal-border p-6 md:p-8 group hover:bg-accent/5 transition-colors ${
              i % 2 !== 0 ? "md:border-l-0" : ""
            }`}
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <p className="font-mono text-xs text-muted-foreground">
                  {job.company}
                </p>

                <h3 className="font-heading text-xl font-bold mt-1 group-hover:text-accent transition-colors">
                  {job.title}
                </h3>
              </div>

              <span className="font-mono text-xs bg-accent text-accent-foreground px-3 py-1 shrink-0">
                {job.type}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-5 text-sm">
              <span className="text-muted-foreground">
                📍 {job.location}
              </span>

              <span className="font-mono font-bold">
                {job.salary}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              {job.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="border px-2 py-1 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <span className="font-mono text-xs text-muted-foreground">
                {job.posted}
              </span>

              <span className="font-mono text-sm font-bold group-hover:translate-x-1 transition-transform">
                VIEW DETAILS →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}