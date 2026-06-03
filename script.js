let cart = [];

function addCart(nama, harga){

cart.push({nama, harga});

renderCart();

}

function renderCart(){

let list = document.getElementById("cartList");
let totalEl = document.getElementById("total");

list.innerHTML = "";

let total = 0;

cart.forEach((item, index)=>{

total += item.harga;

list.innerHTML += `
<li>
${item.nama} - Rp${item.harga}
<button onclick="removeItem(${index})">X</button>
</li>
`;

});

totalEl.innerText = "Rp" + total;

}

function removeItem(index){
cart.splice(index,1);
renderCart();
}

function checkout(){

let nomor = "6285703898657";

let pesan = "Halo admin, saya mau pesan:\n\n";

let total = 0;

cart.forEach(item=>{
pesan += `- ${item.nama} Rp${item.harga}\n`;
total += item.harga;
});

pesan += `\nTotal: Rp${total}`;

let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

window.open(url,"_blank");

}