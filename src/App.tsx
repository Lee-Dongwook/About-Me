import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="p-10">
      <Navbar />
      <Card
        title="Hello! This is Dong Wook, Lee"
        description="Strive to provide an improved user experience."
      />
      <Footer />
    </div>
  );
}

export default App;
