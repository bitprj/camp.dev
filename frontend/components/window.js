import Schedule from '@components/utils/schedule'

export default function Window() {
    return (
       <div class="sm:grid grid-flow-col">
           <Schedule />
           <Schedule />
       </div>
    );
}