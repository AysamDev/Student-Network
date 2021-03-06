

class APIManager {

    constructor(renderer)
     {
        this.renderer = renderer
        this.user = {}
        this.currentSkillChallenges = []
        this.exploreSkills = []
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
    getChallengesPerSkill(type)
    {
        console.log(type)
        $.ajax({
            type:"POST",
            url: `/challenges/`,
            data: {skill: type},
                success:  (ref) =>
                {
                    if(!ref){
                        alert("there are no challenges found for this type of skill")
                        return
                    }
                   this.currentSkillChallenges = ref
                   this.renderer.renderUserChallengesPerType(this.currentSkillChallenges)
                },
                error: (err) => {
                    console.log(err)
                }
        }); 
    }
    getNonAddedUserSkills()
    {
        const skills = this.user.skills
        console.log(skills)
        $.ajax({ 
            type:`GET`,
            url: `/explore/${skills}`,
                success: (ref) =>
                {
                    if(!ref){
                        alert("there are no Skills left to add")
                        return
                    }
                   this.exploreSkills = ref
                   this.renderer.renderUsersAddSkill(this.exploreSkills)
                },
                error: (err) => {
                    console.log(err)
                }
        }); 
    }
    addSkillToUser(skill)
    {
        const username = this.user.username
        $.ajax({
            type:"PUT",
            url: `/addSkill/${skill}/${username}`,
            success:   (result) =>
            {
                const index =  this.exploreSkills.findIndex(r => r===skill)
                let a = this.exploreSkills.splice(index,1)
                this.user.skills.push(a[0])
                this.renderer.renderUsersAddSkill(this.exploreSkills)
                this.renderer.renderUserProfile(this.user)
            },
            error: (err) => {
                console.log(err)
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
                    this.user = await new User(ref.username,ref.name,ref.skills,ref.rank,ref.challenges)
                    this.renderer.renderUserSkills(this.user)
                    this.renderer.renderUserProfile(this.user)
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
                 this.user = result
                 this.renderer.renderUserSkills(this.user)
                 this.renderer.renderUserProfile(this.user)
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

        getLoggedInUserChallenges()
        {
            return this.currentSkillChallenges
        }
}
