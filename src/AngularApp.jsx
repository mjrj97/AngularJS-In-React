import React, { useRef, useEffect } from 'react'

function AngularApp() {
  const appRef = useRef(null);

  // https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "/src/app.module.js";
    script.type = "module";
    script.async = true;
  
    appRef.current.appendChild(script);
  
    return () => {
      appRef.current.removeChild(script);
    }
  }, []);

  return (
    <div ref={appRef} ng-app="app">
      <span ng-controller="HelloWorldCtrl" dangerouslySetInnerHTML={{ __html: "{{message}}"}}></span>
    </div>
  )
}

export default AngularApp