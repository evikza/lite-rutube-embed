# Lite Rutube Embed

Легковесный скрипт для отображения видео Rutube. С последующией подгрузкой ```iframe```.

Подключите скрипт:

```html
<script src="../path/to/lite-rutube-embed.js"></script>
```

Добавьте на страницу элемент ```lite-rutube``` с идентификатором (атрибут) ```videoid```

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
<lite-rutubevideoid="60ec082e53dd8e0cf4c9087df5f54c46" start="107" end="401" autoplay></lite-rutube>
```
