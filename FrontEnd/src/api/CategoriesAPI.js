import http from './axiosClient'

export async function getCategoriesApi() {
    return await http.get("/api/categories");
    
}


export async function addCategoryApi(c) {
    return await http.post("/api/categories",c)
    
}