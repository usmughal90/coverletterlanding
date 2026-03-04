"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const DownloadButton = ({ className = "" }) => {
  // Replace YOUR_APP_ID with your actual app IDs
  const iosStore =
    "https://apps.apple.com/us/app/cover-letter-ai-resume-maker/id6738951176";

  const [storeUrl, setStoreUrl] = useState(androidStore);

  // useEffect(() => {
  //   if (typeof window === "undefined") return;
  //   const ua = navigator.userAgent.toLowerCase();
  //   if (/iphone|ipad|ipod/.test(ua)) {
  //     setStoreUrl(iosStore);
  //   }
  // }, [androidStore, iosStore]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setStoreUrl(iosStore);
  }, []);

  return (
    <Link
      target="_blank"
      href={storeUrl}
      // className={`bg-white hover:bg-gray-100 text-[#0F172A] text-sm sm:text-lg py-3 px-6 sm:px-6 rounded-full shadow-2xl transform transition hover:scale-105 active:scale-95 text-center inline-block ${className}`}\
      className={`bg-white hover:bg-gray-100 
text-[#0F172A] text-sm sm:text-lg 
rounded-full shadow-2xl 
transform transition hover:scale-105 active:scale-95 
text-center inline-flex items-center justify-center
${className}`}
    >
      Download On App Store
    </Link>
  );
};

export default DownloadButton;
