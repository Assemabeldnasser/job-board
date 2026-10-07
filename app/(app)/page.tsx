import Image from "next/image";
// import Counter from "@/Components/counter"
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()
  // console.log(posts);
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold"> Job Board </h1>
      <p className="text-lg"> AI Interview Production </p>
      <h1 className="text-4xl font-bold">Job Detials</h1>
      <Link className="bg-blue-500 border-2 rounded-lg cursor-pointer my-2 px-1 hover:bg-blue-600 border-blue-200 text-white" href="/jobs" replace> View Jobs</Link>

      {/* <Counter/>
      <ul>
          {
            posts.map((posts:any)=>{
              return <li key={posts.id}> {posts.title} </li>
            })
          }
       
      </ul> */}
    </div>
  );
}
