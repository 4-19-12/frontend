document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Отменяем стандартное поведение формы

    // Получаем значения полей
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Формируем текст сообщения
    const text = `Новое сообщение от ${name}\nТелефон: ${phone}\nСообщение: ${message}`;

    // Токен вашего бота
    const botToken = '8193938159:AAEQrlIDPneqaMix3Zswd23510PLKf9qcF4'; // Замените на ваш токен
    const chatId = '5169831233'; // Замените на ваш chat_id

    // URL для отправки сообщения через Telegram Bot API
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Отправляем запрос
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text,
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Сообщение успешно отправлено!');
                // Очищаем форму
                document.getElementById('contact-form').reset();
            } else {
                alert('Ошибка при отправке сообщения: ' + data.description);
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке сообщения.');
        });
});
