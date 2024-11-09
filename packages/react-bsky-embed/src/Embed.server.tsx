import { AppBskyFeedDefs } from "@atproto/api";
import { FailedToFetch, getPostThread, InvalidURLError } from "./lib/utils";
import i18n, { LocaleKey } from "./lib/i18n";
import { ErrorCard } from "./components/ErrorCard";
import { Post } from "./components/Post";

export type EmbedProps = {
  url: string;
  locale?: LocaleKey;
};

export default async function Embed({ url, locale = "enGB" }: EmbedProps) {
  const t = await i18n(locale);

  try {
    const response = await getPostThread(url);
    if (
      AppBskyFeedDefs.isBlockedAuthor(response) ||
      AppBskyFeedDefs.isBlockedPost(response)
    )
      return <ErrorCard>{t("errors.not-available")}</ErrorCard>;

    if (AppBskyFeedDefs.isThreadViewPost(response)) {
      return <Post threadPost={response} locale={locale} url={url} />;
    }
  } catch (e) {
    if (e instanceof InvalidURLError)
      return (
        <ErrorCard>
          <p>{t("errors.invalid-url")}</p>
          <code className="py-5 text-xs">{url}</code>
        </ErrorCard>
      );
    if (e instanceof FailedToFetch)
      return (
        <ErrorCard>
          <p>{t("errors.failed-to-fetch")}</p>
          <code className="py-5 text-xs">{url}</code>
        </ErrorCard>
      );
  }

  return null;
}
