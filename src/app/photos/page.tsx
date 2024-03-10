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
            const photos: string[] = []
            data.imageUrls.forEach((url) => {
                if (!url.endsWith(".DS_Store")) {
                    photos.push(url)
                }
            })
            setImageUrls(photos)
    })
        .catch(error => console.error('Error fetching images:', error));
    }, [])

    return (
        <div className="w-screen h-4/5 overflow-scroll">
            <div className="font-bold text-6xl text-center">
                Check out some photos I&apos;ve taken.
            </div>
            <div className="grid grid-cols-3 col-span-2 my-10">
                {
                    imageUrls.map((url, index) => (
                        <Image
                            src={url}
                            key={index}
                            alt={`${index}`}
                            width={0}
                            height={0}
                            style={{ width: '100%', height: 'auto' }}

                        />
                    ))
                }
            </div>
        </div>
    )

}

export default PhotoPage