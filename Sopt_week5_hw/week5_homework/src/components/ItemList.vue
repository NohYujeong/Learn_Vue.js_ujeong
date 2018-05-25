<template>
    <div>
        <div class="items">
            <div class="container">
                <b-card-group deck="deck">
                    <b-card
                        v-for="item of items"
                        :key="item.id"
                        v-bind:title="item.name"
                        v-bind:img-src="item.url"
                        img-alt="Img"
                        img-top="img-top">
                        <p class="card-text price-text">
                            {{item.price}} 원
                        </p>
                        <div slot="footer">
                            <small class="text-muted">{{item.company}}</small>
                        </div>
                    </b-card>
                </b-card-group>
            </div>
        </div>
    </div>
</template>
<script>

const itemView = {
    template: '<div><p>{{item}}</p></div>'
}

export default {
    name : 'item-list',
    data() {
        return {
            items:[{
                id:0,
                url:"https://i.imgur.com/C7Vkk0l.jpg",
                company: "제주농장",
                name: "사과 1박스",
                price: "30,000"
            },
            {
                id:1,
                url:"https://i.imgur.com/C7Vkk0l.jpg",
                company: "청정유기농",
                name: "오렌지 1kg",
                price: "20,000"
            },
            {
                id:2,
                url:"https://i.imgur.com/C7Vkk0l.jpg",
                company: "성주꿀참외농장",
                name: "참외 2kg",
                price: "15,000"
            },
            {
                id:3,
                url:"https://i.imgur.com/C7Vkk0l.jpg",
                company: "아름다운농장",
                name: "자두 1소쿠리",
                price: "5,000"
            }]
        }
    },
    component: itemView
}
</script>

<style>
.card {
    width:45vw;
    text-align: center;
}
.card-img-top {
    width:18vw;
    margin:auto;
}
.price-text {
    color:#494949;
}
</style>
