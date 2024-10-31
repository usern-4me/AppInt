import { TiStarFullOutline } from "react-icons/ti";
import './SFav.css';

export default function SearchFav({ searchFav, searchNormal, isFav }) {
    return (
        <button className="searchFav" onClick={() => {
            isFav ? searchNormal() : searchFav();
        }}>
            <TiStarFullOutline className="searchText" style={{ color: isFav ? 'yellow' : 'white' }} />
        </button>
    );
}
