"use client";
import { useMemo } from "react";
import Image from "next/image";

import DefaultImage from "@/assets/default/default-image.png";

export default function BaseImage(props: ComponentsPropsNamespace.BaseImage) {
  const { width, height, alt, src = DefaultImage, ...restProps } = props;
  const priority = useMemo<boolean>(() => {
    if (props.priority) return props.priority;
    if (src.toString().endsWith("svg")) return true;
    return true;
  }, [props.priority, src]);
  return (
    <Image
      width={width}
      height={height}
      priority={priority}
      src={src}
      alt={alt}
      {...restProps}
    />
  );
}
