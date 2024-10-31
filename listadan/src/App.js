import './App.css';
import { useReducer } from 'react';
import reducer from './reducers/reducers';
import Add from './components/Add/Add';
import List from './components/List/List';
import Search from './components/Search/Search';

function App() {
    const initialList = [
        { title: "Sample Title1", content: "Sample text1", IsFav: false, id: 1 },
        { title: "Sample Title2", content: "Sample text2", IsFav: false, id: 2 },
        { title: "Sample Title3", content: "Sample text3", IsFav: false, id: 3 }
    ];
    
    const [state, dispatch] = useReducer(reducer, { cookingList: initialList, searchContent: '', SearchFav: false, id: 4 });

    function handleAddList(title, content) {
        dispatch({ type: "AddList", title, content });
    }

    function handleDeleteList(index) {
        dispatch({ type: "DeleteList", index });
    }

    function handleSearchContent(text) {
        dispatch({ type: "SearchContent", text });
    }

    function handleSetFav(index) {
        dispatch({ type: "SetFav", index });
    }

    function handleUnsetFav(index) {
        dispatch({ type: "UnsetFav", index });
    }

    function handleSearchFav() {
        dispatch({ type: "SearchFav" });
    }

    function handleSearchNormal() {
        dispatch({ type: "SearchNormal" });
    }

    return (
        <div className='App'>
            <h1>Recipe List</h1>
            <Search searchContent={handleSearchContent} searchFavFunc={handleSearchFav} searchNormalFunc={handleSearchNormal} isFav={state.SearchFav} />
            <Add AddList={handleAddList} />
            <List SearchVar={state.searchContent} cookingList={state.cookingList} isFav={state.SearchFav} DeleteList={handleDeleteList} SetFav={handleSetFav} UnsetFav={handleUnsetFav} />
        </div>
    );
}

export default App;
