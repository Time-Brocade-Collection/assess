window.addEventListener("load", function () {
    // 滑动验证码

    //设置最大可拖动的范围
    var max = 250;
    //设置拼图的正确位置坐标
    var final = 193;
    //设置缓冲数值，拼图移至验证区的允许范围
    var buffer = 7;
    var success = document.getElementById("success");
    var dot = document.getElementById("dot");
    var drag = document.getElementById("drag");
    //获取圆点的起始x坐标
    var dotStart = dot.offsetLeft;
    //使拼图随机向左移动一段距离
    // drag.style.left = -Math.random() * 200 + drag.offsetLeft + "px";
    //获取拼图的起始x坐标
    var dragStart = drag.offsetLeft;
    // 令滑块的初始位置和拼图相同
    // dot.style.left = dragStart;
    //当在滑块上按下鼠标左键时，开始执行以下代码
    dot.onmousedown = function (e) {
        //获取按下时的鼠标指针x坐标
        var startx = e.clientX;
        //获取按下时的滑块x坐标，不一定是起点，有可能用户多次滑动才验证成功
        var dotLeft = dot.offsetLeft;
        //此时，当鼠标在页面中移动时，触发以下函数
        document.onmousemove = function (e) {
            //计算当前鼠标指针x坐标与初始坐标之间的距离，求得滑块移动的距离
            var move = e.clientX - startx;
            //将以上距离加以起始滑块坐标，计算得到目的坐标值
            var to = dotLeft + move;
            //判断目的坐标值是否超过了滑块可移动区域的最右侧
            if (to > max + dotStart) {
                //如果超过，则使滑块停留在最右侧
                to = max + dotStart;
                //如果目的坐标值小于了滑块的起始坐标
            } else if (to < dotStart) {
                //此时使滑块停留在可滑动区域的最左侧
                to = dotStart;
            }
            //刷新滑块的x位置
            dot.style.left = to + 'px';
            //根据滑块的位移，刷新拼图的x位置，
            //to-dotStart不直接用move，因为有可能用户多次滑动，求得move不唯一
            drag.style.left = (dragStart + to - dotStart) + 'px';
        };
        //当松开鼠标左键时，开始执行以下代码

        document.onmouseup = function (e) {
            //此时清除onmousemove事件侦听，防止鼠标松开后滑块与鼠标继续滑动
            this.onmousemove = null;
            //计算拼图与目的坐标值的差值，判断其绝对值是否小于缓冲值
            if (Math.abs(drag.offsetLeft - final) < buffer) {
                //如果是，则表示拼图移动到了正确位置，此时显示success
                success.style.display = "block";
                //拼图移动到了正确，禁止再次滑动滑块
                dot.onmousedown = null;
            } else {
                //如果否，则继续隐藏拼图
                success.style.display = "none";

            }

        }

    };
})