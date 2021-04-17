const postLink = "http://temirkhan.nasukhov.me/api/posts/" + window.location.hash.substr(1);
fetch(postLink)
    .then((resp) => resp.json())
    .then(showPost)


function showPost(post) {
    let content = '';
    content = content + preparePost(post);

    let startingPlace = document.getElementById("postColumn");
    startingPlace.insertAdjacentHTML("afterbegin", content)
}

function preparePost(post) {
    return '<h1 class="mt-4">' + post.title + '</h1>\n'+
    '<p class="lead">by <a href="#about">' + post.author +'</a></p>\n' +
        '<hr>\n' +
        '<p>Posted on January 1, 2019 at 12:00 PM</p>\n' +
    '<hr>\n'+
    '<p class="lead pb-3">' + post.content + '</p>\n' +
    '<hr>\n';
}
