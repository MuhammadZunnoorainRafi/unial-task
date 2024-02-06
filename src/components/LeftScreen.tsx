import { LeftScreenData } from '@/utils/types';
import Card from './Card';
import cardOneImage from '../../public/cardOne.svg';
import arrowOne from '../../public/arrowOne.svg';
import cardTwoImage from '../../public/cardTwo.svg';
import arrowTwo from '../../public/arrowTwo.svg';
import cardThreeImage from '../../public/cardThree.svg';
import arrowThree from '../../public/arrowThree.svg';
async function LeftScreen({ data }: { data: LeftScreenData }) {
  const organized = [
    {
      id: 1,
      title: data.cardOneTitle,
      desc: data.cardOneDesc,
      image: cardOneImage,
      arrow: arrowOne,
    },
    {
      id: 2,
      title: data.cardTwoTitle,
      desc: data.cardTwoDesc,
      image: cardTwoImage,
      arrow: arrowTwo,
    },
    {
      id: 3,
      title: data.cardThreeTitle,
      desc: data.cardThreeDesc,
      image: cardThreeImage,
      arrow: arrowThree,
    },
  ];

  return (
    <div className="max-w-xl mx-auto space-y-3 md:text-left text-center">
      <h6 className="text-slate-500 font-bold">Hello World!</h6>
      <h1 className="font-bold text-4xl">{data.heading}</h1>
      <button className="px-6 py-3 hover:bg-orange-500 transition-colors bg-orange-400 text-white">
        Explore out Portfolio &rarr;
      </button>
      <div className="flex items-end justify-center gap-1 pt-6">
        <Card data={organized} />
      </div>
    </div>
  );
}

export default LeftScreen;
