import Link from "next/link";

export default function Home() {
  debugger
  return (
    <>
      <h1>Home</h1>
      <Link href={{pathname: "/07_router", query: {key: "value"}}} /*as="dummy_url"*/>
        <a>Link tag /07_router</a>
      </Link>
      <div>
        <a href="/07_router">a href /07_router</a>
      </div>
    </>);
}