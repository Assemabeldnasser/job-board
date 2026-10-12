"use client";
import { Briefcase, Users, LayoutGrid, FileText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const adminLinks = [
  { to: "/dashboard", label: "OVERVIEW", icon: LayoutGrid },
  { to: "/dashboard/jobs", label: "JOB POSTS", icon: Briefcase },
  { to: "/dashboard/applications", label: "APPLICATIONS", icon: FileText },
  { to: "/dashboard/users", label: "USERS", icon: Users },
];

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-foreground text-background brutal-border border-t-0 border-l-0 border-b-0 flex-shrink-0">
      <div className="p-6 border-b-3 border-muted-foreground">
        <Link href="/" className="font-display text-2xl md:text-3xl flex items-center border-r-[3px] border-foreground">
          WORK<span className="text-accent">//</span>NOW
        </Link>
        <p className="font-mono text-xs text-muted-foreground mt-1">
          ADMIN PANEL
        </p>
      </div>
      <nav className="py-4">
        {adminLinks.map((link) => {
          const isActive = pathname === link.to;
          return (
            <Link
              key={link.to}
              href={link.to}
              className={`flex items-center gap-3 px-6 py-4 font-heading text-sm font-bold transition-none border-l-4 ${isActive
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-transparent hover:border-accent hover:bg-accent/5"
                }`}
            >
              <link.icon size={18} />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;