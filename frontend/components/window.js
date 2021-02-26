import Schedule from '@components/utils/schedule'

export default function Window() {
    return (
       <div class="grid grid-flow-col grid-cols-2">
           <Schedule />
           <Schedule />
       </div>
    );
}