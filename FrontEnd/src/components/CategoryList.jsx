import { useEffect,useState } from "react"
import {getCategoriesApi } from "../api/CategoriesAPI";


function CategoryList(){
const [categories,setCategories]=useState([])
useEffect(()=>{
    fetchCategories();
},[])
async function fetchCategories(){
    const resp = await getCategoriesApi()
    setCategories(resp.data)
}
return(
    <div>
{categories.map(c=> <p>
    {c.name}
</p>)}
    </div>
)

}

export default CategoryList;