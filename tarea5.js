function ActividadUno(){
    var meses = new Array('Enero','Febero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre',
    'Octubre','Noviembre','Diciembre');
    for(var i=0;i<12;i++){
        alert(meses[i]);
    }
}
function ActividadDos(){
    function Producto_Alimenticio(codigo,nombre,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }
    var producto1 =new Producto_Alimenticio('456','Sal',1.50);
    var producto2 =new Producto_Alimenticio('264','Arroz',2.00);
    var producto3 =new Producto_Alimenticio('123','Pollo',4.50);

    var productos =new Array(producto1,producto2,producto3);

    imprimeDatos(productos);
}

function imprimeDatos(productos){
    var p=1;
    for(var i=0;i<3;i++){
        alert("Producto "+p+": -Código: "+productos[i].codigo+" -Nombre: "+productos[i].nombre+
        " -Precio: "+productos[i].precio)
        p++;
    }
}