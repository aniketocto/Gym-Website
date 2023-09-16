import "./App.css";
import Join from './Join/Join';
import Plans from './Plans/Plans';
import Reasons from './Reasons/Reasons';
import Testimonials from './Testimonials/Testimonials';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Programs from './components/Programs';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Plans />
      <Reasons />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
