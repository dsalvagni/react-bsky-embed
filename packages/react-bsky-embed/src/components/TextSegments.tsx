import { RichTextSegment } from "@atproto/api";
import { getHashtagURL, getProfileURL } from "../lib/utils";

export type TextSegmentsProps = {
  segments: RichTextSegment[];
};
/**
 * Conctact the RichText segments to render the rich text as html.
 */
export function TextSegments({ segments }: TextSegmentsProps) {
  return segments.map((segment, index) => {
    if (segment.isLink()) {
      return (
        <a
          key={index.toString()}
          href={segment.link?.uri}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-blue-500 hover:underline pointer-events-auto"
        >
          {segment.text}
        </a>
      );
    }

    if (segment.isMention()) {
      return (
        <a
          key={index.toString()}
          href={getProfileURL(segment.mention?.did || "")}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-blue-500 hover:underline pointer-events-auto"
        >
          {segment.text}
        </a>
      );
    }

    if (segment.isTag()) {
      return (
        <a
          key={index.toString()}
          href={getHashtagURL(segment.tag?.tag || "")}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-blue-500 hover:underline pointer-events-auto"
        >
          {segment.text}
        </a>
      );
    }

    return <>{segment.text}</>;
  });
}
