progressLoading();
fetch("http://temirkhan.nasukhov.me/api/posts")
    .then((resp) => resp.json())
    .then(showPosts)
    .then(finishLoading);

function showPosts(postsList) {
    let content = '';
    for (const index in postsList) {
        const post = postsList[index];
        console.log(post);
        content = content + renderPost(post);
    }

    let parentBlock = document.getElementById("heading");
    parentBlock.insertAdjacentHTML("afterend", content)

}

function renderPost(post) {
    return '<div class="card mb-4">\n' +
        '          <div class="card-body">\n' +
        '            <h2 class="card-title"><a href="post.html#' + post.slug + '" class="title">'+ post.title + '</a></h2>\n' +
        '            <p class="card-text content">' + post.preview + '</p>\n' +
        '          </div>\n' +
        '          <div class="card-footer text-muted">\n' +
        '            Posted on January 1, 2020 by <span class="author">'+ post.author +'</span>\n' +
        '          </div>\n' +
        '        </div>\n';
}

// Wait for window load
$(window).load(function() {
    // Animate loader off screen
    $("#loader").animate({
        top: -200
    }, 1500);
});




