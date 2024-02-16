import { fetchProducts} from "./actions";
import InfiniteScroll from "./components/InfiniteScroll";


export default async function Home() {
  
  const {formatedProducts} = await fetchProducts({})
  // console.log(products)
  return (
    <div className="max-w-7xl mx-auto px-8 py-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        <InfiniteScroll initialProducts={formatedProducts}/>
                

      </div>
      
    </div>
  );
}
