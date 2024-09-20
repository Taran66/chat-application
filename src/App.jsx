import Container from "./components/Container";

const App = () => 
( 
      <div className="flex items-center justify-center w-screen h-screen bg-[url('./assets/background/leaves3.jpg')] bg-cover">
          <div className="z-10 backdrop-filter backdrop-blur-xl bg-white/30 rounded-2xl shadow-2xl h-5/6 w-11/12 flex items-center justify-center">
            <div className="w-11/12">
              <Container />
            </div>
          </div>
      </div>
);

export default App