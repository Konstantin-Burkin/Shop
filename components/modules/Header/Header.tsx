"use client";
import React from "react";
import Logo from "@/components/elements/Logo/logo";
import { openMenu, openSearchModal } from "@/context/modals";
import { useLang } from "@/hooks/useLang";
import { addOverflowHiddenToBody } from "@/lib/utils/common";
import Link from "next/link";
import CartPopup from "./CartPopup/CartPopup";
import Menu from "./Menu";

const Header = () => {
  const { lang, translations } = useLang();
  const handleOpenMenu = () => {
    addOverflowHiddenToBody;
    openMenu();
  };
  const handleOpenSearchModal = () => {
    openSearchModal();
    addOverflowHiddenToBody();
  };
  return (
    <header className="header">
      <div className="container header__container">
        <button className="btn-reset header__burger" onClick={handleOpenMenu}>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className="header__logo">
          <Logo />
        </div>
        <ul className="header__links list-reset">
          <li className="header__links__item">
            <button
              className="btn-reset header__links__item__btn header__links__item__btn--search"
              onClick={handleOpenSearchModal}
            ></button>
          </li>
          <li className="header__links__item">
            <Link
              className="header__links__item__btn header__links__item__btn--favorites"
              href="/favorites"
            />
          </li>
          <li className="header__links__item header__links__item__btn--compare">
            <Link
              className="header__links__item__btn header__links__item__btn--compare"
              href="/comparsion"
            />
          </li>
          <li className="header__links__item ">
            <CartPopup />
          </li>
          <li className="header__links__item header__links__item--profile">
            <Link
              className="header__links__item__btn header__links__item__btn--profile"
              href="/profile"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
