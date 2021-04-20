let hero = document.querySelector('.hero');
let buttonStart = document.querySelector('.start-quiz-button');
let buttonMoreGift = document.querySelector('.more-gift-button');
let giftBox = document.querySelector('.closed-box-button');
let quizIntro = document.querySelector('.quiz-intro');
let endBlock = document.querySelector('.quiz-end');
let giftBlock = document.querySelector('.gift');
let giftImage = document.querySelector('.gift-box-image');
let giftDescription = document.querySelector('.gift-description');
var quiz = {
    data: [
        {
            q : "Любите ли вы дарить подарки?",
            o : [
                "Да",
                "Нет",
                "Смотря кому"
            ]
        },
        {
            q : "Какие подарки вы обычно дарите?",
            o : [
                "Купленные в магазине",
                "Сделанные своими руками",
                "Деньги в конверте",
                "Передариваю свои подарки"
            ]
        },
        {
            q : "Как вы подходите к выбору подарка?",
            o : [
                "Выбираю подарок с душой",
                "Беру что первое приглянётся",
                "Не дарю подарки"
            ]
        },
        {
            q : "Что вы дарите, когда у вас мало денег?",
            o : [
                "Сделанные своими руками",
                "Передариваю свои подарки",
                "Не дарю подарки"
            ]
        },
        {
            q : "Нравится ли вам, когда вам дарят подарки?",
            o : [
                "Конечно!"
            ]
        }
    ],

    gifts: [
        {
            image : "1.png",
            description : "два торта, чтобы одним поделиться с другом",
            link: "?g=1"
        },
        {
            image : "2.png",
            description : "нунчаки, чтобы защищать себя",
            link: "?g=2"
        },
        {
            image : "3.png",
            description : "огромная шоколадка “Алёнка”, чтобы есть ее в течение недели",
            link: "?g=3"
        },        {
            image : "4.png",
            description : "пластиковый розовый детский конь с фиолетовым хвостом, чтобы стоял на рабочем столе и поднимал настроение",
            link: "?g=4"
        },        {
            image : "5.png",
            description : "один пакетик чая, чтобы спрятать его в карман и носить с собой на всякий случай",
            link: "?g=5"
        },        {
            image : "6.png",
            description : "половинка чебурека, чтобы не забыть покушать",
            link: "?g=6"
        },        {
            image : "7.png",
            description : "фарш и досочка, чтобы стряпать котлетки",
            link: "?g=7"
        },        {
            image : "8.png",
            description : "статуэтка слона. Ее можно поставить на полку дома",
            link: "?g=8"
        },        {
            image : "9.png",
            description : "болгарка. Она пригодится",
            link: "?g=9"
        },        {
            image : "10.png",
            description : "лопаточка для мяса. Она вам понадобится, когда вы решите приготовить пасту болоньезе",
            link: "?g=10"
        },        {
            image : "11.png",
            description : "мячик попрыгунчик, чтобы не скучать в пятиминутные перерывы на работе или учебе",
            link: "?g=11"
        },        {
            image : "12.png",
            description : "одна подушечка жвачки",
            link: "?g=12"
        },        {
            image : "13.png",
            description : "цепочка и подвеска в упаковке из-под лапши быстрого приготовления. Так их точно никто не найдет и не заберет себе",
            link: "?g=13"
        },        {
            image : "14.png",
            description : "5 мармеладных медвежат. Чтобы хватило вам и вашим друзьям",
            link: "?g=14"
        },        {
            image : "15.png",
            description : "два пакета винограда. Что может быть лучше, чем летний виноград!",
            link: "?g=15"
        },        {
            image : "16.png",
            description : "игрушки из киндеров. Устройте настоящую выставку из маленьких фигурок",
            link: "?g=16"
        },        {
            image : "17.png",
            description : "лисьи шкуры, чтобы греться зимой",
            link: "?g=17"
        },        {
            image : "18.png",
            description : "листок с адресами и ценами, где в Перми можно вылечить катаракту. Полезно быть информированным",
            link: "?g=18"
        },        {
            image : "19.png",
            description : "5 кг конфет. Поделитесь ими со своими друзьями или коллегами!",
            link: "?g=19"
        },        {
            image : "20.png",
            description : "20 кг мяса. Накормите собак, которые живут за вашим домом",
            link: "?g=20"
        },        {
            image : "21.png",
            description : "садовые цветы. Поставьте их в вазу, будет очень красиво",
            link: "?g=21"
        },        {
            image : "22.png",
            description : "мягкие игрушки. Их можно обнимать",
            link: "?g=22"
        },        {
            image : "23.png",
            description : "мягкие игрушки. Их можно обнимать",
            link: "?g=23"
        }
    ],

    giftsDirectory: "img/gifts/",

    hWrap: null, // HTML quiz container
    hQn: null, // HTML question wrapper
    hAns: null, // HTML answers wrapper

    now: 0, // current question

    init: function(){
        quizIntro.style.display = 'none';

        quiz.hWrap = document.getElementById("quizWrap");

        quiz.hQn = document.createElement("div");
        quiz.hQn.id = "quizQn";
        quiz.hQn.classList.add("quiz-question");
        quiz.hWrap.appendChild(quiz.hQn);

        quiz.hAns = document.createElement("div");
        quiz.hAns.id = "quizAns";
        quiz.hAns.classList.add("quiz-answers");
        quiz.hWrap.appendChild(quiz.hAns);

        hero.classList.add("quiz-bg");

        quiz.draw();
    },

    draw: function(){
        quiz.hQn.innerHTML = quiz.data[quiz.now].q;

        quiz.hAns.innerHTML = "";
        for (let i in quiz.data[quiz.now].o) {
            let answer = document.createElement("div");
            answer.classList.add("quiz-answer-item");
            answer = quiz.hAns.appendChild(answer);

            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "quiz";
            radio.id = "quizo" + i;
            answer.appendChild(radio);

            let label = document.createElement("label");
            label.innerHTML = quiz.data[quiz.now].o[i];
            label.setAttribute("for", "quizo" + i);
            answer.appendChild(label);
        }
        let button = document.createElement("button");
        button.innerHTML = "Следующий вопрос";
        button.classList.add("button", "button-next-question");
        quiz.hWrap.appendChild(button);
        button.addEventListener("click", quiz.select);
    },

    select: function() {
        quiz.now++;
        setTimeout(function(){
            let buttons = quiz.hWrap.getElementsByTagName("button");
            for (let button of buttons) {
                button.remove();
            }
            if (quiz.now < quiz.data.length) { quiz.draw(); }
            else {
                hero.classList.remove("quiz-bg");
                quiz.hWrap.style.display = 'none';
                endBlock.style.display = 'block';
            }
        }, 500);
    },

    open: function() {
        let randomGift = Math.floor(Math.random()*quiz.gifts.length);
        window.location.href = window.location.href + '/gift.html?g=' + randomGift;
    },

    reload: function() {
        let randomGift = Math.floor(Math.random()*quiz.gifts.length);
        window.location.href = window.location.origin + window.location.pathname + '?g=' + randomGift;
    },

    gift: function() {
        let url_string = window.location.href;
        let url = new URL(url_string);
        let g = url.searchParams.get("g");console.log(window.location);

        if (g) {
            giftDescription.innerHTML = quiz.gifts[g-1]['description'];
            giftImage.src = quiz.giftsDirectory + quiz.gifts[g-1]['image'];
        }

        let facebookLink = document.querySelector('#facebook-link');
        facebookLink.href = "http://www.facebook.com/sharer.php?u=" + url_string;

        let twitterLink = document.querySelector('#twitter-link');
        twitterLink.href = "https://twitter.com/intent/tweet" + url_string;
    }
};

if (buttonStart) {
    buttonStart.addEventListener("click", quiz.init);
}
if (giftBox) {
    giftBox.addEventListener("click", quiz.open);
}
if (buttonMoreGift) {
    buttonMoreGift.addEventListener("click", quiz.reload);
}

let url_string = window.location.href;
let url = new URL(url_string);
let g = url.searchParams.get("g");

if (g) {
    quiz.gift();
}



