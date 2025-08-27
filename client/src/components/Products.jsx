//STEP 2

const Products = ({products}) => {
    return (
        <div>
            <h1>Products</h1>

            {/* STEP 3 - Map over products */}
            {
                products.map((product) => {
                    return(
                        <div>
                            {product.name}
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Products