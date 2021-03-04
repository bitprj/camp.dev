import Navbar from "@components/Navbar"
import Hero from "@components/Hero"

function IndexPage({ data }) {
  console.log(data)
  return (
    <div>
      <Navbar />
      <Hero />
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