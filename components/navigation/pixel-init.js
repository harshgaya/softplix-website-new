"use client";

import { useEffect } from "react";

export default function PixelInit() {
  useEffect(() => {
    import("react-facebook-pixel").then((ReactPixel) => {
      ReactPixel.default.init("962704139904226");
      ReactPixel.default.pageView();
    });
  }, []);

  return null;
}
