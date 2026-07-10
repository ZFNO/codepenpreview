
    fetch('home.html')
      .then(r => r.text())
      .then(html => {
        document.body.innerHTML += html;
      });

