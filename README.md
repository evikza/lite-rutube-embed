# Lite Rutube Embed 
![Version](https://img.shields.io/badge/version-1.0.1-f07a47) ![GitHub file size in bytes](https://img.shields.io/github/size/evikza/lite-rutube-embed/lite-rutube-embed.js)

Легковесный скрипт для отображения видео Rutube. С последующией подгрузкой ```iframe```.

Подключите скрипт:

```html
<script src="../path/to/lite-rutube-embed.js"></script>
```

Добавьте на страницу элемент ```lite-rutube``` с идентификатором (атрибут) ```videoid```.

```html
<lite-rutube videoid="ddb4f390378565f2c3ce197f7a769ff2"></lite-rutube>
```

Доступные атрибуты:

| Атрибут | Пример |
|----------|----------|
| videoid    |  Идентификатор видео  |
| start    | Начало воспроизвидения в секундах   |
| end    | Конец воспроизведения в секундах   |
| autoplay    | Автоматическое воспроизведение после подгрузки ```iframe```  |

👇

```html
<lite-rutube videoid="60ec082e53dd8e0cf4c9087df5f54c46" start="107" end="401" autoplay></lite-rutube>
```

[Демонстрация](https://evikza.github.io/lite-rutube-embed/example.html)

### Доработать:

- [ ] Выбор разрешения загружаемой обложки видео.
- [ ] Полноценная поддержка ``` postMessage ``` для общения с плеером и его состоянием.
- [ ] Оптимизация кода. 🎉
