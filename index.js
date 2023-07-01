alert("Hello")
userDetails = {
    'username': "",
    'password': ""
}
getUser()
alert("Goodbye")

function getUser(){
    let username = prompt("Enter your username")
        while (validateUsername(username) === false) {
        username = prompt("your username must be less than 10")
        }
        if(username === null){
            return
        }

    let password = prompt("Enter your password")
        while (validatePassword(password) === false) {
            password = prompt("your password must be greater than 6")
        }
        if (password === null) {
            return
        }

    let confirmPassword = prompt("confirm your password")
        while(confirmPassword !== password){
            if (confirmPassword === null) {
                return
            } else {
                confirmPassword = prompt("password does not match")
            }
        }

    userDetails.username = username
    userDetails.password = password

    alert(`
     Your details are: 
     username: ${userDetails.username}
     password: ${userDetails.password}
    `)

}


function validateUsername(username){
    if (username === null){
        return
    }
    if(username.length > 10){
        return false
    } else {
        return true
    }
}

function validatePassword(password){
    if (password === null){
        return
    }
    if(password.length < 6){
        return false
    } else {
        return true
    }
}