"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.15, -0.15],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#f3f2ef",
    maxSpeed: 0.025,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon) => {
  const customColors = {
    nextdotjs: "#ffffff",
    threedotjs: "#ffffff",
  };

  const bgHex = customColors[icon.slug] || "#f3f2ef"; // Default background color
  const fallbackHex = customColors[icon.slug] || "#6e6e73"; // Default fallback color
  const minContrastRatio = 1.2; // Minimum contrast ratio

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon)
    );
  }, [data]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
