var containerel = document.getElementById("container")

function fetch_1() {
    url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
        .then(res =>
            res.json()
        )
        .then(data => {
            // console.log(data)
            for (let val of data){
                count=val.title
                bodyel=val.body
                let headingel=document.createElement("h1")
                headingel.textContent=count
                headingel.style.color="red"
                containerel.append(headingel)
                let main=document.createElement("p")
                main.textContent=bodyel
                main.style.color="green"
                containerel.append(main)
                let horizontalel=document.createElement("hr")
                containerel.append(horizontalel)
            }
        })
};