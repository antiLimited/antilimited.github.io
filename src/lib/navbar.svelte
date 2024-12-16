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

    function assignRows(navbar) {
        let row = 0;
        let odd = true;
        [...navbar.children].forEach((el) => {
            // remove old classes every time the screen gets resized and set back to default
            el.className = "navbar-link";
            if (!el.previousElementSibling || el.offsetLeft < el.previousElementSibling.offsetLeft) {
                row++;
                odd = !odd;
            }
            // adds a class of row1, row2, row3
            el.classList.add(`navbar-row${row}`, `${odd ? "navbar-wrapped" : "navbar-not-wrapped"}`);
        });
    };
    const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
            assignRows(entry.target);
        });
    });

</script>

<div class="navbar">
    <a href="#" on:click={() => $curPage = "home"}>HOME</a>
    <!-- <div class="navbar-sep"></div> -->
    <a href="#" on:click={() => $curPage = "profiles"}>PROFILES</a>
    <!-- <div class="navbar-sep"></div> -->
    <a href="#" on:click={() => $curPage = "projects"}>PROJECTS</a>
</div>