var express = require('express');
var app = express();
// 解决跨域问题
const cors = require('cors');
app.use(cors());

app.get('/server', function (request, response) {

    let food = {
        "status": 200,
        "msg": "数据获取成功",
        "data": [
            {
                title: '咖啡融合冰淇淋',
                img: [
                    {
                        src: 'https://www.starbucks.com.cn/images/products/affogato.jpg',
                        name: '阿馥奇朵™'
                    },
                    {
                        src: 'https://www.starbucks.com.cn/images/products/cold-brew-malt.jpg',
                        name: '麦芽雪冷萃™'
                    },
                    {
                        src: '	https://www.starbucks.com.cn/images/products/cold-brew-float.jpg',
                        name: '冷萃浮乐朵™'
                    }, {
                        src: '	https://www.starbucks.com.cn/images/products/instore-nitro-cold-brew-float.jpg',
                        name: '气致™冷萃浮乐朵™'
                    },
                ]
            },

            {
                title: '烘焙',
                img: [
                    {
                        src: '	https://www.starbucks.com.cn/images/products/american-style-pancakes.jpg',
                        name: '美式松饼'
                    },
                    {
                        src: 'https://www.starbucks.com.cn/images/products/chocolate-muffin.jpg',
                        name: '阿馥奇朵™'
                    },
                    {
                        src: 'https://www.starbucks.com.cn/images/products/affogato.jpg',
                        name: '香浓巧克力麦芬'
                    },
                    {
                        src: '	https://www.starbucks.com.cn/images/products/cinnamon-swirl.jpg',
                        name: '旋风玉桂酥'
                    },
                    {
                        src: '	https://www.starbucks.com.cn/images/products/french-butter-croissant.jpg',
                        name: '法式香酥可颂'
                    },
                    {
                        src: '	https://www.starbucks.com.cn/images/products/french-caramel-bread.jpg',
                        name: '法式焦糖酥'
                    },
                    {
                        src: 'https://www.starbucks.com.cn/images/products/hazelnut-croissant.jpg',
                        name: '层层榛子果仁酥'
                    },
                    {
                        src: '	https://www.starbucks.com.cn/images/products/honey-raisin-scone.jpg',
                        name: '蜂蜜提子司康'
                    },


                ]
            },
            {
                title: '其他美食',
                img: [
                    {
                        src: 'https://www.starbucks.com.cn/images/products/cashews.jpg',
                        name: '腰果'
                    },
                    {
                        src: 'https://www.starbucks.com.cn/images/products/shortbread.png',
                        name: '英伦风味黄油饼干'
                    },
                    {
                        src: 'https://www.starbucks.com.cn/images/products/lollipops.jpg',
                        name: '棒棒糖'
                    }, {
                        src: 'https://www.starbucks.com.cn/images/products/fruit-salad.jpg',
                        name: '水果沙拉'
                    },
                ]
            },


        ]
    }
    //response.send是express框架提供的方法，相当于结束本次请求。
    response.send(food);
})

var server = app.listen(8000, function () {
    console.log('服务器启动了');
})