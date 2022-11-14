<!-- <template>
    <div class="result" v-for="comment in comments" :key="comment.id">
        <infinite-loading @infinite="load" />
    </div>
</template>

<script setup>
import { ref } from "vue";
// import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

let comments = ref([]);
let limit = 0;
const load = async ($state) => {
    console.log("loading...");

    try {
        const response = await fetch(
            `https://codingapple1.github.io/vue/more${limit}.json`
        );
        const json = await response.json();
        if (json.length < 10) $state.complete();
        else {
            this.gramData.push(json.data);
            $state.loaded();
        }
        limit++;
    } catch (error) {
        $state.error();
    }
};
</script>

<script>
export default {
    props: {
        gramData: Array,
    },
};
</script>
<style>
.result {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: 300;
    width: 400px;
    padding: 10px;
    text-align: center;
    margin: 0 auto 10px auto;
    background: #eceef0;
    border-radius: 10px;
}
</style> -->