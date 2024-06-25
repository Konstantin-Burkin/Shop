import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

const ContactsListItems = () => {
  const { lang, translations } = useLang()

  return (
    <>
      <li className='nav-menu__accordion__item'>
        <a
          href='tel:+77777777777'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          +7 (777) 777 77 77
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <a
          href='mailto:testme8@gmail.com'
          className='nav-menu__accordion__item__link'
        >
          Email
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='https://t.me/Mr_Oks_k'
          className='nav-menu__accordion__item__link'
        >
          {translations[lang].main_menu.tg}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link href='https://vk.com' className='nav-menu__accordion__item__link'>
          {translations[lang].main_menu.vk}
        </Link>
      </li>
    </>
  )
}

export default ContactsListItems
