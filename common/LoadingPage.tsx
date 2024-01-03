"use client";

import Image from "next/image";
import { Spinner } from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function LoadingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <section className="loading-page h-screen flex justify-center items-center overflow-hidden fixed w-full z-50 bg-primary">
          <div className="container mx-auto flex items-center justify-center gap-4 flex-col">
            <Image
              src="/maskable_icon.png"
              alt="logo"
              aria-label="logo"
              className="mb-8 rounded-full"
              width={150}
              height={150}
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
            <Spinner color="default" />
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
