import { LeftScreenData } from '@/utils/types';
import Card from './Card';
async function LeftScreen({ data }: { data: LeftScreenData }) {
  return (
    <div className="max-w-xl mx-auto space-y-3">
      <h6 className="text-slate-500 font-bold">Hello World!</h6>
      <h1 className="font-bold text-4xl">
        We are Creative agency. We build digital work that you love!
      </h1>
      <button className="px-6 py-3 hover:bg-orange-500 transition-colors bg-orange-400 text-white">
        Explore out Portfolio &rarr;
      </button>
      <div className="flex items-end justify-center gap-1 pt-6">
        <Card />
      </div>
    </div>
  );
}

export default LeftScreen;
