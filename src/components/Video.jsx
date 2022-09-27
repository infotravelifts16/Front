import Iframe from "react-iframe";

const Video = () => {
  return (
    <div
      className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
      style={{ paddingTop: "42.857143%" }}
    >
      <Iframe
        className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/T53Oq32ZsDE"
        allowfullscreen=""
        data-gtm-yt-inspected-2340190_699="true"
        id="240632615"
      ></Iframe>
    </div>
  );
};

export default Video;
