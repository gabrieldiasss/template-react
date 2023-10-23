import { Routes as RoutesDOM, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Form } from "./Pages/Form";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Routes() {
  return (
    <RoutesDOM>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Route>
    </RoutesDOM>
  );
}
