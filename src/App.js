import KeySample from "./source/KeySample";
import NoRefSample from "./source/useRefSample/NoRefSample";
import RefSample from "./source/useRefSample/RefSample";
import InputElSample from "./source/useRefSample/inputElSample";

function App() {
  return (
    <>
      <KeySample />
      <NoRefSample />
      <RefSample />
      <InputElSample />
    </>
  );
}

export default App;
