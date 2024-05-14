import ErrorBoundary from "./ErrorBoundary";
import Home from "./components/Home"


function App() {

  return (
    <ErrorBoundary>
      <Home/>
    </ErrorBoundary>
  );
}

export default App
