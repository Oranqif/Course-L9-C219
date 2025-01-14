import { Outlet, NavLink, useParams } from "react-router-dom";
import { getDiploma } from "../api";

export default function Diploma() {
    const { dipId } = useParams();
    const diploma = getDiploma(dipId);

    return (
        <div>
            <h2>{diploma.name} Modules</h2>
            <ul className="module-list">
                {diploma?.modules.map(module =>
                    <li className="module">
                        <NavLink
                            className={({ isActive }) => (isActive ? "module-active" : null)}
                            to={module.id}
                        >
                            <p className="module-name">{module.name}</p>
                            <p>{module.speaker.name} | {module.speaker.org}</p>
                        </NavLink>
                    </li>
                )}
            </ul>

            <Outlet />
        </div>
    );
};