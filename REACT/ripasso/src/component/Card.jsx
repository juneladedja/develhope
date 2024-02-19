export function Card({comment}){

    return (
        <>
        <h2> {comment.postId} </h2>
        <p> {comment.body} </p>
        </>
    )
}