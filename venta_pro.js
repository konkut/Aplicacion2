class Product{
	constructor(name, price, year){
		this.name = name;
		this.price = price;
		this.year = year;	
	}
}
class UI{
	add(producto){
		const content = document.getElementById("product-list");
		const box = document.createElement("DIV");
		box.classList.add("card","text-center","mb-2");
		box.innerHTML = `
			
				<div id="box" class="card-body">
					<b>El producto es:</b> ${producto.name} <b>tu precio es:</b> ${producto.price} Bs <b>del año:</b>${producto.year} 
					<a href="#" class="btn btn-danger ml-3" name="delete">Eliminar</a>
				</div>
			`
		content.appendChild(box);
		this.reset();
	}
	delete(ventana){
		if(ventana.name === 'delete'){
			ventana.parentElement.parentElement.remove();
			this.show("Product Delete Succesfully","danger");
		}
	}
	show(mensaje,ClaseCss){
		const text = document.createElement("DIV");
		text.className = `alert alert-${ClaseCss}`;
		text.appendChild(document.createTextNode(mensaje));
		// Showing in DOM
		const container = document.getElementById("container");
		const app = document.getElementById("app");
		container.insertBefore(text,app);
		setTimeout(()=>{
			document.querySelector(".alert").remove();
		},2000);	
	}
	reset(){
		document.getElementById("product-form").reset();
	}
}

// DOM Events
// console.log(new Product());
document.getElementById("product-form")
	.addEventListener("submit",(e)=>{
		const name = document.getElementById("name").value;
		const price = document.getElementById("price").value;
		const year = document.getElementById("year").value;
		const producto = new Product(name,price,year);
		// console.log(producto.name);
		// console.log(name,price,year);
		const metodAddShow = new UI();
		if(name === '' || price === '' || year === ''){
			return metodAddShow.show("Complete los campos porfavor !!","info");
		}
		metodAddShow.add(producto);
		metodAddShow.reset();
		metodAddShow.show("Producto agregado exitosamente","success");
	
		e.preventDefault();
});

document.getElementById("product-list")
	.addEventListener("click",(e)=>{
		console.log(e.target);
		const metodDelete = new UI();
		metodDelete.delete(e.target); 
		
});
