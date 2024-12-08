import MainPage from "@/pages/main/ui/Main/Page";
import Header from "@/widgets/header/ui/Header/Header";
import '@/shared/interfaces/index.css'

function BaseLayout() {
  return (
    <div>
      <Header />
      <hr />
      <div className="container">
        <MainPage/>
      </div>
    </div>
  );
}

export default BaseLayout;
