const addSingleProductToCart = (product) => {
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  const oldProductIndex = products.findIndex((x) => x.id === product.id);
  if (oldProductIndex >= 0) {
    products[oldProductIndex].quantity += 1;
  } else {
    products.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("products", JSON.stringify(products));
};
