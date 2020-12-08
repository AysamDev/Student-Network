//form_username
//form_name
//form_password
$('#signUpBlock').css('display','none')
$('#homePageBlock').css('display','none')
const api= new APIManager()
$("#signup_btn").on('click',function(e){
    e.preventDefault()
    const username = $("#form_username").val()
    const name = $("#form_name_1").val()
    const password = $("#form_password_1").val()
    api.signUpUser(username,password,name)
    $('#signUpBlock').css('display','none')
    $('#homePageBlock').css('display','block')

})

$("#signin_btn").on('click',function(e){
    e.preventDefault()
    const username = $("#form_signin_username").val()
    const password = $("form_signin_password").val()
    api.getUserSignInDataFromDB(username,password)
    $('#signInBlock').css('display','none')
    $('#homePageBlock').css('display','block')

})
$("#switchToSignUp").on('click',function(){
    $('#signInBlock').css('display','none')
 $('#signUpBlock').css('display','block')

})

$("#switchToSignIn").on('click',function(){
    $('#signUpBlock').css('display','none')
    $('#signInBlock').css('display','block')


})



