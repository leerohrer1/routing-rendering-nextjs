import { getAvailableNewsYears } from "@/lib/news";
import Link from 'next/link';

export default async function ArchivePage() {
  const links = await getAvailableNewsYears();

  return (
    <>
      <header id="archive-header">Archive Page</header>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
