function LoadData(){
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        url:'http://127.0.0.1:3000/accounts/login',
        type:'POST',
        data:{username:username,password:password},
        success:function(rs){
            alert('success') ;
            console.log(rs.username);
            if (rs.success != null && rs.success == true) {
                localStorage.setItem("fullname", rs.fullname);
                window.location.href='/topic/topic.html';
            }
            else{
                alert('dang nhap that bai');
                window.location.href='/login/login.html';
            }
        }
    });
}

function login (e){
    e.preventDefault();
    LoadData();
}

