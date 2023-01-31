window.addEventListener("load", function () {
    // 轮播图
    // 得到按钮和ul，ul整体进行运动
    let rightbtn = document.getElementById('rightbtn');
    let list = document.getElementById('list');

    // 克隆第一张图片
    let cloneli = list.firstElementChild.cloneNode(true); // 记得要写true，不然就只会克隆li而不会克隆img
    list.appendChild(cloneli);

    // 当前ul显示到第几张了，从0开始数
    let idx = 0;

    // 节流锁
    let lock = true;

    // 右边按钮监听
    rightbtn.onclick = function () {
        // 判断锁的状态
        if (!lock) return;
        lock = false;
        list.style.transition = 'left .8s ease 0s';
        idx++;
        if (idx > 2) {
            // 设置一个延时器，延时器的功能就是将ul瞬间拉回0的位置，延时器的目的就是让过渡动画结束之后
            setTimeout(function () {
                // 取消掉过渡，因为要的是瞬间移动，不是“咕噜”回去
                list.style.transition = 'none';
                list.style.left = 0;
                idx = 0;
            }, 500);
        }
        list.style.left = -idx * 1050 + 'px';

        // 函数节流
        setTimeout(function () {
            lock = true;
        }, 500);
    }
    var timer = setInterval(function () {
        //手动调用点击事件
        rightbtn.click();
    }, 3000);

    list.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;
    })
    list.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            //手动调用点击事件
            rightbtn.click();
        }, 3000);
    })

    let scroll_items = document.querySelector(".scroll-items");
    let scroll_arrow_left = document.querySelector(".scroll-arrow-left");
    let scroll_arrow_right = document.querySelector(".scroll-arrow-right");
    let n = 0;

    // 节流锁
    let alock = true;

    // 右边按钮监听
    scroll_arrow_right.onclick = function () {
        // none_left();
        // 判断锁的状态
        if (!alock) return;

        alock = false;

        scroll_items.style.transition = 'left .5s ease 0s';
        n++;
        if (n < 3) {
            scroll_items.style.left = -n * 90 + 'px';
        }
        if (n != 0) {
            scroll_arrow_left.style.opacity = "1";
        } else {
            scroll_arrow_left.style.opacity = "0";
        }
        // 函数节流
        setTimeout(function () {
            alock = true;
        }, 500);
    }

    // 左边按钮监听
    scroll_arrow_left.onclick = function () {
        // none_left();
        if (!alock) return;

        alock = false;
        if (n != 0) {
            n--;
            scroll_arrow_left.style.opacity = "1";
            scroll_items.style.left = 150 - n * 100 + 'px';
            if (n == 0) {
                scroll_arrow_left.style.opacity = "0";
            }
        } else {
            scroll_arrow_left.style.opacity = "0";
        }
        // 函数节流
        setTimeout(function () {
            alock = true;
        }, 500);
    }


    // 登录注册
    let username = document.querySelector(".username");
    let user = document.querySelector(".user");
    let message = document.querySelector(".message");
    message.style.display = "none";
    username.onfocus = function () {
        username.placeholder = "";
        user.classList.add("userfocus");
    }
    username.onblur = function () {
        if (username.value != "") {
            username.placeholder = "";
            message.style.display = "none";

        } else {
            user.classList.remove("userfocus");
            username.placeholder = "用户名或者电子邮箱";
            message.style.display = "block";
        }

    }
    let password = document.querySelector(".password");
    let pass = document.querySelector(".pass");
    password.onfocus = function () {
        password.placeholder = "";
        pass.classList.add("passfocus");
    }
    password.onblur = function () {
        if (password.value != "") {
            password.placeholder = "";

        } else {
            pass.classList.remove("passfocus");
            password.placeholder = "密码";
        }

    }
    let toggle_password = document.querySelector(".toggle-password");
    let showing = true;
    toggle_password.onclick = function () {
        if (showing) {
            toggle_password.classList.add("show");
            password.type = "text";
            showing = false;
        } else {
            toggle_password.classList.remove("show");
            password.type = "password";
            showing = true;
        }
    }

    let login_remember = document.querySelector(".login-remember");
    let number = true;
    login_remember.onclick = function () {
        if (number) {
            login_remember.classList.add("remember");
            number = false;
        } else {
            login_remember.classList.remove("remember");
            number = true;
        }
    }


})