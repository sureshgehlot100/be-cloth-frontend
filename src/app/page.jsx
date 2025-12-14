"use client";
import { useEffect } from "react";
import HeroSection from "./(component)/HeroSection";
import getProducts from "./api/product";
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/productSlice";


export default function Home() {
  const dispatch = useDispatch();
  useEffect (() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        console.log("Fetched products:", products);
        dispatch(addProducts(products));
      } catch (error) {
        console.error("Error fetching products in Home component:", error);
      } 
    };
    fetchProducts();
  }, []);
  return (
    <>
        <HeroSection/>
    </>
  );
}
