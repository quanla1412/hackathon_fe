window.onload = (event) => {
    const params = new URLSearchParams(window.location.search);
    console.log(params.get('matrix_id'));
}