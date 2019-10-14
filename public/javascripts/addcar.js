console.log("Alive3!");

document.querySelector("#add_car").addEventListener("click", function (e) {
    e.preventDefault();
    let ls = JSON.parse(localStorage.getItem('userStorage'));
    console.log(ls);
    if(ls.hasOwnProperty('_id')){
        document.querySelector('.add_car_input').style.display = "flex";
        let model = document.querySelector('#model').value;
        let price = document.querySelector('#price').value;
        let car = {model, price};

        fetch('/api/addcar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(car),
        }).then(data=>{
            return data.json()
        }).then(data2=>{
            console.log(JSON.parse(data2));
        }).catch(err=>
            console.log('Fetch Error :-S', err))
    }else{
        console.log('NONO')
    }

});