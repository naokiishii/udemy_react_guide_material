// Static Site Generation
export default function IndexPage({ message }) {
  return <h3>SG: {message}</h3>;
}

export async function getStaticProps() {
  return {
    props: { message: 'From Static Props'}
  }
}