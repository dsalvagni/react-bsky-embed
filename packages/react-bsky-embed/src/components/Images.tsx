import { AppBskyEmbedImages } from "@atproto/api";

export type ImagesProps = {
  images: AppBskyEmbedImages.ViewImage[];
};

/**
 * Renders up to four images using different layouts according to the total of images available.
 */
export function Images({ images }: ImagesProps) {
  const layoutMapper: Record<number, { wrapper: string; image: string }> = {
    1: {
      wrapper: "",
      image:
        "w-full rounded-lg overflow-hidden object-cover h-auto max-h-[1000px]",
    },
    2: {
      wrapper: "flex gap-1 rounded-lg overflow-hidden w-full aspect-[2/1]",
      image: "w-1/2 h-full object-cover rounded-sm",
    },
    3: {
      wrapper: "flex gap-1 rounded-lg overflow-hidden w-full aspect-[2/1]",
      image: "flex-[3] object-cover rounded-sm",
    },
    4: {
      wrapper: "grid grid-cols-2 gap-1 rounded-lg overflow-hidden",
      image: "aspect-square w-full object-cover rounded-sm",
    },
  };

  const limitedImages = images.slice(0, 4);

  return (
    <div className={layoutMapper[limitedImages.length].wrapper}>
      {limitedImages.map((image) => (
        <img
          src={image.thumb}
          alt={image.alt}
          className={layoutMapper[images.length].image}
        />
      ))}
    </div>
  );
}
