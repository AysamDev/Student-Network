
class APIManager {

    constructor()
     {

    }

    getUsersDataFromDB()
    {
        $.ajax({
            type:"GET",
            url: `/users`,
            success: async (ref) =>
            {
                this.users = await ref
            }
        });
    }

    getUserSignInDataFromDB(username,password)
    {
            $.ajax({
                type:"GET",
                url: `/userSignIn/${username}/${password}`,
                success: async (ref) =>
                {
                    console.log(ref)
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
                
             }
             
            })
        }
}
