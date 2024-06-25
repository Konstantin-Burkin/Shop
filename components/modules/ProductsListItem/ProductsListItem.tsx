/* eslint-disable indent */

import ProductAvailable from '@/components/elements/ProductAvailable/ProductAvailable'
import ProductItemActionBtn from '@/components/elements/ProductItemActionBtn/ProductItemActionBtn'
import ProductSubtitle from '@/components/elements/ProductSubtitle/ProductSubtitle'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { addOverflowHiddenToBody, formatPrice } from '@/lib/utils/common'
import { IProductsListItemProps } from '@/types/modules'
import Image from 'next/image'
import Link from 'next/link'
import ProductLabel from './ProductLabel'

import stylesForAd from '@/styles/ad/index.module.scss'
import styles from '@/styles/product-list-item/index.module.scss'

const ProductsListItem = ({ item, title }: IProductsListItemProps) => {
  const { lang, translations } = useLang()
  const isMedia800 = useMediaQuery(800)
  const isTitleForNew = title === translations[lang].main_page.new_title
  const isProductInCart = false // предполагается, что этот флаг будет установлен в зависимости от состояния корзины

  const addToCart = () => {
    // логика добавления в корзину
    addOverflowHiddenToBody() // пример вызова функции из utils
  }

  return (
    <>
      {item.characteristics.collection === 'line' &&
      item.type === 't-shirts' ? (
        <li className={styles.list__item_ad}>
          <Link
            href={`/catalog/${item.category}/${item._id}`}
            className={styles.list__item_ad__inner}
          >
            <span className={`${stylesForAd.ad} ${styles.list__item_ad__ad}`}>
              {translations[lang].common.ad}
            </span>
            <ProductSubtitle
              subtitleClassName={styles.list__item_ad__subtitle}
              subtitleRectClassName={styles.list__item_ad__subtitle__rect}
            />
            <div className={styles.list__item_ad__img}>
              <Image
                src={item.images[0]}
                alt={item.name}
                width={224}
                height={275}
              />
            </div>
            <p className={styles.list__item_ad__title}>
              <span>
                {translations[lang].main_page.tShirt} «Line»{' '}
                {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  translations[lang].main_page[
                    item.images[0].split('/img/').join('').split('-')[0]
                  ]
                }
              </span>
              <span>{formatPrice(+item.price)} ₽</span>
            </p>
          </Link>
        </li>
      ) : (
        <li className={styles.list__item}>
          {title ? (
            <span
              className={`${styles.list__item__label} ${
                isTitleForNew
                  ? styles.list__item__new
                  : styles.list__item__bestseller
              }`}
            >
              {isTitleForNew
                ? translations[lang].main_page.is_new
                : translations[lang].main_page.is_bestseller}
            </span>
          ) : !item.isNew && !item.isBestseller ? (
            ''
          ) : (
            <ProductLabel isBestseller={item.isBestseller} isNew={item.isNew} />
          )}
          <div className={styles.list__item__actions}>
            <ProductItemActionBtn
              text={translations[lang].product.add_to_comparison}
              iconClass={''}
            />
            <ProductItemActionBtn
              text={translations[lang].product.add_to_comparison}
              iconClass={''}
            />
            {!isMedia800 && (
              <ProductItemActionBtn
                text={translations[lang].product.quick_view}
                iconClass={''}
              />
            )}
          </div>
          <Link
            href={`/catalog/${item.category}/${item._id}`}
            className={styles.list__item__img}
          >
            <Image src={item.images[0]} alt={item.name} fill />
          </Link>
          <div className={styles.list__item__inner}>
            <h3 className={styles.list__item__title}>
              <Link href={`/catalog/${item.category}/${item._id}`}>
                {item.name}
              </Link>
            </h3>
            <ProductAvailable
              vendorCode={item.vendorCode}
              inStock={+item.inStock}
            />
            <span className={styles.list__item__price}>
              {formatPrice(+item.price)} ₽
            </span>
          </div>
          <button
            onClick={addToCart}
            className={`btn-reset ${styles.list__item__cart} ${
              isProductInCart ? styles.list__item__cart_added : ''
            }`}
          >
            {isProductInCart
              ? translations[lang].product.in_cart
              : translations[lang].product.to_cart}
          </button>
        </li>
      )}
    </>
  )
}

export default ProductsListItem
