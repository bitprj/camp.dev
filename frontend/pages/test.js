import Image from "next/image";
import Button from "@components/utils/button.js";
import Box from "@components/utils/box"
import About from "@components/utils/about"
import Layout from "@components/layout"
import Window from "@components/window"

export default function IndexPage() {
  return (
    //Use flex-1 to allow a flex item to grow and shrink as needed, ignoring its initial size:
    //Use items-stretch to stretch items to fill the container's cross axis:
    //Use flex-col to position flex items vertically:
    <div>
    <div className="flex-1 flex-col items-center justify-center space-y-12 max-w-4xl mr-3">
      <div class="grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2">
        <Box />
      </div>
    </div>
    </div>
  );
}
