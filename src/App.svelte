<script>
    import { curPage } from "./stores.js";

    import Navbar from "./lib/navbar.svelte";
    
    $curPage = new URLSearchParams (window.location.search).get("p");
    console.log($curPage)

    if ($curPage == undefined) {
        $curPage = "home"
    } else {

    };

    function updateURL(page) {
        let newurl = window.location.origin + window.location.pathname + "?p=" + page;
        window.history.pushState({path:newurl},'',newurl);
    }

    $effect(() => updateURL($curPage));
</script>

<Navbar></Navbar>

<div class="main-content">
    <h1>{$curPage}</h1>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p>line</p>
    <p id="aaaa">line</p>
</div>