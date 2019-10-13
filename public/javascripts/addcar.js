console.log("Alive3!");
document.querySelector("#add_car").addEventListener("click", function (e) {
    e.preventDefault();
    let ls = localStorage.getItem('userStorage');
    console.log(ls);
    fetch('/api/addcar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: ls,
    }).then(data=>{
        return data.json()
    }).then(data2=>{

        console.log(JSON.parse(data2));
    }).catch(err=>
        console.log('Fetch Error :-S', err))
});