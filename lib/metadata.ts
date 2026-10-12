import type { Metadata } from "next";
import type { StaticImageData } from "next/image";

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle = false,
}: {
  title: string;
  /** Use the title as-is instead of appending " | META". */
  absoluteTitle?: boolean;
  description: string;
  path: string;
  image?: StaticImageData;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const images = image
    ? [{ url: image.src, width: image.width, height: image.height }]
    : [{ url: "/og-image.jpg", width: 1200, height: 630 }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      images,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: images.map((i) => i.url) },
  };
}
