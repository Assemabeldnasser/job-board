import HeroSection from "@/components/landing/HeroSection";
import FeaturedJobs from "@/components/landing/FeaturedJobs";
import TestAction from "@/components/landing/TestActions";

import Image from "next/image";
// import Counter from "@/Components/counter"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { testAction } from "@/actions/testAction";
import TestFetch from "@/components/landing/TestFormFetch";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()
  // console.log(posts);
const test2 = async(formdata:FormData) => {
  "use server"
  const Inp1 = formdata.get("Inp1");
  const Inp2 = formdata.get("Inp2");
console.log("Test 2",Inp1,Inp2);

}
  return (
<>
<HeroSection/>
<FeaturedJobs/>
<TestAction/>
<form action={test2}>
  <Input type="text" name="Inp1" placeholder="Name"></Input>
  <Input type="number" name="Inp2" placeholder="Age"></Input>
  <Button type="submit"> Test 2 </Button>
</form>
<TestFetch/>
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
