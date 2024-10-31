import './List.css';
import Delete from '../Delete/Delete';
import IFav from '../IFav/IFav';

export default function CookList({ SetFav, UnsetFav, isFav, SearchVar, cookingList, DeleteList }) {
    return (
        <div className='list'>
            {
                !isFav ? (
                    cookingList
                        .filter((item) => item.title.toLowerCase().includes(SearchVar.toLowerCase()))
                        .map((item) => (
                            <div className='list-item' key={item.id}>
                                <Delete DeleteList={DeleteList} index={item.id} />
                                <IFav isFav={item.IsFav} index={item.id} SetFav={SetFav} UnsetFav={UnsetFav} />
                                <h2>{item.title}</h2>
                                <p className='list-content'>{item.content}</p>
                            </div>
                        ))
                ) : (
                    cookingList
                        .filter((item) => item.title.toLowerCase().includes(SearchVar.toLowerCase()) && item.IsFav)
                        .map((item) => (
                            <div className='list-item' key={item.id}>
                                <Delete DeleteList={DeleteList} index={item.id} />
                                <IFav isFav={item.IsFav} index={item.id} SetFav={SetFav} UnsetFav={UnsetFav} />
                                <h2>{item.title}</h2>
                                <p className='list-content'>{item.content}</p>
                            </div>
                        ))
                )
            }
        </div>
    );
}
