//form_username
//form_name
//form_password
$('#signUpBlock').css('display','none')
$('#homePageBlock').css('display','none')
const renderer = new Renderer()
const api= new APIManager(renderer)

$("#signup_btn").on('click',async function(e){
    e.preventDefault()
    const username = $("#form_username").val()
    const name = $("#form_name_1").val()
    const password = $("#form_password_1").val()
    await api.signUpUser(username,password,name)
    $('#signUpBlock').css('display','none')
    $('#homePageBlock').css('display','block')

})

$("#signin_btn").on('click',async function(e){
    e.preventDefault()
    const username = $("#form_signin_username").val()
    const password = $("#form_signin_password").val()
    if(username && password)
    {
         api.getUserSignInDataFromDB(username,password)
        
        
    }
})
$("#switchToSignUp").on('click',function(){
    $('#signInBlock').css('display','none')
 $('#signUpBlock').css('display','block')

})

$("#switchToSignIn").on('click',function(){
    $('#signUpBlock').css('display','none')
    $('#signInBlock').css('display','block')


})


