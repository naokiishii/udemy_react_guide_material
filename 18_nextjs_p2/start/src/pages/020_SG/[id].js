import { useRouter } from "next/router";

export default function Page({ id }) {
  const router = useRouter();
  if( router.isFallback ) {
    return <h3>Loading...</h3>
  }
  return <h3>This page is {id}.</h3>
}

export async function getStaticPaths() {
  return {
    paths: [
      { params:
        {id: "1"}
      },
      { params:
        {id: "2"}
      }
    ],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  console.log(params)
  return {
    props: {
      id: params.id
    }
  }
}