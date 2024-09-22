import { RoutesProvider } from "./routes";

function AppProvider() {
  console.log("entre aqui");
  return (
    <>
      <RoutesProvider />
    </>
  );
}

export default AppProvider;
