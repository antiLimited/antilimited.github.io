<script>
    import { curPage } from "../stores.js";

    let navbar;

    let navbarContents = [];

    let DOMloaded = false
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM loaded!");
        navbar = document.querySelector(".navbar");
        
        if (window.scrollY == 0) {
            navbar.classList.add("navbar-init-up")
        } else {
            navbar.classList.add("navbar-init-down")
        };

        navbarContents = Array.from(document.getElementsByClassName("navbar-link"));
        DOMloaded = true;
        highlightCurPage(true);
        
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

    // Highlight active page link in navbar based on $curPage store
    function highlightCurPage(init, empty) {
        // Loop over all links inside of navbar
        for (let i = 0; i < navbarContents.length; i++) {
            const link = navbarContents[i];
            if ($curPage == link.innerHTML.toLowerCase()) {
                link.classList.remove("navbar-inactive", "navbar-inactive-pgload");
                link.classList.add("navbar-active");
            } else {
                link.classList.remove("navbar-active");
                if (init) {
                    link.classList.add("navbar-inactive-pgload");
                } else {
                    link.classList.add("navbar-inactive");
                };
            };
        };
    };
    $effect(() => highlightCurPage(false, $curPage)); // Re-highlight page when $curPage store is changed
</script>

<div class="navbar">
    <a href="#" class="navbar-link" onclick={() => $curPage = "home"}>HOME</a>
    <div class="navbar-sep"></div>
    <a href="#" class="navbar-link" onclick={() => $curPage = "profiles"}>PROFILES</a>
    <div class="navbar-sep"></div>
    <a href="#" class="navbar-link" onclick={() => $curPage = "projects"}>PROJECTS</a>
</div>