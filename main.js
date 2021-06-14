    function next() {
        user_name = document.getElementById('input1').value
        localStorage.setItem('user_name', user_name)
        window.open("main_page.html")
    }