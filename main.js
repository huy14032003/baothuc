let countdown;

action = () => {
  const hour = parseInt(document.getElementById("hours").value) || 0;
  const minute = parseInt(document.getElementById("minutes").value) || 0;
  const second = parseInt(document.getElementById("seconds").value) || 0;

  let time = hour * 3600 + minute * 60 + second; // Tổng thời gian (giây)

  // Dừng mọi bộ đếm ngược trước đó
  clearInterval(countdown);

  if (time > 0) {
    const alertSound = document.getElementById("alertSound");
    // Hàm hiển thị logic đếm ngược
    const updateCountdown = () => {
      const hr = Math.floor(time / 3600); // Tính giờ
      const mu = Math.floor((time % 3600) / 60); // Tính phút
      const sc = time % 60; // Tính giây

      // Hiển thị thời gian còn lại
      document.getElementById("countdown").innerHTML = `${hr
        .toString()
        .padStart(2, "0")}:${mu.toString().padStart(2, "0")}:${sc
        .toString()
        .padStart(2, "0")}`;

      time--; // Giảm thời gian mỗi giây

      // Khi hết thời gian, dừng bộ đếm
      if (time < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML =
          "đến giờ iu anh ròi bé oi!!!";
        alertSound.play();
      }
    };

    // Gọi ngay hàm logic để hiển thị lần đầu tiên
    updateCountdown();

    // Bắt đầu đếm ngược với setInterval
    countdown = setInterval(updateCountdown, 1000);
  } else {
    alert("Vui lòng nhập thời gian hợp lệ!");
  }
};

stop = () => {
  alertSound = document.getElementById("alertSound");
  alertSound.pause(); // Dừng âm thanh
  alertSound.currentTime = 0; // Đặt lại thời gian về 0
  document.getElementById("countdown").innerHTML = "00:00:00";
};
