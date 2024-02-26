import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  //사ㅇ태가 바뀔때마다 재실행

  return (
    //return에서는 하나의 컴포넌트만 반환할수 있도록 설정됨, <div>를 사용하는 대신 Fragment를 import하여 사용하거나 빈 태그 <>로도 사용 가능
    <div>
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </div>
  );
}

export default App;
