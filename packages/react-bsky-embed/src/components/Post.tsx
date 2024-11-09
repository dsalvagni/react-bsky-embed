import {
  AppBskyEmbedExternal,
  AppBskyEmbedImages,
  AppBskyEmbedRecord,
  AppBskyEmbedRecordWithMedia,
  AppBskyEmbedVideo,
  AppBskyFeedDefs,
  Facet,
  RichText,
} from "@atproto/api";
import i18n, { LocaleKey, locales } from "../lib/i18n";
import { getProfileURL } from "../lib/utils";
import { format } from "date-fns";
import { TextSegments } from "./TextSegments";
import { Images } from "./Images";
import { Video } from "./Video";
import { Record } from "./Record";
import { External } from "./External";
import { RecordWithMedia } from "./RecordWithMedia";

export type PostProps = {
  threadPost: AppBskyFeedDefs.ThreadViewPost;
  url: string;
  locale: LocaleKey;
  isEmbeddedContent?: boolean;
};

type PostRecord = {
  $type: string;
  createdAt: string;
  text: string;
  facets?: Facet[];
  langs?: string[];
  [k: string]: unknown;
};

/**
 * Main Post component which is the entry point to render the embed post.
 */
export async function Post({ threadPost, url, locale }: PostProps) {
  const t = await i18n(locale);

  const post = threadPost.post;
  const record = post.record as PostRecord;
  const richText = new RichText({ text: record.text, facets: record.facets });

  const segments = [...richText.segments()];

  const profileURL = getProfileURL(post.author.handle);

  const createdAt = format(record.createdAt, "PPpp", {
    locale: locales[locale],
  });

  return (
    <>
      <div className="cursor-pointer w-full bg-white hover:bg-neutral-50 relative transition-colors max-w-[600px] min-w-[300px] flex border rounded-xl dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-gray-100 dark:border-slate-700">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block absolute top-0 left-0 right-0 bottom-0 z-10"
        ></a>
        <div className="pointer-events-none relative flex-1 px-4 pt-3 pb-2.5 z-20 ">
          <div className="flex-1 flex-col flex gap-2" lang={record.langs?.[0]}>
            <div className="flex gap-2.5 items-center cursor-pointer">
              <a
                href={profileURL}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="cursor-pointer rounded-full"
              >
                <div className="w-10 h-10 overflow-hidden rounded-full bg-neutral-300 shrink-0">
                  <img
                    src={post.author.avatar}
                    alt={`${post.author.displayName}'s profile picture`}
                  />
                </div>
              </a>
              <div>
                <a
                  href={profileURL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className=" font-bold text-[17px] leading-5 line-clamp-1 hover:underline underline-offset-2 decoration-2"
                >
                  <p>{post.author.displayName}</p>
                </a>
                <a
                  href={profileURL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className=" text-[15px] text-textLight hover:underline line-clamp-1 dark:text-slate-400"
                >
                  <p>{post.author.handle}</p>
                </a>
              </div>
              <div className="flex-1"></div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className=" transition-transform hover:scale-110 shrink-0 self-start"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%20320%20286'%3e%3cpath%20fill='rgb(10,122,255)'%20d='M69.364%2019.146c36.687%2027.806%2076.147%2084.186%2090.636%20114.439%2014.489-30.253%2053.948-86.633%2090.636-114.439C277.107-.917%20320-16.44%20320%2032.957c0%209.865-5.603%2082.875-8.889%2094.729-11.423%2041.208-53.045%2051.719-90.071%2045.357%2064.719%2011.12%2081.182%2047.953%2045.627%2084.785-80%2082.874-106.667-44.333-106.667-44.333s-26.667%20127.207-106.667%2044.333c-35.555-36.832-19.092-73.665%2045.627-84.785-37.026%206.362-78.648-4.149-90.071-45.357C5.603%20115.832%200%2042.822%200%2032.957%200-16.44%2042.893-.917%2069.364%2019.147Z'/%3e%3c/svg%3e"
                  className="h-8"
                />
              </a>
            </div>
            <p className="min-[300px]:text-lg leading-6 break-word break-words whitespace-pre-wrap">
              <TextSegments segments={segments} />
            </p>

            {AppBskyEmbedImages.isView(post.embed) && (
              <Images images={post.embed.images} />
            )}

            {AppBskyEmbedVideo.isView(post.embed) && (
              <Video video={post.embed} />
            )}

            {AppBskyEmbedRecordWithMedia.isView(post.embed) && (
              <RecordWithMedia record={post.embed} />
            )}

            {AppBskyEmbedRecord.isViewRecord(post.embed?.record) && (
              <Record record={post.embed.record} />
            )}

            {AppBskyEmbedExternal.isView(post.embed) && (
              <External external={post.embed.external} />
            )}

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className=""
            >
              <time
                dateTime={record.createdAt}
                className="text-textLight mt-1 text-sm hover:underline dark:text-slate-400"
              >
                {createdAt}
              </time>
            </a>
            <div className="border-t w-full pt-2.5 flex items-center gap-5 text-sm cursor-pointer text-neutral-500 dark:border-t-slate-700 dark:text-slate-400">
              {typeof post.likeCount !== "undefined" && (
                <div className="flex items-center gap-2 cursor-pointer">
                  <img
                    src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23ec4899'%20d='M12.489%2021.372c8.528-4.78%2010.626-10.47%209.022-14.47-.779-1.941-2.414-3.333-4.342-3.763-1.697-.378-3.552.003-5.169%201.287-1.617-1.284-3.472-1.665-5.17-1.287-1.927.43-3.562%201.822-4.34%203.764-1.605%204%20.493%209.69%209.021%2014.47a1%201%200%200%200%20.978%200Z'/%3e%3c/svg%3e"
                    className="w-5 h-5"
                  />
                  <p className="font-bold mb-px">{post.likeCount}</p>
                </div>
              )}
              {typeof post.repostCount !== "undefined" && (
                <div className="flex items-center gap-2 cursor-pointer">
                  <img
                    src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%2320bc07'%20d='M17.957%202.293a1%201%200%201%200-1.414%201.414L17.836%205H6a3%203%200%200%200-3%203v3a1%201%200%201%200%202%200V8a1%201%200%200%201%201-1h11.836l-1.293%201.293a1%201%200%200%200%201.414%201.414l2.47-2.47a1.75%201.75%200%200%200%200-2.474l-2.47-2.47ZM20%2012a1%201%200%200%201%201%201v3a3%203%200%200%201-3%203H6.164l1.293%201.293a1%201%200%201%201-1.414%201.414l-2.47-2.47a1.75%201.75%200%200%201%200-2.474l2.47-2.47a1%201%200%200%201%201.414%201.414L6.164%2017H18a1%201%200%200%200%201-1v-3a1%201%200%200%201%201-1Z'/%3e%3c/svg%3e"
                    className="w-5 h-5"
                  />
                  <p className="font-bold mb-px">{post.repostCount}</p>
                </div>
              )}
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='rgb(10,122,255)'%20d='M19.002%203a3%203%200%200%201%203%203v10a3%203%200%200%201-3%203H12.28l-4.762%202.858A1%201%200%200%201%206.002%2021v-2h-1a3%203%200%200%201-3-3V6a3%203%200%200%201%203-3h14Z'/%3e%3c/svg%3e"
                  className="w-5 h-5"
                />
                <p className="font-bold mb-px">{t("reactions.reply")}</p>
              </div>
              <div className="flex-1"></div>
              <p className="cursor-pointer text-brand font-bold hover:underline hidden min-[450px]:inline">
                {t("reactions.read", { count: post.replyCount })}
              </p>
              <p className="cursor-pointer text-brand font-bold hover:underline min-[450px]:hidden">
                <span className="hidden min-[400px]:inline">
                  {t("footer.view-on-bluesky-450")}
                </span>
                <span className="min-[400px]:hidden">
                  {t("footer.view-on-bluesky-400")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
