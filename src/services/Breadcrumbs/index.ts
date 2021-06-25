import { NavLinkTypes } from "../../types/navLinksTypes";
import { FetchApi } from "../../utils/fetchApi";

export const getBreadcrumbs = async (baseUrl: string): Promise<NavLinkTypes[]> => {

    return FetchApi(baseUrl, "breadcrumbs").then(res => {
        const breadcrumbs = res.map((category: any) => {
            return {
                id: category.id,
                path: category.link,
                label: category.name,
            } as NavLinkTypes;
        });

        return breadcrumbs
    })
}