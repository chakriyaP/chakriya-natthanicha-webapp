export const NumberFormat = (number) => {
    // if (Number.isInteger(+number) ) {
    //     return number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    // } else {
    //     return 0
    // }
    return number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
   

   
  };