"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageUrlsResponse = {
    imageUrls: string[];
  };

const PhotoPage = () => {

    const [imageUrls, setImageUrls] = useState<string[]>([]);

    useEffect(() => {
      fetch('/api/images')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch images');
          }
          return response.json();
        })
        .then((data: ImageUrlsResponse) => {
            const photos: string[] = data.imageUrls.filter(url => !url.endsWith(".DS_Store"));
            setImageUrls(photos)
    })
        .catch(error => console.error('Error fetching images:', error));
    }, [])

    return (
        <div className="w-screen h-4/5 overflow-scroll px-4">
            <div className="font-bold text-4xl text-left">
                Check out some photos I&apos;ve taken.
            </div>
            {/* <div className="flex items-center justify-center w-full h-auto bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div> */}
            <div className="grid grid-cols-3 col-span-2 my-10" style={{ gap: "12px", backgroundColor: "#f2e9e4", padding: "12px" }}>
                {
                    imageUrls.map((url, index) => (
                        <Image
                            src={url}
                            key={index}
                            alt={`${index}`}
                            width={0}
                            height={0}
                            style={{ width: '100%', height: 'auto', borderRadius: "8px" }}

                        />
                    ))
                }
            </div>
        </div>
    )

}

export default PhotoPage