function fetchjason(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data =>{
           console.log(data);
           const html=data.map(user=>{
            return `<div><li> UserId:${user.userId}</li>
            <li> Id:${user.id}</li>
            <li> Title:${user.title}</li>
            <li> Body:${user.body}</li></div>`
           
        })
        .join('');
           document.querySelector("#json").insertAdjacentHTML("afterbegin",html);
         })
    .catch(e=>{
        console.log(e);
    });

    
     }
    fetchjason();
    