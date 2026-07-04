import AppRouter from "./AppRouter";
import MainLayout from "../layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
};

export default App;
