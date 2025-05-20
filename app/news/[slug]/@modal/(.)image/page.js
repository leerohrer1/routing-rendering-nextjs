import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function InterceptedImagePage({ params }) {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.slug);

  if (!newsItem) notFound();

  return (
    <>
      <div className="modal-backdrop" />
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>
          </div>
        </dialog>
    </>
  );
}
