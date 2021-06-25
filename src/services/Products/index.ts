import { ProductTypes } from "../../types/productTypes";
import { FetchApi } from '../../utils/fetchApi'

type SearchParamsDTO = {
    search?: string;
}

export const getProducts = async (baseUrl: string, params: SearchParamsDTO): Promise<ProductTypes[]> => {
    const { search } = params
    const querySearch = search ? `search=${search}` : ""

    return FetchApi(baseUrl, "products", querySearch).then(res => {
        const listProducts = res.map((product: any) => {
            return {
                imageURL: product.imageURL,
                description: product.description,
                price: product.price
            } as ProductTypes;
        });

        return listProducts
    })
}