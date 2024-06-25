"use client";
import { IProduct } from "@/types/common";
import { IProducts } from "@/types/goods";
import { Effect } from "effector";
import {
  setCurrentProduct,
  loadProductsByFilterFx,
  loadOneProductFx,
  goods,
  loadWatchedProductsFx,
  getBestsellerProductsFx,
  getNewProductsFx,
} from "./index";

const goodsStoreInstance = (effect: Effect<void, [], Error>) =>
  goods
    .createStore([])
    .on(effect.done, (_: any, { result }: any) => result)
    .on(effect.fail, (_: any, { error }: any) => {
      console.log(error.message);
    });

export const $newProducts = goodsStoreInstance(getNewProductsFx);
export const $bestsellerProducts = goodsStoreInstance(getBestsellerProductsFx);

export const $currentProduct = goods
  .createStore<IProduct>({} as IProduct)
  .on(setCurrentProduct, (_: any, product: any) => product)
  .on(loadOneProductFx.done, (_: any, { result }: any) => result.productItem);

export const $products = goods
  .createStore<IProducts>({} as IProducts)
  .on(loadProductsByFilterFx.done, (_: any, { result }: any) => result);

export const $watchedProducts = goods
  .createStore<IProducts>({} as IProducts)
  .on(loadWatchedProductsFx.done, (_: any, { result }: any) => result);
