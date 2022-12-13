import React from "react";
import "./recordings.css";

const RecordingCard = ({ recording }) => {
  return (
    <div className="card recording-card">
      <div className="card-body">
        <h5 className="card-title">
          <strong>{recording.recordingName}</strong>
        </h5>
        <p className="card-subtitle mb-2 text-muted">
          Last opened: {recording.lastOpened}
        </p>
        <div className="spacer-md"></div>
        <p className="card-text">
          Duration: {recording.duration} <br />
          {recording.fileType} file type
        </p>
        {recording.tags &&
          recording.tags.map((tag) => {
            return (
              <span
                className="badge rounded-pill bg-primary"
                key={recording.id + "tag" + recording.tags.indexOf(tag)}
              >
                {tag}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default RecordingCard;
