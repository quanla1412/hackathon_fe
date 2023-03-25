window.onload = (event) => {
    const selDeThi = document.getElementById('selDeThi');

    selDeThi.innerHTML = '';

    fetch('http://localhost:3000/matrices/names')
    .then(response => response.json())
    .then(data => {
      const matrices = data.matrices;
      console.log('matrices',matrices);
    
      var render = '';
      matrices.forEach(matrix => {
        render = render.concat('<option value="' + matrix._id +'">' + matrix.name + '</option>');
      })
      selDeThi.innerHTML = render;
      renderSoCauVaTime(matrices[0]._id);
    })
    .catch(error => {
      //handle error
    });
}

function renderSoCauVaTime(matrix_id) {
    fetch('http://localhost:3000/matrices/' + matrix_id)
    .then(response => response.json())
    .then(data => {        
        console.log('data', data)
        const inpSoCau = document.getElementById('inpSoCau');
        const inpTime = document.getElementById('inpTime');

        inpSoCau.value = data.total;
        inpTime.value = data.time;

        const btnChuyenTrang = document.getElementById('btnChuyenTrang');
        btnChuyenTrang.href = '../dethi.html?matrix_id=' + matrix_id;
    })
    .catch(error => {
    //handle error
        console.log('http://localhost:3000/details/' + matrix_id)
    })
}