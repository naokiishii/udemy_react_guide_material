import { useState } from "react";

export default function SSR(/*props*/) {
  console.log('hello')
//  console.log(props)
  const [state, setState] = useState('bye');
  const val = 0;
  return <h3>{state} {val}</h3>
}

/*
export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
    props: { message: 'hello from props'}
  }
}
*/