const inputElements = document.querySelectorAll(".form-class [name]");
const alertDiv = document.getElementById("alert_div")
const alertHeader = document.getElementById("alert_header")
const alertmessage = document.getElementById("allert_message")


function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee)
}
function onChange(event) {
    if (event.target.name == "salary") {
        if(+event.target.value < 1000 || +event.target.value > 40000){
            addAlert("Wrong data", `Entered data in feld ${event.target.name}: ${event.target.value} is not correct, salary could be from 1000 to 40000`, 5000)
            event.target.value=''

        }
    } else if(event.target.name == "birthDate") {
        value = event.target.value
        yearValue = +value.split("-")[0]
        currentYear = new Date().getFullYear()
        if(yearValue < 1950 || yearValue > currentYear) {
            addAlert("Wrong data", `Entered data in feld ${event.target.name}: ${event.target.value} is not correct, year could be from 1950 to ${currentYear}`, 5000)
            event.target.value=''
        }
       

    }
}

function addAlert(header, message, time) {
    alertHeader.innerHTML = header
    alertmessage.innerHTML = message
    alertDiv.hidden = false
    setTimeout(() => {
        alertDiv.hidden = true
        alertHeader.innerHTML = ""
        alertmessage.innerHTML = ""
    
    }, time)
}