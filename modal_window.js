// Константы для теста
const products = {
    1: {
        title: "Шкаф расстоечный Unox XLT",
        description: "Расстоечный шкаф UNOX XLT предназначен для подготовки теста для выпечки различных хлебобулочных и кондитерских продуктов. В процессе расстойки тесто увеличивается в объёме, приобретает пористую внутреннюю структуру и ровную поверхность, что позволяет в итоге получить продукт высокого качества с отменными вкусовыми характеристиками.",
        oldPrice: "200 ₽",
        newPrice: "1000 ₽",
        image: "images/unox-xlt.png" // Путь к изображению (пока placeholder)
    },
    2: {
        title: "Чизкейк Клубничный",
        description: "Нежный чизкейк с клубничным вкусом, приготовленный из натуральных ингредиентов. Идеально подходит для чаепития или праздничного стола.",
        oldPrice: "150 ₽",
        newPrice: "120 ₽",
        image: "images/strawberry-cheesecake.png"
    },
    3: {
        title: "Чизкейк Шоколадный",
        description: "Шоколадный чизкейк с насыщенным вкусом какао. Отличный выбор для любителей сладкого.",
        oldPrice: "150 ₽",
        newPrice: "130 ₽",
        image: "images/chocolate-cheesecake.png"
    }
    // Добавьте остальные товары по аналогии, если нужно
};

// Закомментированный код для работы с базой данных
/*
async function fetchProduct(id) {
    try {
        const response = await fetch(`/api/products/${id}`); // Пример запроса к API
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных о товаре');
        }
        const product = await response.json();
        return product;
    } catch (error) {
        console.error('Ошибка:', error);
        return null;
    }
}
*/

// Получаем элементы
const modal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalOldPrice = document.getElementById('modal-old-price');
const modalNewPrice = document.getElementById('modal-new-price');
const modalClose = document.querySelector('.modal-close');
const productCards = document.querySelectorAll('.product-card');

// Открытие модального окна при клике на карточку
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productId = card.getAttribute('data-id');
        
        // Для теста используем константы
        const product = products[productId];
        
        // Если данные из базы данных, раскомментировать и использовать:
        /*
        fetchProduct(productId).then(product => {
            if (product) {
                modalTitle.textContent = product.title;
                modalDescription.textContent = product.description;
                modalOldPrice.textContent = product.oldPrice;
                modalNewPrice.textContent = product.newPrice;
                // Для изображения: modalImage.src = product.image;
            }
        });
        */

        if (product) {
            modalTitle.textContent = product.title;
            modalDescription.textContent = product.description;
            modalOldPrice.textContent = product.oldPrice;
            modalNewPrice.textContent = product.newPrice;
            // Для изображения (пока placeholder): modalImage.src = product.image;
            modal.style.display = 'flex'; // Показываем модальное окно
        }
    });
});

// Закрытие модального окна при клике на крестик
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне контента
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
