$(document).ready(function() {

    $("#navbar-placeholder").load("navbar.html", function() {

        let currentPage = window.location.pathname.split("/").pop();

        $(".nav-link").each(function() {
            if ($(this).attr("href") === currentPage) {
                $(this).addClass("active");
            }
        });

    });

    // Load footer
   $("#footer-placeholder").load("footer.html", function () {
        $("#copyright-year").text(new Date().getFullYear());
    });

});

