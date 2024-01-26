window.onload = function() {
    // 從 URL 中獲取查詢參數
    let params = new URLSearchParams(window.location.search);
    let email = params.get('email');
  
    // 在頁面上顯示電子郵件
    let emailElement = document.querySelector('.quote p');
    if (emailElement) {
      emailElement.textContent = "A confirmation email has been sent to " + decodeURIComponent(email) + ". Please open it and click the button inside to confirm your subscription.";
    }
  }
  