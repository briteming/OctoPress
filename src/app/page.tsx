import Blog from "@/components/blog/Blog";
import PopularBlogs from "@/components/homepage/PopularBlogs";
import Tags from "@/components/Tags";


export default function HomePage() {
  return (
    <div className=" text-black">
      <PopularBlogs/>
      <Blog/>

      <Tags/>




    </div>
  )
}

