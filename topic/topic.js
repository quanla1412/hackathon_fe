window.onload = (event) => {
    var txtTenMaTran = document.getElementById('txtTenMaTran');
    var quantity = document.getElementById('quantity');
    var txttime = document.getElementById('txtnumber');

    fetch('http://localhost:3000/matrices')
    .then(response => response.json())
    .then(data => {
        txtTenMaTran.value = data[0].name;
        quantity.value = data[0].total;
        txttime.value = data[0].time;
    })
    .catch(error => {
        //handle error
    });
}