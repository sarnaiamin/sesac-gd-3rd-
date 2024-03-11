function displayProducts(product) {
  const productListEl = document.querySelector("#product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        
        `;
  });
}
//==============================
//value : input 의 값을 가져 오기
function useVal() {
  const value = $("input").val();
  console.log(value);
}
