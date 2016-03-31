"use strict"

angular.module("trello")
    .service("ServiceTranslit", ServiceTranslit)

    function ServiceTranslit() {
        //Public API
        return {
            translit: translit
        }

        //Function Declaration Section
        function translit(str) {
            if(!str)
                return ''

            let L = {
                'А': 'A', 'а': 'a', 'Б': 'B', 'б': 'b', 'В': 'V', 'в': 'v', 'Г': 'G', 'г': 'g',
                'Д': 'D', 'д': 'd', 'Е': 'E', 'е': 'e', 'Ё': 'Yo', 'ё': 'yo', 'Ж': 'Zh', 'ж': 'zh',
                'З': 'Z', 'з': 'z', 'И': 'I', 'и': 'i', 'Й': 'Y', 'й': 'y', 'К': 'K', 'к': 'k',
                'Л': 'L', 'л': 'l', 'М': 'M', 'м': 'm', 'Н': 'N', 'н': 'n', 'О': 'O', 'о': 'o',
                'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r', 'С': 'S', 'с': 's', 'Т': 'T', 'т': 't',
                'У': 'U', 'у': 'u', 'Ф': 'F', 'ф': 'f', 'Х': 'Kh', 'х': 'kh', 'Ц': 'Ts', 'ц': 'ts',
                'Ч': 'Ch', 'ч': 'ch', 'Ш': 'Sh', 'ш': 'sh', 'Щ': 'Sch', 'щ': 'sch', 'Ъ': '', 'ъ': '',
                'Ы': 'Y', 'ы': 'y', 'Ь': "", 'ь': "", 'Э': 'E', 'э': 'e', 'Ю': 'Yu', 'ю': 'yu',
                'Я': 'Ya', 'я': 'ya', ' ': ' ', '_': '-',
                'І': 'I', 'і': 'i',
                '"': '', "'": '', '.': '', ',': '', '!': '', ':': '', ';': ''
            };
            let r = ''
            let k

            for (k in L) r += k
            r = new RegExp('[' + r + ']', 'g')
            k = function (a) {
                return a in L ? L[a] : ''
            }

            let trans = () => {
                var text_string = str.replace(r, k).replace(' ', '-').toString();

                var literals = 'QqWwEeRrTtYyUuIiOoPpAaSsDdFfGgHhJjKkLlZzXxCcVvBbNnMm-0123456789';
                var newString = '';
                for (var i = 0; i < text_string.length; i++) {
                    if (!(literals.indexOf(text_string.charAt(i)) == -1)) {
                        newString += text_string.charAt(i);
                    }
                }
                return newString;
            }

            return trans()
        }
    }