import { map } from "jquery";
import React from "react";
import { connect } from "react-redux";
import RecordingCard from "../recordings/RecordingCard";

function Dashboard(props) {
  console.log(props);
  const recordings = props.recordings;
  return (
    <section className="dashboard-page">
      <div className="container">
        <h1>Hello, Grace</h1>
        <div className="spacer-sm"></div>
        <h3>My Recordings</h3>
        <div className="row">
          {recordings &&
            recordings.map((recording) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-6"
                  key={recording.id}
                >
                  <RecordingCard recording={recording} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    recordings: state.recording.recordings,
  };
};

export default connect(mapStateToProps)(Dashboard);
