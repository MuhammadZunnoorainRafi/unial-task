import Image from 'next/image';
import React from 'react';
import cardOne from '../../../public/cardOne.svg';
import arrowOne from '../../../public/arrowOne.svg';

function Card() {
  return (
    <div
      id="style-1"
      className="p-2 pt-7 max-h-[250px] overflow-y-auto bg-slate-50 space-y-1 w-[187px] border-t-4 border-green-500"
    >
      <Image src={cardOne} height={30} width={30} alt="cardOne svg error" />
      <h1 className="font-bold text-sm">Web design project</h1>
      <p className="text-xs">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit odio
        ratione, optio iure nisi vero labore! ? ?
      </p>
      <div className="text-right">
        <button>
          <Image src={arrowOne} height={20} width={20} alt="arrow svg error" />
        </button>
      </div>
    </div>
  );
}

export default Card;
