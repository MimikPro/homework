fetch( ' http://localhost:3000/comments').then((res) => (res.json())).then((res) => {
    console.log(res)
    let list = "";
    res.forEach((item) => {
        list = `${list}
        <div>            
            <div>${item.title}</div>
             <div>${item.body}</div>
             <img src="${item.url}"</img>
        </div>
        `
    });
document.getElementById("list").innerHTML = list;
})