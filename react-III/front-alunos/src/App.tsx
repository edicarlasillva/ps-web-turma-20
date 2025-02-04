import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { router } from "./routes";
import { persistedStore, store } from "./store";

export function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistedStore} />
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}
