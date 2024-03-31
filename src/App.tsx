import { Navbar } from "./components/Navbar";
import { IntroCard } from "./components/IntroCard";
import { Footer } from "./components/Footer";
import introduce from "./assets/data/introduce.json";

function App() {
  return (
    <>
      <Navbar />
      <main className="h-full">
        <IntroCard
          title="Hello! This is Dong Wook, Lee"
          description={introduce.comment}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
