import axios from "axios";
import { useReducer,useEffect,useContext,createContext } from "react";
import ProductReducer from "../Reducer/ProductReducer";
const ProductContext=createContext();
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  };

const ProductProvider=({children})=>{
    const [state,dispatch]=useReducer(ProductReducer,initialState);
    const getProducts=async(baseURL)=>{
        dispatch({type:"SET_LOADING"});

        try{
            const response=await axios.get(baseURL);
            const products=await response.data;
            dispatch({type:"SET_API_DATA",payload:products});
        }catch(error){
            dispatch({type:"API_ERROR"})
        }
    }

    const getSingleProduct=async(baseURL)=>{
        dispatch({type:"SET_SINGLE_LOADING"});
        try{
            const response=await axios.get(baseURL);
            const products=await response.data;
            dispatch({type:"SET_API_SINGLEDATA",payload:products});
        }catch(error){
            dispatch({type:"SINGLE_ERROR"})
        }
    }

    useEffect(() => {
        getProducts("https://api.pujakaitem.com/api/products");
      }, []);

      return (
        <ProductContext.Provider value={{ ...state,getSingleProduct }}>
          {children}
        </ProductContext.Provider>
      );
    };
    
    // custom hooks
    const useProductContext = () => {
      return useContext(ProductContext);
    };
    
    export { ProductProvider, ProductContext, useProductContext };

