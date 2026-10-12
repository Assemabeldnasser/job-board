"use client"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Probs = {
    title: string,
    subtitle: string,
    btnLabel: string,
    navigateLink: string,
    variant?: "default" | "destructive" | "outline" | "ghost" | "link",
}

export default function AdminPageHeader({ title, subtitle, btnLabel, navigateLink, variant = "default" }: Probs) {
    const navigator = useRouter();
    const onBtnPress = () => {
        navigator.push(navigateLink);
    }
    return (
        <div className="flex w-full items-center">
            <div>
                <h1 className="text-4xl font-mono font-heading font-bold">
                    {title}
                </h1>
                <p className="mt-1 font-mono text-sm text-muted-foreground">
                    {subtitle}
                </p>
            </div>

            <Button
                className="ml-auto shrink-0"
                onClick={onBtnPress}
                variant={variant}
            >
                {btnLabel}
            </Button>
        </div>
    );
}