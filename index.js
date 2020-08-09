function clickHere(){
    setInterval(function margin(){
        let randomMargin2 = Math.random() * 1000;
            randomMargin2 = parseInt(randomMargin2);
        let randomMargin = Math.random();
            randomMargin = randomMargin * 2000;
            randomMargin = parseInt(randomMargin);
            let randomColor = Math.random() * 999999;
            randomColor = parseInt(randomColor);    
        const box = document.createElement('p');
              box.style.height = '20px';
              box.style.width = '50px';
              box.style.background = '#' + randomColor;
              box.style.margin = randomMargin + 'px' + ' ' + randomMargin2 + 'px';
              box.style.borderRadius = '50%';
              box.style.position = 'fixed';
        const parent = document.getElementById('box');
              parent.appendChild(box);
    }, 10);
    setInterval(function(){
        let randomColor = Math.random() * 999999;
            randomColor = parseInt(randomColor);
        document.getElementById('container').style.background ='#' + randomColor;
    }, 1000)

    
    document.getElementById('button').style.display = 'none';
}
