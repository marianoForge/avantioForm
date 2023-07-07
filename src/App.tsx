import { Routes, Route } from "react-router-dom";
import AccommodationForm from "./components/steps/AccomodationForm";
import OwnerForm from "./components/steps/OwnerData";
import Summary from "./components/steps/Summary";
import NoMatch from "./components/steps/NoMatch";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Avantio Test Form</h1>
      <Routes>
        <Route>
          <Route path="/" element={<AccommodationForm />} />
          <Route path="owner" element={<OwnerForm />} />
          <Route path="summary" element={<Summary />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
