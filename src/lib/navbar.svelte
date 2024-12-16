<script>
    import { curPage } from "../stores.js";

    let navbarContents = [];

    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM loaded!")
        if (window.scrollY == 0) {
            document.querySelector(".navbar").classList.add("navbar-init-up")
        } else {
            document.querySelector(".navbar").classList.add("navbar-init-down")
        }

        navbarContents = Array.from(document.getElementsByClassName("navbar-link"));
        console.log(navbarContents);
        highlightCurPage(navbarContents);
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

    
    function highlightCurPage(links, empty) {
        for (let i = 0; i < links.length; i++) {
            if ($curPage == links[i].innerHTML.toLowerCase()) {
                links[i].classList.add("navbar-active")
                console.log(links[i].classList)
            }
        }
    };
    $effect(() => highlightCurPage(navbarContents, $curPage));
</script>

<div class="navbar">
    <a href="#" class="navbar-link" on:click={() => $curPage = "home"}>HOME</a>
    <div class="navbar-sep"></div>
    <a href="#" class="navbar-link" on:click={() => $curPage = "profiles"}>PROFILES</a>
    <div class="navbar-sep"></div>
    <a href="#" class="navbar-link" on:click={() => $curPage = "projects"}>PROJECTS</a>
</div>