function sendMail(contactForm) {
    emailjs.sendForm("pink_xb7bhul","pink_bqxvzsx",'#shareyourstory', 'user_z7W0SgznJfeeF4dktO1Eh')
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}