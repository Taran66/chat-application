import LeftSide from "./section/LeftSide";
import RightSide from "./section/RightSide";

const App = () => 
( 
      <div className="flex items-center justify-center w-screen h-screen bg-[url('./assets/background/beach.jpg')] bg-cover">
          <div className="z-10 backdrop-filter backdrop-blur-xl bg-black/40 rounded-2xl shadow-2xl h-5/6 w-screen my-16 mx-16 ">
            <div className="flex gap-4 my-6 mx-4">
              <div className="basis-1/3">
                <LeftSide/>
              </div>
              <div className="basis-2/3 ">
                <RightSide/>
              </div>
            </div>
          </div>
      </div>
);

export default App