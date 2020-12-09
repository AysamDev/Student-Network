//form_username
//form_name
//form_password
$('#signUpBlock').css('display','none')
$('#homePageBlock').css('display','none')
const renderer = new Renderer()
const api= new APIManager(renderer)

$("#signup_btn").on('click',async function(){
    const username = $("#form_username").val()
    const name = $("#form_name_1").val()
    const password = $("#form_password_1").val()
    if(username && name && password)
    {
        api.signUpUser(username,password,name)
        $('#signUpBlock').css('display','none')
        $('#homePageBlock').css('display','block')
    }
    else
    {
        alert("Please Enter Correct CodeWards Username And All Details")
    }
    
})

$("#signin_btn").on('click',async function(){
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

$('#skills-block').on('click',".fa-plus",async function(){
    const skill = await $(this).parent('.card_img').siblings('.card_title').text()
    console.log(skill)
    api.getChallengesPerSkill(skill)
})


$('#HomeNav').on('click', function(){
    const user = api.getLoggedInUserData()
    console.log(user)
    renderer.renderUserSkills(user)
    renderer.renderUserProfile(user)
})
