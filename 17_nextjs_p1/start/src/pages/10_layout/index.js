import Link from "next/link";

export default function Page() {
  return (
    <ul>
      <li>
        <Link href="/10_layout/layout1"><a>Layout 1</a></Link>
      </li>
      <li>
        <Link href="/10_layout/layout2"><a>Layout 2</a></Link>
      </li>
    </ul>
  );
}