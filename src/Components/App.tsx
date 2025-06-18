import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../routes";

import Footer from "./Footer";
import { GlobalStyle } from "../assets/globalStyles";
import { RequireAuth } from "./RequireAuth";
import { Loader } from "./Loader";

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map(
            ({ id, path, component: Component, isProtected, redirectTo }) => (
              <Route
                key={id}
                path={path}
                element={
                  isProtected ? (
                    <RequireAuth redirectTo={redirectTo}>
                      <Component />
                    </RequireAuth>
                  ) : (
                    <Component />
                  )
                }
              />
            )
          )}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
