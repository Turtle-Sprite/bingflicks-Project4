import { useEffect } from "react";

function GetReview({ movieDetails, reviews, getReviews}) {
    console.log("getreviews", movieDetails.title)
    useEffect(()=> {
        getReviews(movieDetails.title)
    },[])
    // console.log("get review, reviews", reviews)
    // if(reviews.length > 0) {
    //     let allreviews = reviews.map((review) =>{
    //         return (
    //             <div>
    //                 <h4>{review.title}</h4>
    //                 <h6>{review.content}</h6>
    //                 <h4>{review.rating}</h4>
    //             </div>
    //         )
    //     })
    // }

    return (
        <div>
            {/* {allreviews} */}
        </div>
    );
}

export default GetReview;