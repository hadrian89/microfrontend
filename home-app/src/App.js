import React, { lazy, Suspense, useEffect, useState } from 'react'; // Must be imported for webpack to work
import './App.css';

const Header = lazy(() => import('HeaderApp/Header'));
const Footer = lazy(() => import('HeaderApp/Footer'));
const ParentApp = lazy(() => import('HeaderApp/ParentApp'));

import { capitalize } from 'HeaderApp/utils';
import { useSharedContext, SharedProvider } from 'HeaderApp/SharedContext';
import { eventBus } from 'HeaderApp/EventBus';

function SomeComponent() {
  const { count, incrementCount } = useSharedContext();

  console.log(count, 'count')

  return (
    <div>
      <p>Count: {count}</p>
      {/* <button onClick={incrementCount}>Increment count</button> */}
    </div>
  );
}
function App() {
  const [count, setCount] = useState(null);
  useEffect(() => {
    const onUserUpdated = (data) => {
      console.log(data,'dataaaa...')
      setCount(data.name)
    };
    eventBus.on('userUpdated', onUserUpdated);
    return () => eventBus.off('userUpdated', onUserUpdated);
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
        <ParentApp />

      </Suspense>
      <h5>{
        capitalize("products")
      }</h5>
      {count}
      {/* <SharedProvider>
        <SomeComponent />
      </SharedProvider> */}
      <div className="container">Demo home page</div>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;