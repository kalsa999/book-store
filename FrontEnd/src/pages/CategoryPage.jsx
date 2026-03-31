import { useState } from "react"
import CategoryForm from "../components/CategoryForm"
import CategoryList from "../components/CategoryList"


function CategoryPage(){
    
    return (
        <div>
           <CategoryForm/>
           <CategoryList/>
        </div>
    )
}

export default CategoryPage