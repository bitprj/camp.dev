import Button from '@components/utils/button'
export default function Box() {
    return (
        <div class="w-full bg-gray-500 p-10">
                <div>
                <h2 class="text-2xl font-bold text-black pb-10">
                    Learn how to write code with collaboratively with Github and VSCode
                </h2>
                </div>
                <div class="relative w-30">
                    <div class="absolute">
                        <img src="coding.png"></img>
                    </div>
                    <Button />
                </div>
        </div>
    );
}