<template>
    <div class="table">
        <table>
            <tr>
                <td>id</td>
                <td>link</td>
                <td>name</td>
            </tr>
            <tr v-for="(item,key) in tableConfig" :key="key">
                <td>{{ item.id }}</td>
                <td>{{ item.link }}</td>
                <td>{{ item.name }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import tableConfig from "../public/data/tableConfig";

    export default {
        name: "Table",
        data() {
            return {
                tableConfig
            }
        },
    }
</script>