window.onload = function() {
    const countValue = document.getElementById("countValue");

    document.getElementById("reset").onclick = function() {
        countValue.innerText = 0;
    }

    document.getElementById("increment").onclick = function() {
        countValue.innerText = parseInt(countValue.innerText) + 1;
    }

    document.getElementById("decrement").onclick = function() {
        countValue.innerText = parseInt(countValue.innerText) - 1;
    }
};
