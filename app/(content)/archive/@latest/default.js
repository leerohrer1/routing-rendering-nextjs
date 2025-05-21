import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list";

export default function LatestNewsPage() {
  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={getLatestNews()} />
    </>
  );
}
