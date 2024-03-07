const CommentData=[
    {
        name: "Mohan Gupta",
        text: "Hellow How are you..Hope you are dng well, have a nice Day",
        replies:[]
    },
    {
        name: "Mohan Gupta",
        text: "Hellow How are you..Hope you are dng well, have a nice Day",
        replies:[
            {
                name: "Mohan Gupta",
                text: "Hellow How are you..Hope you are dng well, have a nice Day",
                replies:[{
                    name: "Mohan Gupta",
                    text: "Hellow How are you..Hope you are dng well, have a nice Day",
                    replies:[]
                }]
            },
        ]
    },
    {
        name: "Mohan Gupta",
        text: "Hellow How are you..Hope you are dng well, have a nice Day",
        replies:[{
            name: "Mohan Gupta",
            text: "Hellow How are you..Hope you are dng well, have a nice Day",
            replies:[]
        },
        {
            name: "Mohan Gupta",
            text: "Hellow How are you..Hope you are dng well, have a nice Day",
            replies:[]
        }
    ]
    },
    {
        name: "Mohan Gupta",
        text: "Hellow How are you..Hope you are dng well, have a nice Day",
        replies:[]
    }
]
const Comments=({data})=>{
    const {name,text,replies}=data;
    // console.log(data)
    return(
        <div>
            <div className="flex flex-row bg-gray-200 w-[900px] m-1 p-1">
                    <img className="h-10 w-10" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeVjQDi3dH6L92Ydk-Ae3zmQmCxtjF6ZZw0tMuWYeiw&s"}></img>
                <div className="mx-1">
                    <div className="text-sm font-bold">{name}</div>
                        <p className="text-sm">{text}</p>
                </div>
            </div>  
        </div>   
       
    )
}

const CommentsList=({comments})=>{
    return comments.map((comment,index)=>(
    <div>
      <Comments key={index} data={comment}/>
      <div className="border border-l-black m-4">
        <CommentsList key={index} comments={comment.replies}/>
      </div>
    </div>
    ));
}
const CommentsContainer=()=>{
   // console.log(CommentData[0])
    return(
        <div>
        <div className="font-bold text-xl py-4">Comments:</div>
           <CommentsList comments={CommentData}/>
        </div>
    )
}

export default CommentsContainer;