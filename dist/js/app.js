// laoder animation
const loader = document.querySelector('.loader');
const main = document.querySelector('main');
setTimeout(() => {
  loader.classList.add('hide');
  main.classList.add('show');
}, 3000);

const header = document.querySelector('header');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const ul = document.querySelector('ul');
const bars = document.querySelectorAll('.bar');

window.addEventListener('scroll', () => {
  if (scrollY > 100) {
    header.classList.add('active');
    // if menu is open and user scrolls then close the menu
    if ((hamburgerMenu.className = 'hamburger-menu active')) {
      hamburgerMenu.classList.remove('active');
      bars.forEach((bar) => {
        bar.classList.remove('active');
      });
      ul.classList.remove('active');
    }
  } else {
    header.classList.remove('active');
  }
});

// hamburgermenu animation
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  bars.forEach((bar) => {
    bar.classList.toggle('active');
  });
  ul.classList.toggle('active');
});

// intersection observer
const titles = document.querySelectorAll('.title-bar');
// for from left
const subject = document.querySelector('.subject');
const design = document.querySelector('.design');
const form = document.querySelector('.form');

const leftArray = [subject, design, form];

// for from right
const aboutText = document.querySelector('.about-text');
const code = document.querySelector('.code');

const rightArray = [aboutText, code];

// stagger transition
const socialIcons = document.querySelectorAll('.icon');
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);

const fromLeft = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('left', entry.isIntersecting);
    });
  },
  {
    threshold: 0.4,
  }
);
const fromRight = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('right', entry.isIntersecting);
    });
  },
  {
    threshold: 0.4,
  }
);

// title
// const titleAnimation = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle('expand', entry.isIntersecting);
//     });
//   },
//   {
//     rootMargin: '300px 100px 100px 100px',
//     threshold: 1,
//   }
// );

leftArray.forEach((item) => {
  fromLeft.observe(item);
});

rightArray.forEach((item) => {
  fromRight.observe(item);
});

socialIcons.forEach((icon) => {
  observer.observe(icon);
});
projects.forEach((project) => {
  fromLeft.observe(project);
});
// titles.forEach((title) => {
//   titleAnimation.observe(title);
// });
