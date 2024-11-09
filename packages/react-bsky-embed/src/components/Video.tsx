import { AppBskyEmbedVideo } from "@atproto/api";

export type VideoProps = {
  video: AppBskyEmbedVideo.View;
};
/**
 * Renders the embed video as a thumb only.
 */
export function Video({ video }: VideoProps) {
  return (
    <div
      className="w-full overflow-hidden rounded-lg aspect-square relative"
      style={{ aspectRatio: "1.3 / 1" }}
    >
      <img
        src={video.thumbnail}
        alt={video.alt}
        className="object-cover size-full"
      />
      <div className="cursor-pointer size-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 flex items-center justify-center">
        <img
          src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23fff'%20d='M9.576%202.534C7.578%201.299%205%202.737%205%205.086v13.828c0%202.35%202.578%203.787%204.576%202.552l11.194-6.914c1.899-1.172%201.899-3.932%200-5.104L9.576%202.534Z'/%3e%3c/svg%3e"
          className="object-cover size-3/5"
        />
      </div>
    </div>
  );
}
