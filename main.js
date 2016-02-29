//PART 1 -- 

// Create an instance of the LoggingBlackBox constructor called LOGGER_SERVICE
//    and use `.call()` to execute the logInfo method on all three objects

//------------------------------------------
// Don't touch me pls, thx
var LoggingBlackBox = function(superSecret){
  
  var __handleUser = function(me){
    return me.username || me.user || me.email
  }

  var __handleAge = function(me){
    var num = me.age || me.dob
    if ( num > 150 ){
      return Math.floor(num / 60 / 60 / 24 / 365)
    } else {
      return num
    }
  }

  var __handleGender = function(self){
    return self.gender || self.sex
  }

  var __handleStatus = function(self){

  }

  var appendToDOM = function(self){
    var _el = document.querySelector("#wrapper")

    var htmlStr = ''
        
    if (self.isActive || self.active){
      
      var stringObj = JSON.stringify({
        user: __handleUser(self),
        age: __handleAge(self),
        gender: __handleGender(self)
      },null,2)

      htmlStr += "<pre class= '"+status +"'"+">"
      htmlStr +=    stringObj
      htmlStr +=  "</pre>"
    }

    console.log(_el)
    if (_el) { _el.innerHTML  +=  htmlStr }
  }

  var logToConsole = function(self){
      console.log('All About User')
      console.log('---------------')
      console.log('user         -- ', __handleUser(self))
      console.log('age          -- ', __handleAge(self))
      console.log('gender       -- ', __handleGender(self))
      console.log('=======================')
  }

  this.logInfo = function(){
      var contextObj = this
      logToConsole(contextObj)
      appendToDOM(contextObj)
  }
}


/////// var LOGGER_SERVICE =  new LoggingBlackBox()


var data_Object = {
   gender: "female",
   secretKey: '38bbs9jsz2298',
   username: "blackcat297",
   nat: "DE",
   registered: 1029044513,
   dob: 745970316,
   phone: "01-14-61-91-93",
   cell: "06-49-73-73-33",
   active: false,
   picture: {
       large: "https://randomuser.me/api/portraits/women/40.jpg",
       medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
       thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg"
   }
}

var record1_API_2 = {
   gender: "male",
   user: "lazyrabbit954",
   email: "rabbiter2@mail.com",
   nationality: "MX",
   createdAt: 1003300218,
   age: 28,
   isActive: true
}

var memberRecord = {
  email: "darrell.west@example.com",
  employer: "guinness",
  dob: 752129825,
  nat: 'IR',
  title: 'Foreman',
  _emp_id: '27b057aed8278b9600',
  active: true,
  user: 'orangelion550',
  sex: 'male'
}

////// LOGGER_SERVICE.logInfo.call(data_Object)
////// LOGGER_SERVICE.logInfo.call(record1_API_2)
////// LOGGER_SERVICE.logInfo.call(memberRecord)


// PART 2 
//    Create another object that you could pass to .call and will 'log' and 'appendToTheDOM' successfully
//    (Note: you will have to study the appendToDOM function inside the LoggingBlackBox constructor.)


















