<script>
    addEventListener("scroll", () => {
        if (window.scrollY == 0) {
            document.querySelector(".navbar").classList.add("up");
            document.querySelector(".navbar").classList.remove("down");
        } else {
            document.querySelector(".navbar").classList.add("down");
            document.querySelector(".navbar").classList.remove("up");
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