
let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let minValueValue = minValue;
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
let maxValueValue = maxValue;

if (isNaN(minValue)) {
    true;
    minValue = (0);
    minValue == minValue;
} else {
    false;
    minValue == minValueValue;
}

if (isNaN(maxValue)) {
    true;
    maxValue = (100)
    maxValue == maxValue;
} else {
    false;
    maxValue == maxValueValue;
}

const maxV = maxValue > 999 ? 999 : maxValue;
const minV = minValue < -999 ? -999 : minValue;

minValue = minV;
maxValue = maxV;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

const phraseRandom = Math.round(Math.random() * 2);
const answerPhrase =
    phraseRandom === 1
        ? `Вы загадали число`
        : `я думаю это число`
            ? `Наверное это`
            : `я думаю это число`;
answerField.innerText = answerPhrase;


orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;

    gameRun = true;
    orderNumberField.innerText = orderNumber;
    const phraseRandom = Math.round(Math.random() * 2);
    const answerPhrase =
        phraseRandom === 1
            ? `Вы загадали число`
            : `я думаю это число`
                ? `Наверное это`
                : `я думаю это число`;
    answerField.innerText = answerPhrase + ` ${answerNumber}?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1)
                ?`Это число слишком огромное, чтобы быть реальным!\n\u{1F631}`
                :`Число не может быть больше\n\u{1F92F}`  
                    ? `Я сдаюсь..\n\u{1F92F}`
                    : `Вы загадали неправильное число!\n\u{1F914}`
                        ? `Вы загадали неправильное число!\n\u{1F914}`
                        : `Мы можем смотреть в конец Вселенной, но никогда не узнать точно это число...\n\u{1F52D}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            let phraseRandomA = Math.floor(Math.random() * 3);

            if (phraseRandomA == 1) {
                answerField.innerText = `Вы загадали число ${answerNumber}?`;
            }

            else if (phraseRandomA == 2) {
                answerField.innerText = `Это ведь ${answerNumber}?`;
            }

            else {
                answerField.innerText = `Похоже на ${answerNumber}?`;
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (answerNumber === minValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1)
                ? `Это число не может быть там, где рождаются звезды\n\u{1F980}`
                : `Я сдаюсь..\n\u{1F92F}`
                    ? `Число не может быть больше\n\u{1F92F}`
                    : `Вы загадали неправильное число!\n\u{1F914}`
                        ? `Это число слишком маленькое, чтобы быть реальным!\n\u{1F631}`
                        : `Мы можем смотреть в конец Вселенной, но никогда не узнать точно это число...\n\u{1F52D}`


            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandomA = Math.floor(Math.random() * 3);

            if (phraseRandomA == 1) {
                answerField.innerText = `Вы загадали число ${answerNumber}?`;
            }

            else if (phraseRandomA == 2) {
                answerField.innerText = `Это ведь ${answerNumber}?`;
            }

            else {
                answerField.innerText = `Похоже на ${answerNumber}?`;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {

        let phraseRandomA = Math.floor(Math.random() * 3);

        if (phraseRandomA == 1) {
            answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
        }

        else if (phraseRandomA == 2) {
            answerField.innerText = `Это было просто\n\u{1F971}`;
        }

        else {
            answerField.innerText = `Угадал\n\u{1F973}`;
        }
        gameRun = false;
    }
})