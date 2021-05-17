import axios from "axios";
import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.less';
import {Card} from "./Card";
import {generateRandomString} from "../../utils/react/generateRandomIndex";

export function CardsList() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [errorLoading, setErrorLoading] = useState('')
  const [nextAfter, setNextAfter] = useState('')
  const [counter, setCounter] = useState(0)
  const [more, setMore] = useState(false)

  const bottomOfList = useRef<HTMLDivElement>(null)

  useEffect(() => {
      async function load() {
        setLoading(true)
        setErrorLoading('')
        try {
          const {data: {data: {after, children}}} = await axios.get('https://www.reddit.com/r/popular/best.json?sr_detail=true&limit=10', {
            params: {
              limit: 10,
              after: nextAfter,
            }
          });

          setNextAfter(after)
          setPosts(prevChildren => prevChildren.concat(...children))

        } catch (error) {
          setErrorLoading(String(error))
        }

        setLoading(false)
      }

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (counter < 2) {
            load()
            setCounter(counter + 1)
          } else {
            setMore(true)
          }
        }
      }, {
        rootMargin: '10px',
      })

      if (bottomOfList.current) {
        observer.observe(bottomOfList.current)
      }

      return () => {
        if (bottomOfList.current) {
          observer.unobserve(bottomOfList.current)
        }
      }
    }

    ,
    [bottomOfList.current, nextAfter, more]
  )

  function showMore () {
    setCounter(0)
    setMore(false)
  }

  return (
    <ul className={styles.cardList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div style={{textAlign: 'center'}}>
          Нет ни одного поста
        </div>
      )}

      {posts.map(post => (
        <Card post={post} key={generateRandomString()}/>
      ))}

      {loading && (
        <div style={{textAlign: 'center'}}>
          Загрузка...
        </div>
      )}

      {errorLoading && (
        <div role="alert" style={{textAlign: 'center'}}>
          {errorLoading}
        </div>
      )}

      <button onClick={showMore} className={styles.moreBtn} style={more ? {display: 'block'} : {display: 'none'}}>Загрузить ещё</button>

      <div ref={bottomOfList}/>
    </ul>
  );
}
