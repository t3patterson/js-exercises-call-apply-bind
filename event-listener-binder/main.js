// reset
if ( window.location.hash.length > 1){
  window.location.hash = '';
  document.querySelector('.greeting-container').innerHTML = ''
  document.querySelector('.profiles-container').innerHTML = ''

}

//PART 1a
//  get GreetingView to work using the .bind method on the 
//  GreetingView.renderHTML function


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Inspect but don't touch
var messages = {
  _nat_data: {
    us: {
      greeting: "Hi Welcome to our site.",
      team: "Meet our team"
    },
    es: {
      greeting: "Bienvenidos a nuestra página web",
      team: "Conozca a nuestro equipo"
    },
    de: {
      greeting: "Willkommen auf unserer website",
      team: "Unser team"
    },
    fr: {
      greeting: "Bienvenue sur notre page web",
      team: "Rencontrer notre équipe"
    }
  },
}

var ViewTemplate_Greeting = {

  renderHTML: function(arg, msgs){
    var container_el = document.querySelector('.greeting-container');

    var htmlStr = ''
    console.log(arg)
    
    if ( typeof arg.target  === 'object'){
       natVal = arg.target.dataset['nationality']
       htmlStr =  "<h2>"+this._nat_data[natVal].greeting +"</h2>"
       htmlStr += '<h5>'+this._nat_data[natVal].team+'</h5>'
       
    } else {
       natVal = arg
       console.log(msgs)
       htmlStr =  "<h2>"+msgs._nat_data[natVal].greeting +"</h2>"
       htmlStr += '<h5>'+msgs._nat_data[natVal].team+'</h5>'
    }
   
    container_el.innerHTML = htmlStr
    console.log(natVal)
    window.location.hash = natVal
  }
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



// !!!!!!!!!!!
// ANSWER


var us_btn_el = document.querySelector("button[data-nationality='us']")
var de_btn_el = document.querySelector("button[data-nationality='de']")
var es_btn_el = document.querySelector("button[data-nationality='es']")
var fr_btn_el = document.querySelector("button[data-nationality='fr']")


us_btn_el.addEventListener( 'click', ViewTemplate_Greeting.renderHTML.bind(messages)  )
de_btn_el.addEventListener( 'click', ViewTemplate_Greeting.renderHTML.bind(messages)  )
es_btn_el.addEventListener( 'click', ViewTemplate_Greeting.renderHTML.bind(messages)  )
fr_btn_el.addEventListener( 'click', ViewTemplate_Greeting.renderHTML.bind(messages)  )
//...or iterate...



//PART 2 
//  Create a hash-change listener and 
//  bind The Data Model to the ProfileView.renderHTML 
//   method and Pass the Profiles View as an argument 

//   (this will require only one line of code)

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
var DataModel = {
  _url: "http://randomuser.me/api/?results=6",

  _view: function(v){

  },

  fetchData : function(nat){
    var fullURL = this._url
    return $.getJSON(fullURL + '&nat='+nat)
  }
}

var ProfilesView = {

  _el: '.profiles-container',
  _data: null,

  _templateHTML: function(userInfoList){
    var bigHTMLstring = '' 
    for (var i = 0 ; i < userInfoList.length; i++ ){
      var u = userInfoList[i].user
      bigHTMLstring += "<div>"
      bigHTMLstring +=   "<img src='"+u.picture.medium +"'>"
      bigHTMLstring +=   "<h5>"+ u.name.first.toUpperCase()+" "+ u.name.last.toUpperCase()+ "</h5>"
      bigHTMLstring +=   "<p><small>"+u.location.city+"</small><br/>"+ u.email +"</p>"
      bigHTMLstring += "</div>"
    }
    
    return bigHTMLstring
  },

  _writeToDOM: function(responseData){
    var profilesList = responseData.results
    console.log(this._view)
    console.log(responseData)
    var htmlForDOM = this._view._templateHTML(profilesList)
    var container_el = document.querySelector(this._view._el)
    container_el.innerHTML = htmlForDOM
  },

  renderHTML: function(view){

    if(this._url){
      this._view = view
      if (window.location.hash.length < 1){ return } 
      var natVal = window.location.hash.substr(1)
      this.fetchData(natVal).then(this._view._writeToDOM.bind(this))
    } else {
      this._writeToDOM(this._data)
    }
  }
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// !!!!!!!!!!!
// ANSWER
window.addEventListener('hashchange', ProfilesView.renderHTML.bind(DataModel, ProfilesView) )
// !!!!!!!!!!!


