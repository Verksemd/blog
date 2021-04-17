const creationForm = document.getElementById('creationForm');
const authToken = "VerySecretToken";

creationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("http://temirkhan.nasukhov.me/api/posts",{
        method: 'post',
        body: JSON.stringify({
            title: formData.get('title'),
            content: formData.get('content')
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
        }).then((response) => response.json())
        .then(function(post) {
            window.location.replace("post.html#" + post.slug);
        }).catch(function (error) {
            console.log(error);
        }
    )
})