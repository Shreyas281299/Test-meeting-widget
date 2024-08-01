import "./App.css";
import { WebexMeetingsWidget } from "@webex/widgets";

import "@webex/widgets/dist/css/webex-widgets.css";

function App() {
  return (
    <div className="App">
      <WebexMeetingsWidget
        style={{ width: "1000px", height: "500px" }} // Substitute with any arbitrary size or use `className`
        accessToken=""
        meetingDestination=""
      />
    </div>
  );
}

export default App;
