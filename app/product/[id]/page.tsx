import { ProductPage, generateParams } from '@/pages_';

export async function generateStaticParams() {
  return await generateParams();
}

export default ProductPage;
