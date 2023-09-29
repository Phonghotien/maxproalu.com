export default function ShowPassWord() {

    $(document).ready(function () {
        $(".show-password").on("click", function () {
          // console.log("show pass");
          const pwd = $(this).siblings("input");
          if (pwd.attr("type") == "password") {
            pwd.attr("type", "text");
        
            $(this).removeClass("fa-eye-slash");
            $(this).addClass("fa-eye");
          } else {
            pwd.attr("type", "password");
            $(this).addClass("fa-eye-slash");
            $(this).removeClass("fa-eye");
          }
        });
      });


      //upload file img tài khoản

      const uploadButton = document.getElementById("upload-btn");
      const fileInput = document.getElementById("file-input");
    
      if (uploadButton && fileInput) {
        uploadButton.addEventListener("click", () => {
          e.preventDefault();
          fileInput.click();
        });
    
      }


      
  // slide section scontact
  const faq_btn = document.querySelectorAll(".scontact-item");
  if (faq_btn) {
    faq_btn.forEach(function (btn) {
      $(btn).on("click", function () {
        const isOpen = $(this).hasClass("open");
        if (!isOpen) {
          $(".scontact-item.open").find(".scontact-desc-slide").slideUp(400);
          $(".scontact-item.open").removeClass("open");
          $(this).find(".scontact-desc-slide").slideToggle(400);
          $(this).toggleClass("open");
    
        }else {
          $(this).addClass("open");
        }
  
      });
    
    });
  }
 
}

