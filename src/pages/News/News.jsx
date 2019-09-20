import React, {useEffect, useState} from 'react';
import Api from '../../utils/api';
import './style.scss';
import generateKey from '../../utils/keyUtils';
import LoadingSpinner from '../../components/LoadingSpinner';

const News = () => {
    const [news, setNews] = useState([]);
    const [loaded, setLoad] = useState(false);

    useEffect(() => {
        Api.getNews().then(response => {
            setNews(response.data);
            setLoad(true);
        });
    },[]);

    if(true)
        return <LoadingSpinner/>;

    return(
        <React.Fragment>
            <h1>News</h1>
            <div className="news-content">
                {news.length > 0  ?
                    news.map((item, index) => {
                        return (
                            <div className="news-content__item" key={generateKey(`news_row_${index}_`)}>
                                <span className="news-content__item_text">{item.id}</span>
                                <span className="news-content__item_text">
                                    {item.title}
                                </span>
                                <div className="news-content__item_image">
                                    <img alt='' src="https://picsum.photos/id/237/200/300"/>
                                </div>
                            </div>
                        )
                        })
                    : null
                }
            </div>
        </React.Fragment>
    )
}

export default News;