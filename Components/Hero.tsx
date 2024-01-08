import {
  ArrowBigDown,
  ArrowDown,
  ArrowDownNarrowWide,
  ArrowRight,
} from "lucide-react";
import ReactPlayer from "react-player";
import ScrollingText from "./ScrollingText";

export default function HeroItem() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="grid grid-rows-6 h-full">
          <div className="row-span-1 w-[95%]">
            <div className="grid grid-cols-8 w-full h-[50%]">
              <div className="col-span-1 flex flex-col h-full justify-center">
                <ul className="flex justify-around">
                  <li>EN</li>
                  <li>DE</li>
                </ul>
              </div>
              <div className="col-start-3 col-span-4 justify-center flex">
                <div className="flex flex-col justify-center text-center">
                  <h2 className="[font-size:_clamp(2em,2.5vw,5em)] font-bold header">
                    Luxtra Design
                  </h2>
                </div>
              </div>
              <div className="col-span-2 col-start-7 flex flex-col justify-center items-end">
                <ul className="flex gap-3 justify-around w-[50%]">
                  <li>About</li>
                  <li>Contact</li>
                  <li>Menu</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-5 row-span-4">
            <div className="row-start-3 row-span-1 bg-red-500 text-center justify-center flex flex-col">
              <ScrollingText
                text={
                  "In the dance of existance, each step is a choice, and every choice shapes the rythm for our next step."
                }
              />
            </div>
          </div>

          <div className="row-span-1 bg-violet-500 flex justify-center border-black border">
            <div className="flex flex-col justify-center items-center">
              <p>Our Work</p>
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
