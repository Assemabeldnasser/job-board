import AdminSlideNav from "@/components/navbar/AdminSlideNav";

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <div className="flex min-h-screen w-full bg-background">
            <AdminSlideNav />

            <main className="min-w-0 flex-1 overflow-auto p-8">
                {children}
            </main>
        </div>
    );
}