import "./aboutList.scss";

export default function AboutList({ id, title, active, setSelected }) {
    return(
        <li
            className={active ? "aboutList active" : "aboutList"}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    );
}
