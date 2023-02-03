import classes from './List.module.scss'
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material'
import ListItem from '../ListItem/ListItem'
import { useRef, useState } from 'react'
import useWindowDimensions from '../useWindowDimensions'

const List = ({ list }) => {
  const { width } = useWindowDimensions()
  const [slideNumber, setSlideNumber] = useState(1)
  const [canMoveLeft, setCanMoveLeft] = useState(false)
  const [canMoveRight, setCanMoveRight] = useState(true)
  const listRef = useRef()

  const handleClick = (direction) => {
    const distance = listRef.current.getBoundingClientRect().x - 50

    if (direction === 'left') {
      listRef.current.style.transform = `translateX(${240 + distance}px)`
      setSlideNumber(slideNumber - 1)
      setCanMoveRight(true)

      if (slideNumber === 2) {
        setCanMoveLeft(false)
      }
    } else if (direction === 'right') {
      listRef.current.style.transform = `translateX(${-240 + distance}px)`
      setSlideNumber(slideNumber + 1)
      setCanMoveLeft(true)

      if (
        Math.floor(slideNumber + width / 235) ===
        listRef.current.childNodes.length
      ) {
        setCanMoveRight(false)
      }
    }
  }

  return (
    <div className={classes.list}>
      <span className={classes.listTitle}>{list.title}</span>
      <div className={classes.wrapper}>
        {canMoveLeft && (
          <ArrowBackIosNewOutlined
            className={`${classes.sliderArrow} ${classes.left}`}
            onClick={() => handleClick('left')}
          />
        )}
        <div className={classes.container} ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem key={item.title} index={i} item={item} />
          ))}
        </div>
        {canMoveRight && (
          <ArrowForwardIosOutlined
            className={`${classes.sliderArrow} ${classes.right}`}
            onClick={() => handleClick('right')}
          />
        )}
      </div>
    </div>
  )
}

export default List
