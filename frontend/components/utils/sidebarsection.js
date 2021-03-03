import { data } from "autoprefixer";

export default function SideBarSection({ data }) {
    return (
        <div class="mb-100 pb-10 pr-10">
            <h5 class="mb-3 font-bold text-gray-600">GETTING STARTED</h5>
            <ul>
                {data.menuoption.map((menuoptions) => (
                    <li class="mb-3"><h5>{menuoptions}</h5></li>
                ))}
            </ul>
        </div>
    );
}