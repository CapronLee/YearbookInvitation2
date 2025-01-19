// Lấy các phần tử DOM
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('name');
const invitationModal = document.getElementById('invitationModal');
const invitationText = document.getElementById('invitationText');
const closeModal = document.getElementById('closeModal');
const downloadButton = document.getElementById('downloadButton');

// Xử lý sự kiện submit form
nameForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Ngăn tải lại trang

  const name = nameInput.value.trim();
  if (name === '') {
    alert('Vui lòng nhập tên của bạn!');
    return;
  }

  // Hiển thị tên trên thiệp mời
  invitationText.textContent = `${name}`;
  invitationModal.classList.remove('hidden');
});

// Đóng modal
closeModal.addEventListener('click', () => {
  invitationModal.classList.add('hidden');
});

// Tải thiệp mời
downloadButton.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();

  img.src = 'assets/invitation-background.jpg';
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;

    // Vẽ ảnh nền
    ctx.drawImage(img, 0, 0);

    // Thêm text
    ctx.font = '36px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(invitationText.textContent, canvas.width / 2, canvas.height / 2);

    // Chuyển canvas thành link tải
    const dataURL = canvas.toDataURL('image/png');
    downloadButton.href = dataURL;
  };
});
