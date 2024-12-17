<script>
    import { curPage } from "../stores.js";

    let navbarContents = [];

    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM loaded!");
        if (window.scrollY == 0) {
            document.querySelector(".navbar").classList.add("navbar-init-up")
        } else {
            document.querySelector(".navbar").classList.add("navbar-init-down")
        };

        navbarContents = Array.from(document.getElementsByClassName("navbar-link"));
        highlightCurPage(false);
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

    
    function highlightCurPage(initStatus, empty) {
        for (let i = 0; i < navbarContents.length; i++) {
            if ($curPage == navbarContents[i].innerHTML.toLowerCase()) {
                navbarContents[i].classList.add("navbar-active");
                if (initStatus) navbarContents[i].classList.remove("navbar-inactive");
            } else {
                navbarContents[i].classList.add("navbar-inactive");
                if (initStatus) navbarContents[i].classList.remove("navbar-active");
            };
        };
    };
    $effect(() => highlightCurPage(true, $curPage));
</script>

<div class="navbar">
    <a href="#" class="navbar-link" onclick={() => $curPage = "home"}>HOME</a>
    <div class="navbar-sep"></div>
    <a href="#" class="navbar-link" onclick={() => $curPage = "profiles"}>PROFILES</a>
    <div class="navbar-sep"></div>
    <a href="#" class="navbar-link" onclick={() => $curPage = "projects"}>PROJECTS</a>
</div>