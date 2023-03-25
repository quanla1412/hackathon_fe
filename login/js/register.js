
        // $(document).ready(function(){
            
        // });

        function LoadData(){
            var username = $('#username').val();
            var fullname = $('#fullname').val();
            var password = $('#password').val();
            $.ajax({
                url:'http://127.0.0.1:3000/accounts/register',
                type:'POST',
                data:{username:username,fullname:fullname,password:password},
                success:function(rs){
                    alert('success') ;
                    console.log(rs.username);
                    if (rs.success != null && rs.success == true) {
                        localStorage.setItem("username", rs.username);
                        window.location.href='/topic/topic.html';
                    }
                    else{
                        alert('dang ky that bai');
                        window.location.href='/login/sign-up.html';
                    }
                }
            });
        }

        function register (e){
            e.preventDefault ();
           LoadData();

        }
                