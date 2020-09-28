class Review {
    constructor(id, title, content){
        this.id = id
        this.title = title
        this.content = content
    }

    renderReview() {
        let rHolder = document.getElementById("reviews_holder")

        rHolder.innerHTML +=
        `
        <ul>
        <br>
        <h2>Title: ${this.title}</h2><br>
        <li>Review: ${this.content}</li>
        </ul>
        <button class="deletebtn" data-id=${this.id} onclick="deleteReview()">Delete Review</button>
        `
    }
}