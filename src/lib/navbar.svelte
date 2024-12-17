<script>
    import { curPage } from "../stores.js";

    let navbar;

    let navbarContents = [];

    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM loaded!");
        navbar = document.querySelector(".navbar");
        
        if (window.scrollY == 0) {
            navbar.classList.add("navbar-init-up")
        } else {
            navbar.classList.add("navbar-init-down")
        };

        navbarContents = Array.from(document.getElementsByClassName("navbar-link"));
        console.log(document.getElementsByClassName("navbar-link"));
        highlightCurPage(false);
    }, false);

    addEventListener("scroll", () => {
        if (window.scrollY == 0) {
            navbar.classList.add("navbar-up");
            navbar.classList.remove("navbar-down");
        } else {
            navbar.classList.add("navbar-down");
            navbar.classList.remove("navbar-up");
        }
    });

    
    function highlightCurPage(empty) {
        for (let i = 0; i < navbarContents.length; i++) {
            const link = navbarContents[i]
            if ($curPage == link.innerHTML.toLowerCase()) {
                link.classList.add("navbar-active");
                link.classList.remove("navbar-inactive");
            } else {
                link.classList.add("navbar-inactive");
                link.classList.remove("navbar-active");
            };
        };
        console.log(document.getElementsByClassName("navbar-link"));
    };
    $effect(() => highlightCurPage($curPage));
</script>

<div class="navbar">
    <a href="#" class="navbar-link" onclick={() => $curPage = "home"}>HOME</a>
    <div class="navbar-sep"></div>
    <a href="#" class="navbar-link" onclick={() => $curPage = "profiles"}>PROFILES</a>
    <div class="navbar-sep"></div>
    <a href="#" class="navbar-link" onclick={() => $curPage = "projects"}>PROJECTS</a>
</div>