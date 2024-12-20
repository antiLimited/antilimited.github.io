<script>
    import { curPage } from "../stores.js";

    // Define empty variable to set in DOMContentLoaded event
    let navbar;
    let navbarLinks = [];

    // Runs on page load
    document.addEventListener(
        "DOMContentLoaded",
        function () {
            console.log("DOM loaded!");
            navbar = document.querySelector(".navbar"); // Sets navbar to refer to top level navbar div

            if (window.scrollY == 0) {
                navbar.classList.add("navbar-init-up"); // Set starting position docked on init (no anim)
            } else {
                navbar.classList.add("navbar-init-down"); // Set starting position floating on init (no anim)
            }

            navbarLinks = Array.from(
                document.getElementsByClassName("navbar-link"),
            ); // Set navbarLinks to an array of all links in top level navbar div
            highlightCurPage(true); // Call highlight with init true to prevent animation for inactive links
        },
        false,
    );

    // Call on any scroll events on page
    addEventListener("scroll", () => {
        if (window.scrollY == 0) {
            // Set navbar classes to appear docked (up) if scrolled up fully
            navbar.classList.add("navbar-up");
            navbar.classList.remove("navbar-down");
        } else {
            // Set navbar classes to appear floating (down) otherwise
            navbar.classList.add("navbar-down");
            navbar.classList.remove("navbar-up");
        }
    });

    // Highlight active page link in navbar based on $curPage store
    function highlightCurPage(init, empty) {
        // Loop over all links inside of navbar
        for (let i = 0; i < navbarLinks.length; i++) {
            const link = navbarLinks[i];

            // Check if current page link matches $curPage
            if ($curPage == link.innerHTML.toLowerCase()) {
                link.classList.remove(
                    "navbar-inactive",
                    "navbar-inactive-pgload",
                ); // Remove old inactive classes
                link.classList.add("navbar-active"); // Add active class
            } else {
                link.classList.remove("navbar-active"); // Remove old active class
                if (init) {
                    link.classList.add("navbar-inactive-pgload"); // Added if first call after DOM load, prevents active to inactive anim on page load
                } else {
                    link.classList.add("navbar-inactive"); // Added on any other call
                }
            }
        }
    }
    $effect(() => highlightCurPage(false, $curPage)); // Re-highlight page when $curPage store is changed
</script>

<div class="navbar">
    <a href="#" class="navbar-link" onclick={() => ($curPage = "home")}
        >HOME
    </a>
    <div class="navbar-sep"></div>
    <a href="#" class="navbar-link" onclick={() => ($curPage = "profiles")}
        >PROFILES</a
    >
    <div class="navbar-sep"></div>
    <a href="#" class="navbar-link" onclick={() => ($curPage = "projects")}
        >PROJECTS</a
    >
</div>
