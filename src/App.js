import {useState} from "react";
import dayjs from "dayjs";
import MainDisplay from "./components/MainDisplay";
import ConfigDisplay from "./components/ConfigDisplay";
import ConfigProvider from "./context/ConfigContext";
var relativeTime = require('dayjs/plugin/relativeTime')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone')
dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)

function App() {
    const [configMode, setConfigMode] = useState(false);

    const mainDisp = <MainDisplay setConfigMode={setConfigMode}/>
    const configDisp = <ConfigDisplay setConfigMode={setConfigMode}/>

  return (
      <ConfigProvider>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 bg-black text-white">
              {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
              <div className="max-w-3xl mx-auto">
                  {configMode ? configDisp : mainDisp}
              </div>
          </div>
      </ConfigProvider>
  );
}

export default App;
