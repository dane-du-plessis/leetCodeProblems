// function a() {
//     console.log(this)
// }
// var b = function() {
//     console.log(this)
// }

// a()
// b()

var person = {
    firstname: "John",
    lastname: "doe",
    getfullname: function() {
        let self = this;
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

var logname = function(lang1, lang2) {
    console.log('logged: ' + this.getfullname())
}

var logPersonName = logname.bind(perosn);

logname()