import './NewsPage.scss';
import React, {useEffect, useState} from 'react';
import Api from '../../utils/api';
import generateKey from '../../utils/keyUtils';
import LoadingSpinner from '../../components/loadingSpinner';

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [loaded, setLoad] = useState(false);

    useEffect(() => {
        Api.getNews().then(response => {
            setNews(response.data);
            setLoad(true);
        });
    },[]);

    if(!loaded)
        return <LoadingSpinner/>;

    return(
        <React.Fragment>
            <h1>News</h1>
            <div className="news-page">
                {news.length > 0  ?
                    news.map((item, index) => {
                        return (
                            <div className="news__item" key={generateKey(`news_row_${index}_`)}>
                                <span className="news__item-text">{item.id}</span>
                                <span className="news__item-text">
                                    {item.title}
                                </span>
                                <div className="news__item-image">
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

export default NewsPage;