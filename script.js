const submitBtn = document.querySelector('.card__cta');
const firstView = document.querySelector('.card');
const secondView = document.querySelector('.thankyou');

const rates = document.querySelectorAll('.card__buttons');
const rating = document.getElementById('rating');

submitBtn.addEventListener('click', () => {
  secondView.classList.toggle('inactive');
  firstView.style.display = 'none';
});

rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.innerHTML = rate.innerHTML;
  });
});