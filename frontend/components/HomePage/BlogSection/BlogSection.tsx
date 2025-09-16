'use client';

import styles from './BlogSection.module.css';
import cn from 'classnames';
import Htag from '@/components/htag/htag';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Button from '@/components/button/button';
import Link from 'next/link';

export default function BlogSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    type Article = {
        id: string;
        title: string;
        description: string;
        image: string;
    };

    type PageInfo = {
        currentPage: number;
        pageSize: number;
        totalPage: number;
        tableSize: number;
        currentPageSize: number;
    };

    type ArticlesResponse = {
        payload: Article[];
        pageInfo: PageInfo;
        status: 'OK' | 'ERROR';
    };

    useEffect(() => {
      axios
        .get('https://api.directual.com/good/api/v5/data/article/get_articles?appID=5f093c7f-d044-4f52-b15b-8f6c2ea44cf1&sessionID=')
        .then((res) => {
          setArticles(res.data.payload);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message || 'Ошибка загрузки');
          setLoading(false);
        });
    }, []);

    const handleShowMore = () => {
      if (expandedIndex < articles.length - 1) {
        setExpandedIndex(expandedIndex + 1);
      }
    };

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    return (
      <section className={styles.section}>
        <Htag tag="h2" color="primary" uppercase className={styles.title}>
                Интересное о контрактном производстве
        </Htag>

        <div className={styles.wrapper}>
          <div className={styles.articles}>
            {articles.map((article, i) => {
              if (i > expandedIndex + 1) return null;

              return (
                <Link href={'/'}
                  key={article.id || i}
                  className={cn(styles.article, {
                    [styles.expanded]: i <= expandedIndex,
                    [styles.overlay]: i === expandedIndex + 1,
                  })}
                >
                  {article.image ? (
                    <div className={styles.articleImageWrapper}>
                      <Image
                        alt={article.title}
                        src={article.image}
                        width={1920}
                        height={1080}
                        className={styles.image}
                      />
                    </div>
                  ) : (
                    <div className={styles.placeholderImage}>Нет изображения</div>
                  )}

                  <Htag tag="h3" color="primary" className={styles.title_text}>
                    {article.title}
                  </Htag>
                  <div className={styles.description}>{article.description}</div>

                </Link>
              );
            })}
          </div>
        </div>

        <div
          className={cn(styles.overlayWrapper, {
            [styles.overlayHidden]: expandedIndex >= articles.length - 1,
          })}
        >
          <div className={styles.gradient} />
          <button className={styles.button} onClick={handleShowMore}>
                    Узнать больше
          </button>
        </div>
      </section>
    );
}
