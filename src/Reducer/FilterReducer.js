const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        // let priceArr = action.payload.map((curElem) => curElem.price);
        
  
        // let maxPrice = Math.max(...priceArr);
        return {
          ...state,
          filteredProducts: [...action.payload],
        //   all_products: [...action.payload],
        //   filters: { ...state.filters, maxPrice, price: maxPrice },
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          gridView: true,
        };
  
      case "SET_LIST_VIEW":
        return {
          ...state,
          gridView: false,
        };
  
      case "GET_SORT_VALUE":
        
        return {
          ...state,
          sortingValue: action.payload,
        };
  
      case "SORTING_PRODUCTS":
        let newSortData;
        
  
        const { filteredProducts, sortingValue } = state;
        let tempSortProduct = [...filteredProducts];
  
        const sortingProducts = (a, b) => {
          if (sortingValue === "lowest") {
            return a.price - b.price;
          }
  
          if (sortingValue === "highest") {
            return b.price - a.price;
          }
  
          if (sortingValue === "a-z") {
            return a.name.localeCompare(b.name);
          }
  
          if (sortingValue === "z-a") {
            return b.name.localeCompare(a.name);
          }
        };
  
        newSortData = tempSortProduct.sort(sortingProducts);
  
        return {
          ...state,
          filteredProducts: newSortData,
        };
  
    //   case "UPDATE_FILTERS_VALUE":
    //     const { name, value } = action.payload;
  
    //     return {
    //       ...state,
    //       filters: {
    //         ...state.filters,
    //         [name]: value,
    //       },
    //     };
  
    //   case "FILTER_PRODUCTS":
    //     let { all_products } = state;
    //     let tempFilterProduct = [...all_products];
  
    //     const { text, category, company, color, price } = state.filters;
  
    //     if (text) {
    //       tempFilterProduct = tempFilterProduct.filter((curElem) => {
    //         return curElem.name.toLowerCase().includes(text);
    //       });
    //     }
  
    //     if (category !== "all") {
    //       tempFilterProduct = tempFilterProduct.filter(
    //         (curElem) => curElem.category === category
    //       );
    //     }
  
    //     if (company !== "all") {
    //       tempFilterProduct = tempFilterProduct.filter(
    //         (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
    //       );
    //     }
  
    //     if (color !== "all") {
    //       tempFilterProduct = tempFilterProduct.filter((curElem) =>
    //         curElem.colors.includes(color)
    //       );
    //     }
  
    //     if (price === 0) {
    //       tempFilterProduct = tempFilterProduct.filter(
    //         (curElem) => curElem.price === price
    //       );
    //     } else {
    //       tempFilterProduct = tempFilterProduct.filter(
    //         (curElem) => curElem.price <= price
    //       );
    //     }
    //     return {
    //       ...state,
    //       filter_products: tempFilterProduct,
    //     };
  
    //   case "CLEAR_FILTERS":
    //     return {
    //       ...state,
    //       filters: {
    //         ...state.filters,
    //         text: "",
    //         category: "all",
    //         company: "all",
    //         color: "all",
    //         maxPrice: 0,
    //         price: state.filters.maxPrice,
    //         minPrice: state.filters.maxPrice,
    //       },
    //     };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;
  