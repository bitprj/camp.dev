import Button from '@components/utils/button'
export default function Box() {
    return (
        /* might wanna add <section class="flex"> */
        <div class="w-full relative overflow-hidden p-10 rounded-lg bg-gradient-to-r from-pink-700 to-purple-800 to-indigo-800 text-white">
            <div class="w-full flex md:flex-col">
                    <div class="z-10">
                        <h2 class="text-2xl font-bold pb-10">
                            Learn how to write code with collaboratively with Github and VSCode
                        </h2>
                        <Button />
                    </div>
                    <div class="relative w-30 z-0">
                        <div class="absolute hidden lg:block lg:-top-20 opacity-30">
                            <img src="coding.png" class="rounded-lg"></img>
                        </div>
                    </div>
            </div>
        </div>
    );
}