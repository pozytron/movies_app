export const selectProducts = (state, price) => {
  if (price && Number(price)) {
    return state.filter((product) => product.price <= price);
  } else {
    return state
  }
};

export const sum = (state, price) => selectProducts(state, price).reduce((acc, product) => acc + product.price,0);
