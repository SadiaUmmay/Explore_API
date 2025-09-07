
const loadData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    //promise of response
    .then((res) => res.json())
    //promise of json data
    .then((data) => console.log(data))
    
}
const loadPost=()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then((response)=> response.json())
    .then((post)=> displayPost(post))
};
const displayPost =(posts)=>{
    posts.forEach((post) => {
        console.log(post)
    });
}