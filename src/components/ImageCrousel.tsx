'use client';
import { ImageCarouselData } from '@/utils/types';
import { CldImage, CldVideoPlayer } from 'next-cloudinary';
import React from 'react';
import NextVideo from 'next-video';

function ImageCarousel({ data }: { data: ImageCarouselData }) {
  return (
    <div>
      <div className="carousel w-full h-[82vh]">
        <div id="item1" className="carousel-item w-full ">
          <CldImage
            className="object-cover"
            sizes="100vw"
            width="900"
            height="600"
            src={data.image}
            alt="image error"
          />
        </div>
        <div id="item2" className="carousel-item w-[690px]">
          <NextVideo src={data.video} />
        </div>
        <div id="item3" className="carousel-item w-full">
          <CldImage
            className="object-cover"
            sizes="100vw"
            width="900"
            height="600"
            src={data.gigFile}
            alt="image error"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
}

export default ImageCarousel;
