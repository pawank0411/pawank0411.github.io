
// var colors = new Array(
//     url('../images/wall2.png')
// );
var imgs = ["url('https://images2.imgbox.com/6b/2a/mOdIsvv5_o.png')",
    "url('https://images2.imgbox.com/19/97/1sxkAC9F_o.png')",
    "url('https://images2.imgbox.com/76/ef/bwUBlz4Z_o.png')",
    "url('https://images2.imgbox.com/32/4f/lN6kIo0V_o.png')"];
var active = 0;

changeBg();

function changeBg() {
    document.body.style.backgroundImage = imgs[active % imgs.length];
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.transition = "background 1s";
    active++;
}

setInterval(changeBg, 2000);

// https://images2.imgbox.com/6b/2a/mOdIsvv5_o.png
// https://images2.imgbox.com/19/97/1sxkAC9F_o.png

// https://images2.imgbox.com/76/ef/bwUBlz4Z_o.png
// https://images2.imgbox.com/32/4f/lN6kIo0V_o.png