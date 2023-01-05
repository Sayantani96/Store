import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import filterReducer from "../Reducer/FilterReducer";


const FilterContext=createContext();


const initialState={
    filteredProducts:[],
    gridView:true,
    sortingValue: "lowest"
}

const FilterProvider=({children})=>{
    const {products}=useProductContext();
    const [state,dispatch]=useReducer(filterReducer,initialState);

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products});
       
        
    },[products]);

   

    const setGridView=()=>{
        return dispatch({type:"SET_GRID_VIEW"})
    }

    const setListView=()=>{
        return dispatch({type:"SET_LIST_VIEW"})
    }

    const sorting=(event)=>{
        dispatch({type:"GET_SORT_VALUE",payload:event.target.value});
        dispatch({ type: "SORTING_PRODUCTS"});

    }

    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS",payload:products})
    },[products])

   return(
    <FilterContext.Provider value={{...state,setGridView,setListView,sorting}}>
    {children}
    </FilterContext.Provider>
   )
}

export const useFilterContext=()=>{
   return useContext(FilterContext);
}

export default FilterProvider;