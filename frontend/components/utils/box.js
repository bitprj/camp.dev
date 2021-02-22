import Button from '@components/utils/button'
export default function Box() {
    return (
        
        <div class="flex-auto z-0 relative box-border h-60 w-96 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg bg-center overflow-y-hidden m-2 w-full">
            <div class="z-20 absolute py-8 px-12 space-y-5 py-4 md:object-scale-down">
                <h2 class="text-2xl font-bold text-white">
                    Learn how to write code with collaboratively with Github and VSCode
                </h2>

                <Button /> 
            </div>

            <div class="absolute z-10 w-1/2 mx-40 my-28">
                <img class="opacity-30" src="/coding.png"></img>
            </div>
        </div>
    );
}