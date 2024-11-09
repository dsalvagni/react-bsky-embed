import { AppBskyEmbedExternal } from "@atproto/api";

export type ExternalProps = {
  external: AppBskyEmbedExternal.ViewExternal;
};

/**
 * Renders external links, such as links and embeded gifs.
 */
export function External({ external }: ExternalProps) {
  const url = new URL(external.uri);
  return (
    <a
      href={external.uri}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className=" w-full rounded-lg overflow-hidden border flex flex-col items-stretch dark:border-slate-700"
    >
      {external.thumb && (
        <img src={external.thumb} className="aspect-[1.91/1] object-cover" />
      )}
      <div className="py-3 px-4 dark:text-gray-100">
        <p className="text-sm text-textLight line-clamp-1">{url.hostname}</p>
        <p className="font-semibold line-clamp-3">{external.title}</p>
        <p className="text-sm text-textLight line-clamp-2 mt-0.5">
          {external.description}
        </p>
      </div>
    </a>
  );
}
