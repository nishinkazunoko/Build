// IntersectionObserver

const iSObservers = document.querySelectorAll('.trigger');

const obsOptions = {

  root: null,

  threshold: 0.1,

};

const fadeIn = (target) => {

  if (target.classList.contains('up')) {

    target.classList.add('is-active');

  } else if (target.classList.contains('in')) {

    target.classList.add('is-active');

  } else if (target.classList.contains('left')) {

    target.classList.add('is-active');

  } else if (target.classList.contains('down')) {

    target.classList.add('is-active');

  }

};

// const fadeOut = (target) => {

//   if (target.classList.contains('up')) {

//     target.classList.remove('is-active');

//   } else if (target.classList.contains('in')) {

//     target.classList.remove('is-active');

//   } else if (target.classList.contains('left')) {

//     target.classList.remove('is-active');

//   } else if (target.classList.contains('down')) {

//     target.classList.remove('is-active');

//   }

// };

const observeUse = (entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      fadeIn(entry.target);

    }

    // else {

    //   fadeOut(entry.target);

    // }

  });

};

const observer = new IntersectionObserver(observeUse, obsOptions);

iSObservers.forEach(iSObserver => {

  observer.observe(iSObserver);

});