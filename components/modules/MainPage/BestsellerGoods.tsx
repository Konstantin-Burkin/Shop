// components/modules/mainpage/BestsellerGoods.tsx
import { getBestsellersProductsFx } from '@/api/main.page'
import { $bestsellerProducts } from '@/context/goods/state'
import { useLang } from '@/hooks/useLang'
import { useUnit } from 'effector-react'
import MainPageSection from './MainPageSection'

const BestsellerGoods = () => {
  const goods = useUnit($bestsellerProducts)
  const spinner = useUnit(getBestsellersProductsFx.pending)
  const { lang, translations } = useLang()

  return (
    <MainPageSection
      title={translations[lang].main_page.bestsellers_title}
      goods={goods}
      spinner={spinner}
    />
  )
}

export default BestsellerGoods
