console.log("Alive!");


document.querySelector("#reg_btn").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Click");
    // получаем данные формы
    let username = document.querySelector('#reg_name').value;
    let email = document.querySelector('#reg_email').value;
    let pwd = document.querySelector('#reg_pwd').value;
    // let direction = JSON.stringify({way});
    if (username&&email&&pwd) {
        document.querySelector('#reg_name').style = "none";
        document.querySelector('#reg_email').style = "none";
        document.querySelector('#reg_pwd').style = "none";
            let formRegister = {username, email, pwd};
            fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(formRegister),
            })
                .then((response) => {
                    if (response.status === 200) {
                        console.log("response");
                        return response.json()
                    }
                })
                .then(result => {
                    // localStorage.setItem('result', result);
                    console.log(`${result} RESULT`)
                })
                .catch(function (err) {
                    console.log('Fetch Error :-S', err);
                });
        } else {
        document.querySelector('#reg_name').style.border = "1px solid red";
        document.querySelector('#reg_email').style.border = "1px solid red";
        document.querySelector('#reg_pwd').style.border = "1px solid red";

        // user.focus();
        alert('Fill in the input fields!')
        }
    }
);