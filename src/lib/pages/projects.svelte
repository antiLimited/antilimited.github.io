<script>
    import { curPage } from "../../stores.js";
</script>

<div class="grid">
    <div class="col">
        <div class="item">
            <h1>big ass store</h1>
            <img src="src/assets/pages/projects/rt2store.png" alt="" />
            <a href="https://www.roblox.com/games/5865858426/Retail-Tycoon-2"
                >Check it out here</a
            >
            <p>
                haha look at this big ass store its got the helipads and all
                this stuff i made it in retail tycoon 2 also im typing for the
                sake of typing because i need this as an example description
                okay thanks byeeeeee
            </p>
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
        align-self: flex-start;
    }

    .col {
        flex: 1;
        justify-content: center;
    }

    .item {
        flex-wrap: nowrap;

        margin: 20px 10px;
        padding: 10px;
        border-radius: 15px;

        background-color: var(--foreground-color);
    }

    .item h1 {
        display: flex;
        justify-content: center;

        margin: 0;
        margin-bottom: 10px;
        border-radius: 15px;

        font-size: 25pt;
        text-align: center;

        background-color: var(--background-color);
    }

    .item img {
        display: flex;

        margin-bottom: 10px;
        max-width: 100%;
        border-radius: 15px;
    }

    .item p {
        display: flex;
        justify-content: center;

        margin: 0;
        padding: 10px;
        border-radius: 15px;

        text-align: center;

        background-color: var(--background-color);
    }
</style>
