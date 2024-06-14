import { getWindowWidth } from '@/lib/utils/common'
import { useEffect, useState } from 'react'

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth()) //устанавливаем исходное значение в состояние

  const handleResize = () => setWindowWidth(getWindowWidth())

  useEffect(() => {
    window.addEventListener('resize', handleResize, true)

    return () => window.removeEventListener('resize', handleResize, true) //handleResize на событие ресайз обновляет состояние ширины
  }, [])

  return { windowWidth, handleResize }
}

export const useMediaQuery = (maxWidth: number) => {
  const {
    windowWidth: { windowWidth }, //получаем постоянно актуальную ширину
    handleResize,
  } = useWindowWidth()
  const [isMedia, setIsMedia] = useState(false)

  useEffect(() => {
    if (windowWidth <= maxWidth) {
      setIsMedia(true)
    } else {
      setIsMedia(false)
    }
  }, [handleResize, maxWidth, windowWidth])

  return isMedia
}
