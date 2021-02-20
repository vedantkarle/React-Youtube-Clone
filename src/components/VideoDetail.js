const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>No Video Selected</div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </div>
      <div className="ui segment">
        <div className="comment" style={{ display: "flex" }}>
          <a className="avatar">
            <i className="user circle icon" style={{ fontSize: "30px" }}></i>
          </a>
          <div className="content">
            <a className="author">{video.snippet.channelTitle}</a>
          </div>
        </div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
