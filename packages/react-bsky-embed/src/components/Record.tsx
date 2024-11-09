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

export type RecordProps = {
  record: AppBskyEmbedRecord.ViewRecord;
};
/**
 * Renders the Record view which can be a quoted post.
 */
export function Record({ record }: RecordProps) {
  const postURL = getPostURLFromURI(record.uri, record.author.handle);
  const value: Record<string, string> = record.value;
  return (
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
            src={record.author.avatar}
            alt={`${record.author.displayName}'s profile picture`}
          />
        </div>
        <p className="line-clamp-1 text-sm">
          <span className="font-bold">{record.author.displayName}</span>
          <span className="text-textLight ml-1 dark:text-slate-400">
            {record.author.handle}
          </span>
        </p>
      </div>
      <p className="text-sm">{value.text}</p>

      {record.embeds?.map((embed) => {
        if (AppBskyEmbedRecordWithMedia.isView(embed)) {
          if (AppBskyEmbedImages.isView(embed.media)) {
            return <Images images={embed.media.images} />;
          }
          if (AppBskyEmbedVideo.isView(embed.media)) {
            return <Video video={embed.media} />;
          }
          if (AppBskyEmbedExternal.isView(embed.media)) {
            return <External external={embed.media.external} />;
          }
        }
        if (AppBskyEmbedImages.isView(embed))
          return <Images images={embed.images} />;
        if (AppBskyEmbedVideo.isView(embed)) return <Video video={embed} />;
        if (AppBskyEmbedExternal.isView(embed))
          return <External external={embed.external} />;
      })}
    </div>
  );
}
