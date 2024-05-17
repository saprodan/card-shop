import { ProductPage, generateParams } from '@/pages_';

// // export default generateStaticParams;
export async function generateStaticParams() {
   return await generateParams();
}

export default ProductPage;
