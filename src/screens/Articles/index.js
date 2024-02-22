import './style.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
 
function Articles() {

    const [articleItems, setArticleItems] = useState([]); 

    const loadArticleItems = () => {
        fetch('/api/articles/index.json')
        .then(response => response.json())
        .then(json => setArticleItems(json.data))
        .catch(error => console.log(error));
    };

    useEffect(() => {  //apiból behelyezzük az adatokat
        loadArticleItems();
    }, []);

    return (
        <section className='articles'>
            <div className='container'> 
                <div className='article-items'>
                    {articleItems.map((items, index) =>
                    
                    <div className={'article-item ' + ((index + 1) % 2 === 0 ? 'reverse' : '')}>
                        <img className='article-image' src={items.ImageUrl}/>
                        <div className='article-text'>
                            <h2 className='article-title'>{items.title}</h2>
                            <h3 className='article-headline'>{items.headline}</h3>
                            <Link to={"/articles/" + items.id}>
                                <button className='button'>Részletek</button>
                            </Link>
                        </div>
                    </div>
                    )}
                </div> 
            </div>
        </section>
    )
}

export default Articles;