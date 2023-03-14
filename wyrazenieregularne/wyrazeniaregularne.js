var score = 0
var time = 30
var wyrazenie = ['^a','sab$','[1-3]','3\\+4\\=7','^komputer$','abc[^abc]','[3-6]{3}','\\bhttps','[1]{3}','[1-3]{3}-[4-6]{3}']
const fun = () => {
if(document.getElementById('b1').value == 'START') {
        document.getElementById('b1').value = 'SPRAWDŹ'
        document.getElementById('p2').innerText = wyrazenie[score]
        var interval = setInterval(() => {
            time -= 1
            document.getElementById('p1').innerText = time + 's'
            if (time == 0) {
                clearInterval(interval)
                document.getElementById('p1').innerHTML = `<h1>Game Over</h1><h1>Score:${score}</h1><h1>Time:30</h1>`
                document.getElementById('p2').style.display = 'none'
                document.getElementById('text').disabled = true
                document.getElementById('text').value = ''
                document.getElementById('text').style.background = 'white'
                document.getElementById('b1').disabled = true
            }
        }, 1000)
    } else if (document.getElementById('b1').value == 'NASTĘPNE') {
        document.getElementById('text').style.background = 'white'
        document.getElementById('text').value = ''
        document.getElementById('b1').value = 'SPRAWDŹ'
        document.getElementById('p2').innerText = wyrazenie[score]
    } else {
        if (RegExp(document.getElementById('p2').innerText).test(document.getElementById('text').value)) {
            document.getElementById('text').style.background = 'green'
            score += 1
            document.getElementById('b1').value = 'NASTĘPNE'
        } else {
            document.getElementById('text').style.background = 'red'
        }
    }
}