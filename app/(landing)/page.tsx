import HeroSection from "./component/home/hero";
import CategoriesSection from "./component/home/categories";
import ProductsSection from "./component/home/products";
import { getAllCategories } from "../services/category.services";
import { getAllProducts } from "../services/product.services";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(), getAllProducts()
  ]);

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductsSection products={products} />
    </main>
  );
}
