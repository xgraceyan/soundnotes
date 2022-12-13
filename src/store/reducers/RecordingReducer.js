const initState = {
  recordings: [
    {
      id: "1",
      recordingName: "Recording 1",
      fileType: "MP3",
      tags: ["flute", "recordings"],
      userId: "blahblahblah",
      lastOpened: "Today at 8:45 pm",
      duration: "3 min 5 sec",
    },
    {
      id: "2",
      recordingName: "Flute Recording!",
      fileType: "WAV",
      tags: ["flute", "recital"],
      userId: "blahblahblah",
      lastOpened: "2 weeks ago",
      duration: "38 sec",
    },
  ],
};

const RecordingReducer = (state = initState, action) => {
  return state;
};

export default RecordingReducer;
