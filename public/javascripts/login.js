console.log("Alive2!");


document.querySelector("#log_btn").addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Click");

        // получаем данные формы
        let username = document.querySelector('#log_name').value;
        let pwd = document.querySelector('#log_pwd').value;
        let formLogin= {username, pwd};
        // console.log(formLogin);

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formLogin),
        })
            .then((response)=> {
                if (response.status === 200) {
                    console.log("response");
                    return  response.json()
                }
            })
            .then(result=> {
                let massageObj = JSON.parse(result);
                if(massageObj.massage){
                    document.querySelector('#reg_name').style.border = "1px solid red";
                    document.querySelector('#reg_email').style.border = "1px solid red";
                    document.querySelector('#reg_pwd').style.border = "1px solid red";
                    console.log(result+''+"HAS");
                    let massage = massageObj.massage;
                    alert(massage);
                } else {
                    console.log("LOcalstorage");
                    localStorage.setItem('userStorage', result);
                }
            })
            .catch(err=> {
                console.log('Fetch Error :-S', err);
            });

    }
);