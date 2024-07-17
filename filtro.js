// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "taco-negro.jpg"}, /* aqui las fotos estaban raras con el ./ */
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos")
const valorFiltro = document.querySelector('input'); /* estaba mal nombrado el input */
const displayProductos=(productos)=>{
  for (let i = 0; i < productos.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto")

    let ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productos[i].nombre
    d.appendChild(ti)
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
    d.appendChild(imagen) /* estaban cerrados los elements mal */

    li.appendChild(d)

  }
}
displayProductos(productos) /* no estaba definida la funcion displayProductos */

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = (valorFiltro.value).replace(/\s+/g,'');
  console.log(texto);

  const productosFiltrados = filtrado(productos, texto);

  console.log(productosFiltrados);
  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto.toLowerCase()) || item.color.includes(texto.toLowerCase()) || item.nombre.toLowerCase().replace(/\s+/g, '').includes(texto.toLowerCase()));

  /* agregue el tolowercase para hacerlo mas universal para mayusculas o minusculas */
}  