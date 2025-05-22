import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  const newsItem = await getNewsItem(params.slug);

  if (!newsItem) notFound();

  return (
    <>
    <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          ></img>
        </div>
      </dialog>
    </>
  );
}
