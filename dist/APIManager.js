
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

    getUserSignInDataFromDB(user_name,password)
    {
            $.ajax({
                type:"GET",
                url: `/userSignIn/${user_name}/${password}`,
                success: async (ref) =>
                {
                    
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
            dataType: "json",
            url: `/userSignUp`,
            data: JSON.stringify(newUser),
            success: (result) =>
             {
                window.location.replace("./index.html");
             }
             
            })
    }

}
