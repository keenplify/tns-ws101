const adminLogin = document.querySelector("#admin-login")

document.onkeypress = function (e) {if ((e || window.event).key == '`') showAdminPopup()};

function showAdminPopup() {
    if (adminLogin.style.visibility == "hidden") {
        adminLogin.style.visibility = "visible"
        adminLogin.classList.add('swipe-in')
        setTimeout(() => {
            adminLogin.querySelector("#username").select()
        }, 100);
    }
    else {
        adminLogin.classList.remove('swipe-in')
        adminLogin.style.visibility = "hidden"
    }
}