import React, { useEffect } from 'react';
import AOS from 'aos';

export default Funtion;
function App(app) {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);

  return <div>Funtion</div>;
}
