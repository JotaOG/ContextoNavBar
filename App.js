import { MyContext } from "./Context/MyContext";
import { Wrapper } from "./Components/Wrapper";
import { NavBar } from "./Components/NavBar";
import { FormWrapper } from "./Components/FormWrapper";

function App() {
  return (
    <div>
      <MyContext.Provider>
        <Wrapper>
          <NavBar />
          <FormWrapper />
        </Wrapper>
      </MyContext.Provider>
    </div>
  );
}

export default App;
