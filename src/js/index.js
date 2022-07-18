(function () {
    const sliding = document.querySelector('.sliding-up-panel');
    const slidingHead = sliding.querySelector('.sliding-up-panel__head');
    const slidingBody = sliding.querySelector('.sliding-up-panel__body');



    let isMoseDown = false;
    let startPoint = {};
    sliding.addEventListener('touchstart',  function (event) {
        const { changedTouches, targetTouches, touches } = event;
        const { pageX: x, pageY: y } = touches[0];
        startPoint = { x , y };

        console.log('touchstart');
    });
    
    sliding.addEventListener('touchmove', function (event) {
        const { changedTouches, targetTouches, touches } = event;
        const { pageX: xMove, pageY: yMove } = touches[0];
        const { y: yStart } = startPoint;
        const diff = yStart - yMove;
        if (diff > 0) {
            console.log('Вверх');
        } else {
            console.log('Вниз');
        }
        startPoint = { x: xMove , y: yMove };
    });

    sliding.addEventListener('touchend', function (event) {
        startPoint = {};
        console.log('touchend');
    });
})();

function getTranslate(nodeEl) {
    const transform = nodeEl.style.transform;
    const translate = transform.match(/translate\((\d+)px, (\d+)px\)/)

    if (translate !== null) {
        const [allMatch, x, y] = translate;
    }
    return null;
}

function setTranslate(nodeEl, [x, y]) {
    nodeEl.style.transform = `translate(${x}px ${y})`;
}