import React, { useEffect } from 'react'; // Must be imported for webpack to work
import { useSharedContext, SharedProvider } from './SharedContext';
import { eventBus } from './EventBus';

function SomeComponent() {
  const { count, incrementCount } = useSharedContext();

  const incrementCounts = () => {
    
    incrementCount();
  }
  useEffect(()=>{
    eventBus.emit('userUpdated', { name: count });
  },[count])
  return (
    <div className='SettingsApp'>
      <h3>Settings App</h3>
      <p>Count: {count}</p>
      <button onClick={incrementCounts}>Increment count</button>
    </div>
  );
}


function App() {
  return (
    <SharedProvider>
      <SomeComponent />
    </SharedProvider>
  );
}

export default App;
