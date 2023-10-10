function generateQuote() {
    var quotes = [{
        quote: "Be the change that you wish to see in the world.",
        author: "― Mahatma Gandhi"
    }, {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "― Robert Frost"
    }, {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "― Mark Twain"
    }, {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "― Elbert Hubbard"
    }];


    var random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").innerHTML = quotes[random].quote;
    document.getElementById("authorName").innerHTML = quotes[random].author
}