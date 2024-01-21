import LeftScreen from './_components/LeftScreen';

export default function Home() {
  return (
    <div className="flex h-[91.5vh]">
      <div className="flex-1 mt-3 border-l-2 border-slate-400 pt-[100px] ">
        <LeftScreen />
      </div>
      <div className="flex-1 pt-2 bg-black ">right side</div>
    </div>
  );
}
