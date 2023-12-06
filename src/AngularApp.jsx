import React, { useEffect } from 'react';
import { mountAngular } from '@/angular/app.module.js';

function AngularApp() {
  const id = 'angularApp';

  useEffect(() => {
    mountAngular(id);
  }, []);

  return (
    <div id={id}>
      <span ng-controller='AppController'>{'{{message}}'}</span>
    </div>
  );
}

export default AngularApp;
