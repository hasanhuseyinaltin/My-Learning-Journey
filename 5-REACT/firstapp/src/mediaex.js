import ReactPlayer from "react-player";

function mediaex() {
    const vidUrl = "https://www.youtube.com/watch?v=4O0LrOsdEXU&ab_channel=PositiveVibes"
    return (
        <div>
        <h1>React Player Example</h1>
         <ReactPlayer 
         url={vidUrl}
         playing={false}
         volume={0.5}
         />
         </div>
    )
}

export default mediaex;