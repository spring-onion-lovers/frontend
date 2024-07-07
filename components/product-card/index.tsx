import Rating from "@/components/rating";
import { SAMPLE_PRODUCT } from "@/sample-data/Product";

interface ProductCardProps {
  product: typeof SAMPLE_PRODUCT; // TODO: PLEASE CHANGE!!!
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <a
      href={`/product/${product.product_id}`}
      key={product.product_id}
      className={
        "transition-all cursor-pointer border-1 border-black/10 hover:border-brand"
      }
    >
      <img
        className={"aspect-square w-full"}
        src={
          product.ProductImage[0]?.image_url ||
          "https://via.placeholder.com/150"
        }
      />

      <div className={"mt-2 m-3"}>
        <p>{product.name}</p>
        <p className={"text-lg text-brand mt-2.5"}>
          ${product.price.toFixed(2)}
        </p>

        <span>
          <Rating
            rating={
              product.Reviews.reduce((prev, curr) => prev + curr.rating, 0) /
              product.Reviews.length
            }
          />

          <span className={"text-sm"}>{product.Reviews.length} sold</span>
        </span>
      </div>
    </a>
  );
}
