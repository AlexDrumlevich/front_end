const inputElementsAdd = document.querySelectorAll("#add_section [name]");
const inputElementsShowBySalary = document.querySelectorAll("#show_by_salary_section [name]");
const alertDiv = document.getElementById("alert_div")
const alertHeader = document.getElementById("alert_header")
const alertmessage = document.getElementById("allert_message")
const mainMenuSections = document.getElementsByClassName("main_menu_sections")
const mainMenuControllButtons = document.querySelectorAll(".control_button")
const containerEmployeesBySalary = document.getElementById("container_employees_by_salary")
const containerEmployeesAll = document.getElementById("container_employees_all")
let employees = []

function show(event) {
    const button = event.target
    Array.from(mainMenuControllButtons).forEach(e => e.classList.remove("active_button"))
    button.classList.add("active_button")


    if(button.getAttribute("tag") == "show_all") {
        showEmployees(employees, containerEmployeesAll)
    } 

    const mainMenuSectionsArray = Array.from(mainMenuSections)
    mainMenuSectionsArray.forEach(e => e.hidden = !(e.getAttribute("tag") == button.getAttribute("tag")))
}

function onSubmit(event) {
    event.preventDefault();
    const target = event.target
    if(target.id == "employee-form") {
    
        const employee = Array.from(inputElementsAdd).reduce(
            (res, cur) => {
                res[cur.name] = cur.value;
                return res;
        }, {}
        )
        employees.push(employee)
        console.log(employees)
 
    } else if (target.id == "employee_by_salary") {
        const minMax = Array.from(inputElementsShowBySalary).reduce((res, e) => {
            res[e.name] = +e.value
            return res
        }, {})
        console.log(minMax)
        const res = employees.filter(e => e.salary >= minMax.min_salary && e.salary < minMax.max_salary)
        console.log(res)
        showEmployees(res, containerEmployeesBySalary)
    }
}

function showEmployees(employees, inside) {
    const items = employees
        .map(e => `<li> name: ${e.employee_name} email: ${e.email} birth date: ${e.birthDate} department: ${e.department}</li>`)
        .join("")
    inside.innerHTML = `<ul>${items}</ul>` 

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