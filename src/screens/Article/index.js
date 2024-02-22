import './style.css';

function Article() {


    return (
        <section className='article'>
            <div className='article-cover' style={{backgroundImage: "url(/img/wild_west.jpg)"}}>
                <h1 className='article-title'>
                    Cikk címe.
                </h1>
            </div>

            <div className='container'>
                 <h2 className='article-headline'>
                    Cikk headline
                </h2>
                <div className='article-description'>
                    <p>
                        Cikk leírás
                    </p>
                </div>  
            </div>
        </section>
    )
}

export default Article;