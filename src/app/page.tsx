import ImageCarousel from '@/components/ImageCrousel';
import LeftScreen from '@/components/LeftScreen';
import { db } from '@/utils/db';

export default async function Home() {
  const data = await db.form.findFirst();

  if (!data)
    return (
      <p className="mt-32 text-center font-semibold text-xl font-mono tracking-widest">
        No data yet!
      </p>
    );

  const leftScreenData = {
    heading: data.heading,
    cardOneTitle: data.cardOneTitle,
    cardOneDesc: data.cardOneDesc,
    cardTwoTitle: data.cardTwoTitle,
    cardTwoDesc: data.cardTwoDesc,
    cardThreeTitle: data.cardThreeTitle,
    cardThreeDesc: data.cardThreeDesc,
  };

  const imageCarouselData = {
    image: data.image,
    video: data.video,
    gigFile: data.gigFile,
  };

  return (
    <div className="flex h-[91.5vh]">
      <div className="flex-1 mt-3 border-l-2 border-slate-400 pt-[100px] ">
        <LeftScreen data={leftScreenData} />
      </div>
      <div className="flex-1  text-black ">
        <ImageCarousel data={imageCarouselData} />
      </div>
    </div>
  );
}
