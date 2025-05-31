// Tea descriptions
const teaDescriptions = {
    'Fall Berry Blitz': 'A blissful blend of autumn berries creates this energizing and refreshing tea.',
    'Spiced Rum Tea': 'Warm spices mixed with our signature black tea create a cozy winter favorite.',
    'Seasonal Donuts': 'Our fresh baked donuts are the perfect companion to any of our artisanal teas.',
    'Myrtle Ave Tea': 'A smooth and calming blend of chamomile and lavender, perfect for relaxation.',
    'Bedford Bizarre Tea': 'An intriguing blend of exotic spices and mysterious flavors from Bedford.'
};

const teaBoxes = document.querySelectorAll('.box');
teaBoxes.forEach(box => {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'tea-overlay';
    const teaName = box.querySelector('.img-name').textContent;
    overlay.innerHTML = `
        <div class="overlay-content">
            <h3>${teaName}</h3>
            <p>${teaDescriptions[teaName]}</p>
        </div>
    `;
    box.appendChild(overlay);
});

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  topBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
};

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
