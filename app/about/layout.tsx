export default function AboutLayout({ children }: LayoutProps<"/">) {
    return (
        <div>
            <h1 className="text-center text-sm font-bold text-purple-500">About Fixed Data</h1>
            {children}
        </div>
    );
}