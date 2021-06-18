

    function manage(txt, txt2) {
        var bt = document.getElementById('button');
        if (txt.value != '' && txt2.value != '') {
            bt.disabled = false;
        }
        else {
            bt.disabled = true;
            
        }
    }

    function next() {
        user_name = document.getElementById("input1").value;
        
        localStorage.setItem("username", user_name)
        window.open('main_page.html')
    }