import Rating from "@/components/rating";
import { GetProductSuccessData } from "@/types/services/product";
import { capitalize } from "@nextui-org/shared-utils";

interface ProductCardProps {
  product: GetProductSuccessData; // TODO: PLEASE CHANGE!!!
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
        className={"aspect-square w-full rounded-md"}
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
              product.Reviews.reduce(
                (prev: any, curr: { rating: any }) => prev + curr.rating,
                0,
              ) / product.Reviews.length
            }
          />

          <span className={"text-sm"}>{product.Reviews.length} sold</span>
        </span>

        <p className={"text-xs mt-4"}>
          in&nbsp;
          <span className={"text-black text-opacity-40"}>
            {capitalize(product.Category.name)}
          </span>
        </p>
      </div>
    </a>
  );
}
