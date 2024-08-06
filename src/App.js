import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/body";
import Head from "./components/head";
import Main from "./components/main";
import Demo from "./components/demo";
import WatchPage from "./components/watchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <Head />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
