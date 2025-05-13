
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


//------------------Pop Up------------------
const movieDetails = {
    "Lật Mặt 8: Tấm Vé Định Mệnh": {
      title: "Lật Mặt 8: Tấm Vé Định Mệnh",
      description: "Thể loại: Hành động, Hài hước\nThời lượng: 120 phút\nKhởi chiếu: 26/04/2024"
    },
    "Thám Tử Kiên": {
      title: "Thám Tử Kiên",
      description: "Thể loại: Hành động, Trinh thám\nThời lượng: 110 phút\nKhởi chiếu: 15/05/2024"
    },
    "Gia Tài Của Ngoại": {
      title: "Gia Tài Của Ngoại",
      description: "Thể loại: Hài hước, Tình cảm\nThời lượng: 115 phút\nKhởi chiếu: 07/06/2024"
    },
    "Những Gã Trai Hư: Chơi Hay Bị Xơi": {
      title: "Những Gã Trai Hư: Chơi Hay Bị Xơi",
      description: "Thể loại: Hành động, Hài hước\nThời lượng: 115 phút\nKhởi chiếu: 07/06/2024"
    },
    "Linh Hồn Vũ Nữ 2: Nghi Thức Hồi Sinh": {
      title: "Linh Hồn Vũ Nữ 2: Nghi Thức Hồi Sinh",
      description: "Thể loại: Kinh dị\nThời lượng: 122 phút\nKhởi chiếu: 07/06/2024"
    },
    "Móng Vuốt": {
      title: "Móng Vuốt",
      description: "Thể loại: Kinh dị\nThời lượng: Chưa công bố\nKhởi chiếu: 07/06/2024"
    }
  };

  // Nút Chi tiết phim
  const detailButtons = document.querySelectorAll(".btn-detail");
  const popup = document.getElementById("popup-detail");
  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");

  // Kiểm tra phần tử popup có tồn tại hay không
  if (detailButtons.length && popup && popupTitle && popupDescription) {
    detailButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const movieTitle = this.closest(".movie-item").querySelector("h3").innerText;
        const details = movieDetails[movieTitle];

        if (details) {
          popupTitle.innerText = details.title;
          popupDescription.innerText = details.description;
        } else {
          popupTitle.innerText = "Không có thông tin chi tiết";
          popupDescription.innerText = "Không có thông tin cho phim này.";
        }

        // Đảm bảo popup luôn được hiển thị khi bấm nút chi tiết
        popup.style.display = "flex";
        console.log("Popup đã được mở");
      });
    });

    // Đóng popup khi bấm ra ngoài
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  } else {
    console.error("Một trong các phần tử chi tiết phim hoặc popup không tồn tại.");
  }



