function Counter(cb) {
    let counterValue = 0;
    let counter = null;
    let timer = 1000;

    const startCounter = () => { 
        clearInterval(counter)
        counter = setInterval(() => {
            counterValue++;
            cb(counterValue)
        },
        timer);
    };

    const changeTimer = (timerVal) => {
        timer = timerVal;
        if(counter) startCounter()
    }

    const start = () => {
        counterValue = 0;
        startCounter()
    }

    const stop = () => {
        counter = clearInterval(counter)
    }

    const resume = () => {
        startCounter()
    }

    return {
        start,
        stop,
        resume,
        changeTimer
    }
}

const updateUI = count => {
    document.getElementById('count').innerText = count;
}


const debounceMe = (cb, delay) => {
    let timer= null;
    return function () {
        let args = arguments;
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb.apply(context, args);
        }, delay)
    }
}

const handleInput = debounceMe((value, cb) => {
    console.log("----",value,cb)
    cb(value);
}, 2000)
