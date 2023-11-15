import { useRouter } from "next/router";

export default function Setting({ query }) {
  const router = useRouter();
  const clickHandler = () => {
    // router.push('/', '/dummy-url')
    router.replace('/', '/dummy-url')
  }
  console.log(router);
  return (
    <>
      <h1>
        [name]/setting.js {query.name} - {router.query.name}
      </h1>
      <button onClick={clickHandler}>transfer screen</button>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  console.log(query);
  return {
    props: { query },
  };
}
