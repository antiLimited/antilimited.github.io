<script>
    import { curPage } from "../../stores.js";
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
        flex-direction: row;
        flex-wrap: wrap;
        flex-basis: 100%;
        align-items: stretch;

        margin: 0%;
    }

    .col {
        align-items: center;

        flex: 1;
    }
</style>
