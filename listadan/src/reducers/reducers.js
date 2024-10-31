export default function reducer(state, action) {
    switch (action.type) {
        case 'AddList':
            const newItem = { title: action.title, content: action.content, IsFav: false, id: state.id };
            return { ...state, cookingList: [...state.cookingList, newItem], id: state.id + 1 };
        case 'DeleteList':
            const newList = state.cookingList.filter((item) => item.id !== action.index);
            return { ...state, cookingList: newList };
        case 'SearchContent':
            return { ...state, searchContent: action.text };
        case 'SetFav':
            const newFav = state.cookingList.map((item) => {
                if (item.id !== action.index) {
                    return item;
                } else {
                    return { ...item, IsFav: true };
                }
            });
            return { ...state, cookingList: newFav };
        case 'UnsetFav':
            const newUnFav = state.cookingList.map((item) => {
                if (item.id !== action.index) {
                    return item;
                } else {
                    return { ...item, IsFav: false };
                }
            });
            return { ...state, cookingList: newUnFav };
        case 'SearchFav':
            return { ...state, SearchFav: true };
        case 'SearchNormal':
            return { ...state, SearchFav: false };
        default:
            return state;
    }
}
