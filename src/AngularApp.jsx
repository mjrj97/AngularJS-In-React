import React, { useEffect } from 'react';

function AngularApp() {
  useEffect(() => {
    import('@/app.module.js');
  }, []);

  return (
    <div ng-app='app'>
      <span ng-controller='HelloWorldCtrl'>{'{{message}}'}</span>
    </div>
  );
}

export default AngularApp;
