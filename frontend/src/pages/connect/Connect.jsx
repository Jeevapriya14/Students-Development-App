import React, { useEffect } from 'react';

const Connect = () => {
  useEffect(() => {
    // Create and append the first script for HelpCrunch settings
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.id = 'helpcrunch-settings';
    script1.innerHTML = `
      window.helpcrunchSettings = {
        organization: 'jeevapriya',
        appId: '2628791d-ac2d-4d9d-bc31-8d43f1cf5116',
      };
    `;
    document.body.appendChild(script1);

    // Create and append the second script for HelpCrunch widget
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.id = 'helpcrunch-widget';
    script2.innerHTML = `
      (function(w, d) {
        var hS = w.helpcrunchSettings;
        if (!hS || !hS.organization) {
          return;
        }
        var widgetSrc = 'https://embed.helpcrunch.com/sdk.js';
        w.HelpCrunch = function() { w.HelpCrunch.q.push(arguments); };
        w.HelpCrunch.q = [];
        function r() {
          if (d.querySelector('script[src="' + widgetSrc + '"]')) {
            return;
          }
          var s = d.createElement('script');
          s.async = 1;
          s.type = 'text/javascript';
          s.src = widgetSrc;
          (d.body || d.head).appendChild(s);
        }
        if (d.readyState === 'complete' || hS.loadImmediately) {
          r();
        } else if (w.attachEvent) {
          w.attachEvent('onload', r);
        } else {
          w.addEventListener('load', r, false);
        }
      })(window, document);
    `;
    document.body.appendChild(script2);

    // Clean up scripts on component unmount
    return () => {
      const existingScript1 = document.getElementById('helpcrunch-settings');
      if (existingScript1) {
        document.body.removeChild(existingScript1);
      }
      const existingScript2 = document.getElementById('helpcrunch-widget');
      if (existingScript2) {
        document.body.removeChild(existingScript2);
      }
    };
  }, []);

  return (
    <div>
      <h1>Connect with Us</h1>
      <p>Feel free to reach out if you have any questions!</p>
    </div>
  );
};

export default Connect;
