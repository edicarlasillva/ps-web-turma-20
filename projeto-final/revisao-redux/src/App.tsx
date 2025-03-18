import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistedStore, store } from "./store";
import { TaskList } from "./components/TaskList";
import { RepositoryList } from "./components/RepositoryList";

export function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistedStore}></PersistGate>
      <h1>Bem-vindo ao Redux!</h1>
      <TaskList />
      <RepositoryList />
    </ReduxProvider>
  );
}
