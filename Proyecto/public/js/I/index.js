// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: 'AIzaSyCbA5JTW8UrlUXv1Ibpd2j6YBA4-x1ukQQ',
  authDomain: 'proyecto-web-b.firebaseapp.com',
  databaseURL: 'https://proyecto-web-b.firebaseio.com',
  projectId: 'proyecto-web-b',
  storageBucket: 'proyecto-web-b.appspot.com',
  messagingSenderId: '182037651559',
  appId: '1:182037651559:web:2586ee7dd307c71c9bf4c2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var txtname = document.getElementById('name');
var Sñor = document.getElementById('Sñor');
var Listado = document.getElementById('Listado');

function agregarDatos() {
  db.collection('Pedidos')
    .add({
      nombre: txtname.value,
      Cliente: Sñor.value,
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      alert('datos agregados exitosamente', docRef.id);
      limpiarDatos();
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });

  //console.log(`el nombre es : ${txtname.value} y el apellido es, ${apellidos.value}`);
}

leerDatos();

function leerDatos() {
  db.collection('Pedidos')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        Listado.innerHTML += `
          <tr>
            <td>  ${doc.data().nombre} </td>
            <td> ${doc.data().Cliente} </td>
            <td><button onclick="eliminar('${
              doc.id
            }')" class="btn btn-danger"> <i class="fa fa-trash-o" aria-hidden="true"></i></button><td>
          <tr>

        `;
        console.log(doc.id, ' => ', doc.data());
      });
    })
    .catch(function (error) {
      console.log('Error: ', error);
    });
}
function limpiarDatos() {
  txtname.value = '';
  Apellido.value = '';
}

function eliminar(id) {
  db.collection('Pedidos')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Pedido eliminado!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
}
