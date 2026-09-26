"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function TryHackMeBadge() {
  const [src, setSrc] = useState("/images/tryhackme-badge.png");
  useEffect(() => {
    const test = new window.Image();
    test.onload = () =>
      setSrc("https://tryhackme-badges.s3.amazonaws.com/0b2.png");
    test.src = "https://tryhackme-badges.s3.amazonaws.com/0b2.png";
    return () => { test.onload = null; };
  }, []);
  return (
    <Image
      src={src}
      alt="TryHackMe badge for 0b2"
      width={329}
      height={88}
      unoptimized
    />
  );
}
