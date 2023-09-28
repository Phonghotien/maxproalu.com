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
        uploadButton.addEventListener("click", (e) => {
          e.preventDefault();
          fileInput.click();
        });
    
      }
 
}

