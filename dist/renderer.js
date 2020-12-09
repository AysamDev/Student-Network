class Renderer
{
    constructor()
    {
        this.userSkillsSource = $('#skills-template').html()
        this.userSkillsTemplate = Handlebars.compile(this.userSkillsSource)

        this.userProfileSource = $('#profile-template').html()
        this.userProfileTemplate = Handlebars.compile(this.userProfileSource)
      
        this.userChallengePerTypeSource = $('#challenges-template').html()
        this.userChallengePerTypeTemplate = Handlebars.compile(this.userChallengePerTypeSource)
        
    }
    renderUserSkills(userData)
    {
        $('#signInBlock').css('display','none')
        $('#homePageBlock').css('display','block')
          console.log(userData)
          const skills = userData.skills
          const newHTML = this.userSkillsTemplate({skills});
          // append our new html to the page
          $('#skills-block').append(newHTML);
    }
    renderUserProfile(userData)
    {
        const newHtml  = this.userProfileTemplate(userData)
        $('.containerProfile').append(newHtml)
    }
    renderUserChallengesPerType(challenges)
    {
        $('#skills-block').css('display','none')
        $('#challenge-Block').css('display','block')
        const newHtml = this.userChallengePerTypeTemplate({challenges})
        $('#challenge-Block').append(newHtml)
    }
    

}