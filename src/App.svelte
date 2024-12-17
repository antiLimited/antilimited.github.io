<script>
    import { curPage } from "./stores.js";

    import Navbar from "./lib/navbar.svelte";

    // Import page files
    import PageHome from "./lib/pages/home.svelte";
    import PageProfiles from "./lib/pages/profiles.svelte";
    import PageProjects from "./lib/pages/projects.svelte";

    // Set initial curPage based on URL parameters
    $curPage = new URLSearchParams (window.location.search).get("p").toLowerCase();

    // Define valid pagelist for check process
    const pageList = [
        "home",
        "profiles",
        "projects"
    ];

    // Check various states of curPage
    if ($curPage == undefined) {
        $curPage = "home" // Set curPage to home if no URL parameters were applied
    } else {
        let matches = false;
        // Loop through valid pagelist to check against curPage if URL parameters were applied
        for (let i = 0; i < pageList.length; i++) {
            if ($curPage == pageList[i]) matches = true; // Match marked true if matching item on valid pagelist is found
        };
        if (!matches) $curPage = "home"; // Set curPage to home if no matching elements
    };

    function updateURL(page) {
        let newurl = window.location.origin + window.location.pathname + "?p=" + page + "#"; // Create updated URL based on page argument
        window.history.pushState({path:newurl},'',newurl); // Apply updated URL
    };

    $effect(() => updateURL($curPage)); // Update and apply URL based on curPage
    console.log($curPage.toString())
</script>

<Navbar></Navbar>

<div class="main-content">
    {#if $curPage == "home"}
        <PageHome></PageHome>
    {:else if $curPage == "profiles"}
        <PageProfiles></PageProfiles>
    {:else if $curPage == "projects"}
        <PageProjects></PageProjects>
    {/if}
</div>