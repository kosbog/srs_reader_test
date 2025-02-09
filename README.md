## README

### Перелік запитань, уточнень, зауважень

**1. Action Bar**
- Які кнопки мають бути показані в десктопній і мобільній версіях. На дизайні видно різницю.
- Опис функціоналу деяких кнопок (наприклад, список і три точки).


**2. Попап "Налаштування"**
- Як мають поводитися кнопки при ховері перед прийняттям активного стану та при ховері, де кнопки не мають активного стану (наприклад, перемикачі для стилів шрифту).
- Які дефолтні значення для кнопок налаштувань, які повинні мати активний стан одразу (наприклад, коментарі) та про умови, коли кнопки можуть бути взагалі disabled (наприклад, розмір шрифту, якщо дійшли до кінця діапазону).
- Як можна закрити попап (по кліку на кнопку або, додатково, по оверлею).

Я виходив з наявної інформації, одже, всі зауваження можуть бути вже описанні раніше в інишх ТЗ. 

---

### Що зроблено/не зроблено

**1. Детект девайсу**
- Зробив детект девайсу через nextjs та передав його пропсом.* 
- Рішення дозволяє записати цю інформацію в стор та використовувати її там, де потрібно.

*Не певний, чи це найкращий шлях, я вирішив що в цих умовах дозволяється. Таким чином, детект відбувається один раз при відкритті сторінки.

***Одже, для перевірки в браузері мобільної версії треба увімкнути девайс мод в хромі і перезавантажити сторінку.***


**2. Використані бібліотеки**
- Використав Zustand для запису значень налаштувань* та Flowbite**, так як вони вже використовуються у вас на проєкті.
- Використав іконки з ліби react-icons для швидшого вирішення.

*Наприклад, `activeFont` & `activeComments`, що б була змога встановити деофлтний стейт для кнопок (ну і використати потім). 
**Так як я створював проєкт одразу з Flowbite, версія nextjs 14. Так було з коробки.


**3. Реалізація кнопок**
- Зробив для деяких кнопок активні стани по дефолту (наприклад, коментарі включені).
- Кнопки для перемикання теми, розміру і стилю шрифту зробив без активного стану, так як вони є перемикачами між значеннями.*

*Зміну теми я також зробив в цьому варіанті, на перспективу, так як в тз вказана наявність більше двох тем в майбтньому). 


**4. Мобільна версія**
- Не зробив іконку Х (закриття) в попапі на мобільній версії, так як на мою думку вона зайва:
  - На веб версії її немає (більш однаковий дизайн).
  - На мобільній версії є додатковий індикатор нагорі попапу (сірий прямокутник в стилі модальних вікон для телефонів), що дає зрозуміти, що можна свайпнути і вікно закриється.
- Для реалізації модального вікна на мобільній версії використав окрему лібу vaul, яка дуже гарно відповідала вимогам.
