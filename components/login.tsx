"use client"
import { useRouter } from "next/navigation";

export default function Login (){

    const router = useRouter();
    const handleLogin = () =>{
        console.log("Login ....");
        router.replace("/");
}
        return (
            <button onClick={handleLogin}> Sign in </button>
        );
}