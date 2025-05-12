
/*------------------------------------Slider------------------------------------*/
let list_slider = document.querySelector('#slider .list_slider');
let item_slider = document.querySelectorAll('#slider .list_slider .item_slider');
let dots = document.querySelectorAll('#slider .dots_slider li');
let prev = document.getElementById('prev_slider');
let next = document.getElementById('next_slider');

let active = 0;
let lengthItems = item_slider.length - 1;

//------------------Next Button------------------
next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active += 1;
    }
    reloadSlider();
}

//------------------Prev Button------------------
prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active -= 1;
    }
    reloadSlider();
}

//------------------Hàm cập nhật vị trí Slides và Dots------------------
function reloadSlider(){
    let checkLeft = item_slider[active].offsetLeft;
    list_slider.style.left = - checkLeft + 'px';

    let lastActiveDot = document.querySelector('#slider .dots_slider li.active_slider');
    lastActiveDot.classList.remove('active_slider'); //Xóa active dot cũ
    dots[active].classList.add('active_slider'); //Active dot mới

    //Đếm lại 5s khi người dùng nhấn vào nút next hoặc prev
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 5000);
}

//------------------Nhấn Dots để hiện Slides tương ứng------------------
dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

let refreshSlider = setInterval(() => {next.click()}, 5000); //Tự động chuyển slide sau 5000 mili giây (5s)


/*------------------------------------Overlay chứa iframe------------------------------------*/
// Khi click "Xem chi tiết"
document.querySelectorAll('.btn-trailer').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn target tự động gán
        const videoUrl = this.getAttribute('href'); // Lấy link từ href
        const iframe = document.getElementById('movie-frame');

        iframe.src = videoUrl; // Gán video vào iframe
        document.getElementById('iframe-overlay').style.display = 'flex'; // Hiện overlay
    });
});

// Đóng iframe
document.getElementById('close-iframe').addEventListener('click', () => {
    document.getElementById('iframe-overlay').style.display = 'none';
    document.getElementById('movie-frame').src = ''; // Dừng video
});


