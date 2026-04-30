"use client";

import { useEffect } from "react";

export default function PixelInit() {
  useEffect(() => {
    import("react-facebook-pixel").then((ReactPixel) => {
      const pixel = ReactPixel.default;

      pixel.init("962704139904226");
      pixel.pageView();
    });
  }, []);

  return null;
}
