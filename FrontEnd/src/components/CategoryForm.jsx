import { useState} from "react";
import { addCategoryApi } from "../api/CategoriesAPI";

function CategoryForm(){
const [name,setName]=useState("")

async function handlForm(e){
    await addCategoryApi({name})
}
return(
<div>
    <form onSubmit={handlForm}>
        <label htmlFor="name"></label>
        <input id="name" type="text" onChange={e=>setName(e.target.value)} />
        <input type="submit" value={"Enregistrer"} />


    </form>
</div>
)
}

export default CategoryForm