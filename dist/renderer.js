class Renderer
{
    constructor()
    {

    }
    renderUserSkills(userData)
    {
        $('#signInBlock').css('display','none')
        $('#homePageBlock').css('display','block')
          console.log(userData)
          const skills = userData.skills
          const source = $('#skills-template').html();
          const template = Handlebars.compile(source);
          const newHTML = template({skills});
          // append our new html to the page
          $('#skills-block').append(newHTML);
    }
    

}