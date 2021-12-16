const app = {};

app.init = () => {
    app.getComment();
};

const form = document.querySelector(".commentForm");
const commentElement = document.querySelector(".comments .wrapper")


app.getComment = () => {
    form.addEventListener("submit",function(event){
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const comment = document.querySelector("#comment").value;
        app.postComment(name,comment);
        form.reset();
    
    })
};

app.postComment = (name,comment) => {
    // This way of getting the new date was learned from https://tecadmin.net/get-current-date-time-javascript/ and https://flaviocopes.com/how-to-get-month-from-javascript-date/
    const currentDate = new Date();
    const dateString = currentDate.toLocaleString("default", {month: "long"}) + " " +currentDate.getDate() + ", " + currentDate.getFullYear() + " at 0 hours ago"
    const commentHTML = 
    `
                    <div class="commentImgContainer">
                        <img src="https://placebear.com/70/70" alt="Picture of commenter">
                    </div>
        <div class="commentText">
                        <div>
                            <h3>${name.toUpperCase()} -</h3>
                            <p>Reply</p>
                        </div>
                        <p>${comment}</p>
                        <p class="commentTime">${dateString}</p>
                    </div>
    `
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("commentContainer");
    commentDiv.innerHTML = commentHTML;
    commentElement.appendChild(commentDiv);
};


app.init();