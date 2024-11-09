import {
  AppBskyEmbedExternal,
  AppBskyEmbedImages,
  AppBskyEmbedRecord,
  AppBskyEmbedRecordWithMedia,
  AppBskyEmbedVideo,
} from "@atproto/api";
import { getPostURLFromURI } from "../lib/utils";
import { Images } from "./Images";
import { External } from "./External";
import { Video } from "./Video";
import { Record } from "./Record";

export type RecordWithMediaProps = {
  record: AppBskyEmbedRecordWithMedia.View;
};
/**
 * Renders a Record with could be a quoted post with media embeded in the quote, for example.
 */
export function RecordWithMedia({ record }: RecordWithMediaProps) {
  if (!AppBskyEmbedRecord.isViewRecord(record.record.record)) return;

  const data = record.record.record;
  const postURL = getPostURLFromURI(data.uri, data.author.handle);
  const value: Record<string, string> = data.value;
  return (
    <>
      {AppBskyEmbedImages.isView(record.media) && (
        <Images images={record.media.images} />
      )}
      {AppBskyEmbedVideo.isView(record.media) && <Video video={record.media} />}
      {AppBskyEmbedExternal.isView(record.media) && (
        <External external={record.media.external} />
      )}
      <div className="relative pointer-events-none transition-colors hover:bg-neutral-100 border rounded-lg p-2 gap-1.5 w-full flex flex-col dark:hover:bg-gray-800 dark:text-gray-100 dark:border-slate-700">
        <a
          href={postURL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="pointer-events-auto block absolute top-0 left-0 right-0 bottom-0 z-10"
        ></a>
        <div className="flex gap-1.5 items-center">
          <div className="w-4 h-4 overflow-hidden rounded-full bg-neutral-300 shrink-0">
            <img
              src={data.author.avatar}
              alt={`${data.author.displayName}'s profile picture`}
            />
          </div>
          <p className="line-clamp-1 text-sm">
            <span className="font-bold">{data.author.displayName}</span>
            <span className="text-textLight ml-1 dark:text-slate-400">
              {data.author.handle}
            </span>
          </p>
        </div>
        <p className="text-sm">{value.text}</p>

        {AppBskyEmbedRecord.isViewRecord(data.record) && (
          <Record record={data.record} />
        )}
      </div>
    </>
  );
}
