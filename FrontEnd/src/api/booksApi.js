import http from './axiosClient'

 export async function getBooksAPI(){
    const {data}=await http.get("/api/books")
    return data
  }

  export async function deleteBookAPI(id){
  const {data} =await http.delete(`/api/books/${id}`) 
  return data;
}

export async function addBookAPI(book){
  return await http.post("/api/books",book)
}