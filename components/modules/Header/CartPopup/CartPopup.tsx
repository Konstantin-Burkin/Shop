import React from "react";
import { withClickOutside } from "@/components/hocs/WithClickOutside";
import { useLang } from "@/hooks/useLang";
import { IWrappedComponentProps } from "@/types/hocs";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";

const CartPopup = forwardRef<HTMLDivElement, IWrappedComponentProps>(
  ({ open, setOpen }, ref) => {
    const { lang, translations } = useLang();
    const handleShowPopup = () => setOpen(true);

    const handleHidePopup = () => setOpen(false);

    return (
      <div className="cart-popup" ref={ref}>
        <Link
          className="header__links__item__btn header__links__item__btn--cart"
          href="/cart"
          onMouseEnter={handleShowPopup}
        ></Link>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="cart-popup__wrapper"
              onMouseLeave={handleHidePopup}
            >
              <span className="cart-popup__arrow" />
              <button
                className="btn-reset cart-popup__close"
                onClick={handleHidePopup}
              />
              <h3 className="cart-popup__title">
                {translations[lang].breadcrumbs.cart}
              </h3>

              <div className="cart-popup__spinner"></div>

              <div className="cart-popup__footer">
                <div className="cart-popup__footer__inner">
                  <span>{translations[lang].common.order_price}:</span>
                </div>
                <Link href="/order" className="cart-popup__footer__link">
                  {translations[lang].breadcrumbs.order}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

CartPopup.displayName = "CartPopup";

export default withClickOutside(CartPopup);
