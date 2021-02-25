import Event from '@components/utils/event'

export default function Schedule() {
    return (
        <div class="flex">
            <div class="flex-auto">
                <div class="grid grid-flow-col auto-cols-min grid-cols-11">
                    {/*image size needs to be*/}
                     <img class="pt-4 w-93" src="livestream_icon.png"></img>
                     <h1 class="col-span-2 text-2xl font-bold py-2">Livestreams</h1>
                </div>
           <p class="text-gray-400 py-5">Practice step-by-step guides to help you achieve a specific goal.</p>
           <div>
           <Event />
           <Event />
           <Event />
           </div>
           </div>
        
        </div>
    );
}