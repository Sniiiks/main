const cards = document.querySelectorAll('.card');
const items = [];

cards.forEach((card, index) => {
    const title = card.querySelector('.title')
    const description = card.querySelector('.description')
    const price = card.querySelector('.price')
    const status = card.querySelector('.status')
    const isInStock = status === 'In Stock';

    items.push({ title, description, price, isInStock });

    const deleteBtn = card.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        card.remove();
        items.splice(index, 1);
        localStorage.setItem('cards', JSON.stringify(items));
    });
});

if (localStorage.getItem('cards')) {
    items = JSON.parse(localStorage.getItem('cards'));
    cards.forEach((card, index) => {
        const { title, description, price, isInStock } = items[index];
        card.querySelector('.title').innerText = title;
        card.querySelector('.description').innerText = description;
        card.querySelector('.price').innerText = price;
        card.querySelector('.status').innerText = isInStock ? 'In Stock' : 'Out of Stock';
    });
} else {
    localStorage.setItem('cards', JSON.stringify(items));
}

function deleteCard(button) {
    const card = button.closest('.card');
    card.remove();
    items = items.filter((item, index) => index !== Array.from(cards).indexOf(card));
    localStorage.setItem('cards', JSON.stringify(items));
}