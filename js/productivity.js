const calculateBtn = document.getElementById('calculate');
const result = document.getElementById('result');
const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');

calculateBtn.addEventListener('click', () => {
    const work = parseFloat(document.getElementById('work').value) || 0;
    const study = parseFloat(document.getElementById('study').value) || 0;
    const rest = parseFloat(document.getElementById('rest').value) || 0;
    const fun = parseFloat(document.getElementById('fun').value) || 0;
    const productive = work + study;
    const unproductive = rest + fun;
    const total = productive + unproductive;
    if(total === 0) return;
    const productivePercent = Math.round(productive / total * 100);
    const unproductivePercent = 100 - productivePercent;
    result.innerText = `Продуктивность: ${productivePercent}%, Непродуктивность: ${unproductivePercent}%`;

    ctx.clearRect(0,0,300,300);
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(150,150);
    ctx.arc(150,150,100,0,2*Math.PI*productivePercent/100);
    ctx.lineTo(150,150);
    ctx.fill();
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(150,150);
    ctx.arc(150,150,100,2*Math.PI*productivePercent/100,2*Math.PI);
    ctx.lineTo(150,150);
    ctx.fill();
});
