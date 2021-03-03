import Image from "next/image";
import Button from "@components/utils/button.js";
import Box from "@components/utils/box"
import About from "@components/utils/about"
import Layout from "@components/layout"
import Window from "@components/window"
import SideBarSection from "@components/utils/sidebarsection"

 function IndexPage({ data }) {
   console.log(data)
  return (
    //Use flex-1 to allow a flex item to grow and shrink as needed, ignoring its initial size:
    //Use items-stretch to stretch items to fill the container's cross axis:
    //Use flex-col to position flex items vertically:
    <div>
    <div className="flex-1 flex-col items-center justify-center space-y-12 max-w-4xl mr-3">
      <About />
      <div class="grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2">
        {/* <h1>{data.menuoption}</h1> */}
        <SideBarSection data={data} />
        <Box />
      </div>
      <Window />
    </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/menu`)
  const data = await res.json()
  
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  }
}

export default IndexPage;