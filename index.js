var LoggingConstructor = function(superSecret){
  var embeddedSecret = superSecret 
    
  var __hasWhatItTakes = function(){
    console.log('this user has what it takes!')
    return true
  }

  var logToDOM = function(el){
    var _el = document.querySelector(el)
    if ( __testForSecret() ) {
      
    } else {
      _el = document
    }
  }

  var logToConsole = function(){
    if ( __hasWhatItTakes() ){
      console.log('All About User')
      console.log('---------------')
      console.log('user         -- ', this.username || this.user || this.email)
      console.log('age          -- ', this.age || this.dob)
      console.log('memberSince  -- ', this.registered || this.dob)
    
  }

  this.logInfo = function(domEl){
    if ( __hasWhatItTakes() ) { 
      logToConsole(); 

    } else {
      // logToDOM(domEl)
    }
  }

}


var LoggerService =  new LoggingConstructor()

console.log(LoggerService)

var data_Object = {
   gender: "female",
   secretKey: '38bbs9jsz2298'
   username: "blackcat297",
   nat: "DE",
   registered: 1029044513,
   dob: 345970316,
   phone: "01-14-61-91-93",
   cell: "06-49-73-73-33",
   picture: {
       large: "https://randomuser.me/api/portraits/women/40.jpg",
       medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
       thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg"
   }
}

var record2_API_1 = {
   gender: "male",
   secretKey: '83nns8873s'
   username: "lazyrabbit954",
   nat: "MX",
   registered: 1003300218,
   dob: 1375872434,
   phone: "956-052-019",
   cell: "661-317-888",
   picture: {
       large: "https://randomuser.me/api/portraits/men/9.jpg",
       medium: "https://randomuser.me/api/portraits/med/men/9.jpg",
       thumbnail: "https://randomuser.me/api/portraits/thumb/men/9.jpg"
   }
}

var record2_API_1 {
  gender: "female",
  email: "brooklyn.green@example.com",
  username: "crazygorilla591",
  password: "leigh",
  registered: 1356676443,
  dob: 717634534,
  phone: "(412)-248-3754",
  cell: "(497)-156-2064",
  picture: {
  large: "https://randomuser.me/api/portraits/women/52.jpg",
  medium: "https://randomuser.me/api/portraits/med/women/52.jpg",
  thumbnail: "https://randomuser.me/api/portraits/thumb/women/52.jpg"
}




















