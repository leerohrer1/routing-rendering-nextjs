import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  return <NewsList news={getNewsForYear(params.slug)} />;
}
