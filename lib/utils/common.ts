import { setCurrentProduct } from '@/context/goods'
import { closeSearchModal } from '@/context/modals'
import { IProduct } from '@/types/common'

export const removeOverflowHiddenFromBody = () => {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.remove('overflow-hidden')
}

export const addOverflowHiddenToBody = (paddingRight = '') => {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.add('overflow-hidden')
  if (paddingRight) body.style.paddingRight = paddingRight
}

export const getWindowWidth = () => {
  const { innerWidth: windowWidth } =
    typeof window !== 'undefined' ? window : { innerWidth: 0 }

  return { windowWidth }
}

export const handleCloseSearchModal = () => {
  closeSearchModal()
  removeOverflowHiddenFromBody()
}

export const shuffle = <T>(array: T[]) => {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export const formatPrice = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export const handleShowSizeTable = (product: IProduct) => {
  setCurrentProduct(product)
  setSizeTableSizes({ sizes: product.sizes, type: product.type })
  addOverflowHiddenToBody()
  showSizeTable()
}

function setSizeTableSizes(arg0: {
  sizes: import('@/types/common').ISizes
  type: string
}) {
  console.log(arg0)
}

function showSizeTable() {
  console.log('Showing size table')
}
