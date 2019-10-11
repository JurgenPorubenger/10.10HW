console.log("Alive2!");


document.querySelector("#log_btn").addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Click");

        // получаем данные формы
        let name = document.querySelector('#log_name').value;
        let pwd = document.querySelector('#log_pwd').value;
        // let direction = JSON.stringify({way});
        let formLogin= {name, pwd};
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
                    console.log(result+''+"HAS")
                    let massage = massageObj.massage;
                    let div = document.createElement('div');
                    div.className = "alert";
                    div.innerHTML = `<h1>${massage}</h1>`;
                    document.querySelector('.log').appendChild(div);
                }
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

    }
);