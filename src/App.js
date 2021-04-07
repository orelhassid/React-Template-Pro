import React from "react";
import RouterApp from "./app/services/RouterApp";
import Provider from "./app/contexts/Provider";

function App() {
  // const [isReady, setIsReady] = useState(false);
  // const { restore, isReady } = usePosts();

  // useEffect(() => {
  //   restore();
  // }, []);

  return (
    <Provider>
      <RouterApp />
    </Provider>
  );
  // return <Provider>{isReady ? <RouterApp /> : "Loading..."}</Provider>;
}

export default App;
