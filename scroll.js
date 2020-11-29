class Scroll {
  constructor() {

  }

  listen() {
    document.addEventListener('scroll', function(e) {
        console.log(window.scrollY);

       
      });
  }
}