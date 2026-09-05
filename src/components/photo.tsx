"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/** Cream placeholder so photos fade in instead of flashing empty. */
const CREAM_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGdP//Z";

type PhotoProps = Omit<ImageProps, "placeholder" | "blurDataURL"> & {
  fade?: boolean;
};

export function Photo({
  className = "",
  fade = true,
  priority,
  onLoad,
  alt,
  quality = 75,
  ...props
}: PhotoProps) {
  const [ready, setReady] = useState(Boolean(priority));

  return (
    <Image
      {...props}
      alt={alt}
      priority={priority}
      quality={quality}
      placeholder="blur"
      blurDataURL={CREAM_BLUR}
      className={`${className} ${
        fade ? `transition-opacity duration-500 ease-out ${ready ? "opacity-100" : "opacity-0"}` : ""
      }`.trim()}
      onLoad={(event) => {
        setReady(true);
        onLoad?.(event);
      }}
    />
  );
}
