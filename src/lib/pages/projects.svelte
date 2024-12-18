<script>
    import { curPage } from "../../stores.js";

    const isElementLoaded = async (selector) => {
        while (document.querySelector(selector) === null) {
            await new Promise((resolve) => requestAnimationFrame(resolve));
        }
        return document.querySelector(selector);
    };

    let colCount = $state();

    isElementLoaded(".grid").then((selector) => {
        colCount = selector.children.length;
        for (let i = 0;)
    });
</script>

<div class="grid">
    <div class="col">
        <div class="item">
            <h1>hello</h1>
        </div>
        <div class="item">
            <h1>hello</h1>
        </div>
    </div>
    <div class="col">
        <div class="item">
            <h1>hello</h1>
        </div>
        <div class="item">
            <h1>hello</h1>
        </div>
    </div>
</div>

<style>
    .grid {
        display: flex;
    }

    .col {
        flex: 1;
    }
</style>
