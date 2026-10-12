import HeroSection from "@/components/landing/HeroSection";
import FeaturedJobs from "@/components/landing/FeaturedJobs";

import Image from "next/image";
// import Counter from "@/Components/counter"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()
  // console.log(posts);

  return (
<>
<HeroSection/>
<FeaturedJobs/>
</>
    // <div className="flex min-h-screen items-center justify-center p-8 ">
    //   <div className="w-full max-w-xl">
    //     <Button variant="default" className="m-2"> View All </Button>
    //     <Button variant="destructive" className="brut-btn m-2"> View Brut </Button>
    //     <input type="text" placeholder="Enter your name" className="brut-input" />
    //   </div>
    // </div>

    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <h1 className="text-4xl font-bold"> Job Board </h1>
    //   <p className="text-lg"> AI Interview Production </p>
    //   <h1 className="text-4xl font-bold">Job Detials</h1>
    //   <Link className="bg-blue-500 border-2 rounded-lg cursor-pointer my-2 px-1 hover:bg-blue-600 border-blue-200 text-white" href="/jobs" replace> View Jobs</Link>

    //    <Counter/>
    //   <ul>
    //       {
    //         posts.map((posts:any)=>{
    //           return <li key={posts.id}> {posts.title} </li>
    //         })
    //       }

    //   </ul>
    //  </div>
  );
}
