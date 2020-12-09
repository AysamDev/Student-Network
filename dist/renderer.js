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
        $('#challenges-block').children().remove()
        $('#skills-block').css('display','block')
        $('#skills-block').children().remove()
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
        $('.containerProfile').children().remove()
        const newHtml  = this.userProfileTemplate(userData)
        $('.containerProfile').append(newHtml)
    }
    renderUserChallengesPerType(challenges)
    {
        $('#challenges-block').children().remove()
        $('#skills-block').css('display','none')
        $('#challenges-block').css('display','block')
        const newHtml = this.userChallengePerTypeTemplate({challenges})
        $('#challenges-block').append(newHtml)
    }
    

}