import { CaretLeft, CaretRight } from "../assets/icons";
export default function ScreenNavigation() {
  return (
    <div className="flex items-center gap-4 mt-4">
      <button className="rounded-full bg-black/40 p-1">
        <CaretLeft />
      </button>
      <button className="rounded-full bg-black/40 p-1">
        <CaretRight />
      </button>
    </div>
  );
}
