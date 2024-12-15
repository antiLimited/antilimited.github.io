<script>
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM loaded!")
        if (window.scrollY == 0) {
            document.querySelector(".navbar").classList.add("navbar-init-up")
        } else {
            document.querySelector(".navbar").classList.add("navbar-init-down")
        }
    }, false);

    addEventListener("scroll", () => {
        if (window.scrollY == 0) {
            document.querySelector(".navbar").classList.add("navbar-up");
            document.querySelector(".navbar").classList.remove("navbar-down");
        } else {
            document.querySelector(".navbar").classList.add("navbar-down");
            document.querySelector(".navbar").classList.remove("navbar-up");
        }
    });
</script>

<div class="navbar">
    <a href="./" id="navbar-first">HOME</a>
    <div class="navbar-sep"></div>
    <a href="./" id="navbar-last">PROFILES</a>
    <div class="navbar-sep"></div>
    <a href="./" id="navbar-last">PROJECTS</a>
</div>