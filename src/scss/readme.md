base/ — включает глобальные стили, такие как сброс стилей, типография, цвета и т.д.
components/ — содержит отдельные компоненты с отдельным файлом .scss для каждого из них.
layout/ — содержит стили для основных компонентов макета, таких как хедер, футер, навигация и т.д.
pages/ — содержит стили, специфичные для отдельных страниц, если это необходимо.
themes/ — стили для разных тем.
utils/ — глобальные миксины, функции, вспомогательные селекторы и т.д.
vendors/ — стили, миксины и прочее от третьих сторон
main.scss — выходной файл, в котором объединяются все стили.


// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }


@mixin font($font_name, $file_name, $weight, $style) {

    @font-face {
        font-family: $font_name;
        font-display: swap;
        src: url("../fonts/#{$file_name}.woff") format("woff"),
        url("../fonts/#{$file_name}.woff2") format("woff2");
        font-weight: #{$weight};
        font-style: #{$style};
    }
}

// font-size: calc(24px + 16 * ((100vw - 320px) / (1280 - 320)));
@mixin adaptiv-font($pcSize, $mobSize) {
 $addSize: $pcSize - $mobSize;
 $maxWidth: $maxWidth - 320;
 font-size: calc(#{$mobSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth}));
}
