import { FaSearch } from "react-icons/fa";
import './Search.css';
import SearchFav from '../SFav/SFav';

export default function Search({ searchContent, searchFavFunc, searchNormalFunc, isFav }) {
    return (
        <div className="SearchField">
            <FaSearch className="SearchIcon" />
            <input onChange={(e) => searchContent(e.target.value)} />
            <SearchFav searchFav={searchFavFunc} searchNormal={searchNormalFunc} isFav={isFav} />
        </div>
    );
}
