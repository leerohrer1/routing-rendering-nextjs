import Link from "next/link";

export default function NewsPage() {
    return (
    <>
    <h1>News Page</h1>
    <ul>
            <li>
              <Link href="/news/1">First</Link>
            </li>
            <li>
              <Link href="/news/2">Second</Link>
            </li>
             <li>
              <Link href="/news/3">Third</Link>
            </li>
          </ul>
    </>
    )
}