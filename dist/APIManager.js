

class APIManager {

    constructor()
     {
        this.user = {}
    }

    getUsersDataFromDB()
    {
        $.ajax({
            type:"GET",
            url: `/users`,
            success: async (ref) =>
            {
               
            }
        });
    }
    getChallengesPerType(skill)
    {
        $.ajax({
            type:"GET",
            url: `/challenge:${skill}`,
            success:  (ref) =>
            {
               console.log(ref)
            }
        }); 
    }
    getUserSignInDataFromDB(username,password)
    {
            $.ajax({
                type:"POST",
                url: `/userSignIn/`,
                data:{username,password},
                success: async (ref) =>
                {
                    if(!ref){
                        //error handle
                        alert("Please enter your details correctly")
                        return
                    }
                    $('#signInBlock').css('display','none')
                    $('#homePageBlock').css('display','block')
                    this.user = await new User(ref.userName,ref.name,ref.skills,ref.rank,ref.challenges)
                },
                error: (err) => {
                    console.log(err)
                }
            });
    }
    async signUpUser(username,password,name)
    {
        const newUser = {
            username,   
            password,
            name
        }

        $.ajax({
            type:"POST",
            contentType: "application/json",
            url: `/userSignUp`,
            data: JSON.stringify(newUser),
            dataType: "json",
            success: (result) =>
             {
                
             },
             error: (err) =>
             {
                 console.log(err)
             }
             
             
            })
        }

        getLoggedInUserData()
        {
            return this.user
        }
}
