import './scss/style.scss';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import GetRequest from './components/GetRequest/GetRequest';
import PostRequest from './components/PostRequest/PostRequest';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <GetRequest />
      <PostRequest />
    </>
  );
}

export default App;
