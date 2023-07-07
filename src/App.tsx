import { Routes, Route } from "react-router-dom";
import AccommodationForm from "./components/steps/AccomodationStep/AccommodationForm";
import OwnerForm from "./components/steps/OwnerStep/OwnerData";
import Summary from "./components/steps/SummaryStep/Summary";
import Page404 from "./components/steps/Page404";

function App() {
  return (
    <div className="mx-auto mt-6 max-w-md sm:mt-10">
      <h1 className="flex justify-center mb-10 text-3xl font-bold">
        Avantio Test Form
      </h1>
      <Routes>
        <Route>
          <Route path="/" element={<AccommodationForm />} />
          <Route path="owner" element={<OwnerForm />} />
          <Route path="summary" element={<Summary />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
