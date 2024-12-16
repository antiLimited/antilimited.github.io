<script>
    import { curPage } from "../stores.js";

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
    <a href="#" on:click={() => $curPage = "home"}>HOME</a>
    <div class="navbar-sep"></div>
    <a href="#" on:click={() => $curPage = "profiles"}>PROFILES</a>
    <div class="navbar-sep"></div>
    <a href="#" on:click={() => $curPage = "projects"}>PROJECTS</a>
</div>