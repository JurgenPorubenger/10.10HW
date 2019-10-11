console.log("Alive!");


document.querySelector("#reg_btn").addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Click");
        // получаем данные формы
        let username = document.querySelector('#reg_name').value;
        let email = document.querySelector('#reg_email').value;
        let pwd = document.querySelector('#reg_pwd').value;
        // let direction = JSON.stringify({way});
        let formRegister= {username, email, pwd};
        console.log(username);
        console.log(email);
        console.log(pwd);
        console.log(formRegister);

        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formRegister),
        })
            .then((response)=> {
                if (response.status === 200) {
                    console.log("response");
                    return  response.json()
                }
            })
            .then(result=>{
                // localStorage.setItem('result', result);
                console.log(`${result} RESULT`)
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

    }
);