import { TiStarFullOutline } from "react-icons/ti";
import './IFav.css';

export default function IsFav({ SetFav, UnsetFav, isFav, index }) {
    return (
        <button className="IsFav" onClick={() => {
            isFav ? UnsetFav(index) : SetFav(index);
        }}>
            <TiStarFullOutline className="IsFav-text" style={{ color: isFav ? 'yellow' : 'white' }} />
        </button>
    );
}
