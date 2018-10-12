
document.body.style.backgroundColor = 'rgba(35, 35, 35,0.7)';

var imgs = ["url('https://images2.imgbox.com/ca/2c/G5oehQ5s_o.png')",
    "url('https://images2.imgbox.com/4a/7a/HH5enj4s_o.png')",
    "url('https://images2.imgbox.com/65/17/JXagDbK4_o.png')",
    "url('https://images2.imgbox.com/d8/5c/7aCIuC3P_o.png')"];
var active = 0;

changeBg();

function changeBg() {
    document.body.style.backgroundImage = imgs[active % imgs.length];
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.transition = "background 2s";
    active++;
}

setInterval(changeBg, 4000);



// https://images2.imgbox.com/65/17/JXagDbK4_o.png
// https://images2.imgbox.com/4a/7a/HH5enj4s_o.png
// https://images2.imgbox.com/ca/2c/G5oehQ5s_o.png
// https://images2.imgbox.com/d8/5c/7aCIuC3P_o.png