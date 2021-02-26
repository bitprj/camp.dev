import Schedule from '@components/utils/schedule'
import CourseWindow from '@components/utils/coursewindow'

export default function Window() {
    return (
       <div class="sm:grid grid-flow-col">
           <CourseWindow />
           <Schedule />
       </div>
    );
}