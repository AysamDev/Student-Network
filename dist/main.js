//form_username
//form_name
//form_password
const api= new APIManager();
$("#signup_btn").on('click',function(){
    const username = $("#form_username").val()
    const name = $("#form_name").val()
    const password = $("#form_password").val()
 api.signUpUser(username,password,name)

})
