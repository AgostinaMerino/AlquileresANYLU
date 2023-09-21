let titulo = document.getElementById("titulo") 
titulo.innerHTML = "ANYLU"   
console.log(titulo.innerHTML) 

class Propiedad{
    constructor(tipoProp, numPersonas, descripcion, direccion){
        this.tipoProp = tipoProp
        this.numPersonas = numPersonas
        this.descripcion = descripcion
        this.direccion = direccion
    }
}

const props = []
props.push(new Propiedad(
    'Casa',
    '4 a 6 personas',
    'Casa de 2 plantas, con 2 habitaciones en piso superior, terraza y cochera privada',
    'Av. Golfo San Matías 125, Playas Doradas'))
props.push(new Propiedad(
    'Departamento',
    '2 a 4 personas',
    'Departamento en planta superior con amplia habitacion que cuenta con cama matrimonial y cama tipo marinera, balcón terraza y cochera',
    'Av. Golfo San Matías 175, Playas Doradas'))


    for(const prop of props){
    let casas = document.getElementById('propiedades')
    let casa = document.createElement('div')
    casa.innerHTML=`
        <div class="propiedad">
            <div class="card text-bg-light mb-3">
                <div class="card-header">Tipo de propiedad: ${prop.tipoProp}</div>
                <div class="card-body">
                    <h5 class="card-title">Capacidad: ${prop.numPersonas}</h5>
                    <p class="card-text">Descripcion: ${prop.descripcion}</p>
                    <p class="card-text">Direccion: ${prop.direccion}</p>
                </div>
            </div>
        </div>
    `

    casas.appendChild(casa)
}

//validar formulario para evitar recarga del sitio al enviar

let botonEnviar = document.getElementById('form')
botonEnviar.addEventListener('submit', validarFormulario) 
function validarFormulario(evt) {
    evt.preventDefault()                     
}


let obtenerDatos = () => {
    let error = validar()
    if (error == true) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor complete los campos requeridos',
            imageUrl: "https://www.quever.news/u/fotografias/m/2020/12/24/f768x1-4793_4920_0.jpg",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "campoIncompleto"
        })
    } else {
        Swal.fire({
            title: '¡Excelente!',
            text: 'En breve nos comunicaremos para ofrecerte mas información',
            imageUrl: "https://media.lacapital.com.ar/p/f2d9862954fe0e332a2052192197c945/adjuntos/203/imagenes/030/624/0030624559/642x0/smart/friends-chandlerjpg.jpg",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "campoCompleto"
        })
    }
}

let validar = () => {
    let nombre = document.getElementById('nomYApe')
    let telef = document.getElementById('telefono')
    let error = false

    if (nombre?.value == 'null' || nombre?.value == 'undefined' || nombre?.value == '' || telef?.value == '' || telef?.value <= 999999) {
        error = true
    } else{
    }
    return error
}

botonEnviar.addEventListener('submit', obtenerDatos);

let inputNom = document.getElementById('nomYApe') 
inputNom.addEventListener('change',function(){
    let nomApLS = localStorage.setItem('nomApe',inputNom.value)
})
let inputTel = document.getElementById('telefono')
inputTel.addEventListener('change',function(){
    let telefLS = localStorage.setItem('tel',JSON.stringify(inputTel.value))
})

let nomApe
let nomApeLS = localStorage.getItem('nomApe')
// nomApeLS ? nomApe = nomApeLS : console.log('nombre y apellido: ' + nomApe || 'Aun no se ha registrado ningun nombre')

let tel
let telLS = localStorage.getItem('tel')
// telLS ? tel = telLS : console.log("telefono:" + tel || 'Aun no se ha registrado ningun telefono')

if(nomApeLS && telLS){
    nomApe = nomApeLS
    tel = JSON.parse(telLS)
    let bienvenidaUsuario = document.getElementById('datosCliente')
    let saludoUsuario = document.createElement('div')
    saludoUsuario.innerHTML=`
        <p> \n ¡Hola de nuevo ${nomApe}, recordá que ya enviaste una consulta adjuntando el número de telefono ${tel}!</p>
    `
    bienvenidaUsuario.appendChild(saludoUsuario)
}
else {
}


let fechaIng = document.getElementById('fechaIn')
fechaIng.onchange= ()=>{
    let ingreso=fechaIng.value
}

let fechaSali = document.getElementById('fechaSal')
fechaSali.onchange= ()=>{
    let salida = fechaSali.value
}

