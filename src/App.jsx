import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import {
  Characters,
  Episodes,
  Locations,
  WatchList,
  NotFoundPage,
} from "./pages";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="locations" element={<Locations />} />
        <Route path="watchList" element={<WatchList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </>
);

export default App;
