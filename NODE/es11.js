const { EventEmitter } = require("node:events");

function createNewsFeed() {
    
    const emitter = new EventEmitter();

    emitter.on("newsEvent" , (dataNews)=>console.log('newsEvent: ' , dataNews))
    emitter.on("breakingNews" , (dataBreaking)=>console.log('breakingNews: ' , dataBreaking))

    setInterval(() => {
        emitter.emit("newsEvent", "News: A thing happened in a place.");
    }, 1000);

    setInterval(() => {
        emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
    }, 4000);

    setTimeout(() => {
        emitter.emit("error", new Error("News feed connection error"));
    }, 5000);

    return emitter;
}

const newsFeed = createNewsFeed();