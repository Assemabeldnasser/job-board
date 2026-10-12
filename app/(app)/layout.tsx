import ClinetNavbar from "@/components/navbar/ClientNavbar";
import Footer from "@/components/navbar/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <div className="min-h-full bg-background">
            <ClinetNavbar />
            {children}
            <Footer />
        </div>
    );
}