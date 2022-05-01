urlHeader = "https://97b99f16-22bb-410f-95cc-ceec57525e37-prod.e1-us-east-azure.choreoapis.dev/" + 
            "dvpf/supermarketpurchasesapi/1.0.0";

function getProducts() {

    products = [];
    productNameInput = document.getElementById("productNameInput")
    if (productNameInput.value != "") {

        var products = [];
        var url = urlHeader + "/brocadeAPI/getProductsByName?productName=" + productNameInput.value;
        var xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.setRequestHeader('API-Key', new Keys.API_KEY)
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                xhr.response.forEach(s => {
                        products.push(new Product(1, s.gtin14, s.name));
                });
            }
            productNameInput.innerHTML = products;
        };
    xhr.send();

    } 
    else {
        document.getElementById("res").innerHTML = "preencha a caixa de texto!";
    }
}