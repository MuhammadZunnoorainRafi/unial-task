import ImageCarousel from '@/components/ImageCrousel';
import LeftScreen from '@/components/LeftScreen';
import { db } from '@/utils/db';

export default async function Home() {
  const data = await db.form.findMany();
  return (
    <div className="flex h-[91.5vh]">
      <div className="flex-1 mt-3 border-l-2 border-slate-400 pt-[100px] ">
        <LeftScreen />
      </div>
      <div className="flex-1  text-black ">
        <ImageCarousel />
      </div>
    </div>
  );
}
