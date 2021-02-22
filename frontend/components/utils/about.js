import Button from '@components/utils/about'

export default function About() {
    return (
        <div class="flex flex-col md:flex-row-reverse max-w-2xl m-10">
            <div>
                <img src="/camp.png" />
            </div>
            <div>
                <h1 class="text-4xl font-bold text-black mb-4">
                    Learn cutting edge tech at <span class="text-green-500">camp</span>
                </h1>
                <p class="text-gray-500">
                    Knowing where to start with your first project is hard. We equip you with the skills to ship your first App!
                </p>
            </div>
        </div>
    );
}

