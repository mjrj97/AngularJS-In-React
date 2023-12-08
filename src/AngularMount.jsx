import React, { useEffect } from 'react';
import { mountAngular } from '/angular/app.module.js';

function AngularMount() {
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

export default AngularMount;
