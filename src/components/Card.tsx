'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import cardOne from '../../public/cardOne.svg';
import arrowOne from '../../public/arrowOne.svg';
import cardTwo from '../../public/cardTwo.svg';
import arrowTwo from '../../public/arrowTwo.svg';
import cardThree from '../../public/cardThree.svg';
import arrowThree from '../../public/arrowThree.svg';
import { LeftScreenData, TOrganized } from '@/utils/types';

function Card({ data }: { data: TOrganized }) {
  const [expandCard, setExpandCard] = useState(false);
  const [expandCardId, setExpandCardId] = useState(0);

  return (
    <div className=" flex flex-col md:flex-row items-center justify-center gap-2">
      {data.map((val) => (
        <div key={val.id} className="flex items-end justify-center gap-1 pt-6">
          <div
            className={`${
              val.id === expandCardId && expandCard ? 'w-[280px]' : 'w-[187px]'
            }  p-2 pt-7  max-h-[250px] overflow-y-auto duration-300 bg-slate-50 space-y-1  border-t-4 ${
              val.id === 1
                ? 'border-red-500'
                : val.id === 2
                ? 'border-blue-500'
                : 'border-green-500'
            }`}
          >
            <Image
              src={val.image}
              height={30}
              width={30}
              alt="cardOne svg error"
            />
            <h1 className="font-bold text-sm">{val.title}</h1>
            <p className="text-xs">{val.desc}</p>
            <div className="text-right">
              <button
                onClick={() => {
                  setExpandCard(!expandCard);
                  setExpandCardId(val.id);
                }}
              >
                <Image
                  src={val.arrow}
                  height={20}
                  width={20}
                  alt="arrow svg error"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
