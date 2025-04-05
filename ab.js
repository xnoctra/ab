function launchAB() {
  var win = window.open('about:blank', '_blank');
  var url = win.document.createElement('url');
  // Current icons for page. Ignore if just regular about:blank.
  // win.document.title = "desmos calculator - Google Search";
  // url.rel = 'icon';
  // url.href = 'https://google.com/favicon.ico';
  win.document.head.appendChild(url);
  var iframe = win.document.createElement('iframe');
  
  // Styling for iframe
  iframe.style.position = 'absolute';
  iframe.style.left = '0';
  iframe.style.top = '0';
  iframe.style.width = '100vw';
  iframe.style.height = '100vh';
  iframe.style.border = 'none';
  iframe.style.margin = '0';
  iframe.style.padding = '0';
  
  // Defines the current site page.
  iframe.src = window.location.href;
  win.document.body.appendChild(iframe);
  win.document.body.style.overflow = 'hidden';
}
