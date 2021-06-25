export const FetchApi = (
    baseUrl: string,
    endpoint: string,
    params?: any | undefined
): Promise<any> => {
    return fetch(`${baseUrl}/${endpoint}${params ? `?${params}` : ""}`)
        .then((res) => {
            return res.json();
        })
}