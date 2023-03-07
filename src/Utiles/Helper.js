export function filterdata(searchstate, restaurant) {
    const filterdata = restaurant.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchstate.toLowerCase())
    );
    return filterdata;
  }