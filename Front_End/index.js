document.addEventListener("DOMContentLoaded", () => {
    fetchReviews()
    createReviews()
})

const MAIN_URL = "http://127.0.0.1:3000"

function fetchReviews(){
    fetch(`${MAIN_URL}/reviews`)
    .then(resp => resp.json())
    .then(reviews => {
        for (const review of reviews) {
            let x = new Review(review.id, review.title, review.content)
            x.renderReview();
        }
    })
}

function createReviews(){
    let rForm = document.getElementById("reviews_form")

    rForm.innerHTML +=
    `
    <form>
    Write A Review Here! <br>
    Title: <input type="text" id="title"><br>
    Review: <input type="text" id="content"><br>
    <input type="submit" value="Create Review">
    </form>
    `
    rForm.addEventListener("submit", createReviewsSubmit)
}

function createReviewsSubmit(){
    event.preventDefault();
    let title = document.getElementById("title").value
    let content = document.getElementById("content").value
    let review = {
        title: title,
        content: content
    }
    fetch(`${MAIN_URL}/reviews`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    .then(resp => resp.json())
    .then(review => {
            let x = new Review(review.id, review.title, review.content)
            x.renderReview();
        })
}

function deleteReview(){
    let reviewId = parseInt(event.target.dataset.id)

    fetch(`${MAIN_URL}/reviews/${reviewId}`, {
        method: 'DELETE'
    })
    this.location.reload()
}