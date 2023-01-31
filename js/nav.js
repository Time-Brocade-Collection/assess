window.addEventListener("load", function () {
    let tabs = document.querySelectorAll(".tabs");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].index = i;
        tabs[i].onclick = function () {
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList = "tabs";
            }
            tabs[this.index].classList.add("active");
            console.log(this.index);
        }

    }
    let storelist = document.querySelector(".storelist");
    let storelist_li = storelist.querySelectorAll("li");
    let getGreen = this.document.querySelectorAll(".getgreen");
    for (let i = 0; i < storelist_li.length; i++) {
        storelist_li[i].index = i;
        storelist_li[i].onclick = function () {
            for (let j = 0; j < storelist_li.length; j++) {
                storelist_li[j].style.backgroundColor = "#fff";
            }
            for (let j = 0; j < storelist_li.length; j++) {
                getGreen[j].src = "./images/icon-pin-solid-grey.svg";
            }
            storelist_li[this.index].style.backgroundColor = "rgb(224, 224, 224)";
            getGreen[this.index].src = "./images/icon-pin-solid-green.svg";
        }

    }
    let header_right = document.querySelector(".header-right");
    let display_right = document.querySelector(".display-right");
    let close = document.querySelector(".close");
    header_right.onclick = function () {
        display_right.style.display = "block";
    }
    close.onclick = function () {
        display_right.style.display = "none";
    }

    let header_shop = document.querySelectorAll(".header-shop");
    let header_account = document.querySelectorAll(".header-account");
    let header_menu = document.querySelectorAll(".header-menu");
    let display_one = document.querySelector(".display-one");
    let display_two = document.querySelector(".display-two");
    let display_three = document.querySelector(".display-three");
    let menu_all_box = document.querySelector(".menu-all-box");
    let logo = document.querySelectorAll(".logo");
    let denglu = document.querySelectorAll(".denglu");
    let zhuce = document.querySelectorAll(".zhuce");
    let main_all = document.querySelector(".main-all");
    let account_register = document.querySelector(".account-register");
    let page_menu_list = document.querySelector(".page-menu-list");
    for (let i = 0; i < logo.length; i++) {
        logo[i].onclick = function () {
            display_one.style.display = "block";
            display_two.style.display = "none";
            display_three.style.display = "none";
            menu_all_box.style.display = "none";
            // 显示初始页面
            main_all.style.display = "block";
            account_register.style.display = "none";
            page_menu_list.style.display = "none";
        }
    }
    for (let i = 0; i < denglu.length; i++) {
        denglu[i].onclick = function () {
            display_two.style.display = "block";
            display_one.style.display = "none";
            display_three.style.display = "none";
            menu_all_box.style.display = "none";
            // 显示登录注册页面
            main_all.style.display = "none";
            account_register.style.display = "block";
            page_menu_list.style.display = "none";

            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList = "tabs";
            }
            tabs[0].classList.add("active");


        }
    }
    for (let i = 0; i < zhuce.length; i++) {
        zhuce[i].onclick = function () {
            display_two.style.display = "block";
            display_one.style.display = "none";
            display_three.style.display = "none";
            menu_all_box.style.display = "none";
            // 显示登录注册页面
            main_all.style.display = "none";
            account_register.style.display = "block";
            page_menu_list.style.display = "none";

            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList = "tabs";
            }
            tabs[1].classList.add("active");

        }
    }
    for (let i = 0; i < header_shop.length; i++) {
        header_shop[i].onclick = function () {
            display_three.style.display = "block";
            display_one.style.display = "none";
            display_two.style.display = "none";
            menu_all_box.style.display = "none";
            // 显示初始页面
            main_all.style.display = "block";
            account_register.style.display = "none";
            page_menu_list.style.display = "none";

        }
    }
    for (let i = 0; i < header_account.length; i++) {
        header_account[i].onclick = function () {
            display_two.style.display = "block";
            display_one.style.display = "none";
            display_three.style.display = "none";
            menu_all_box.style.display = "none";
            // 显示登录注册页面
            main_all.style.display = "none";
            account_register.style.display = "block";
            page_menu_list.style.display = "none";

            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList = "tabs";
            }
            tabs[0].classList.add("active");


        }
    }
    for (let i = 0; i < header_menu.length; i++) {
        header_menu[i].onclick = function () {
            menu_all_box.style.display = "block";
            display_one.style.display = "none";
            display_two.style.display = "none";
            display_three.style.display = "none";
            // 显示菜单页面
            main_all.style.display = "none";
            account_register.style.display = "none";
            page_menu_list.style.display = "block";

            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList = "tabs";
            }
            tabs[3].classList.add("active");



        }
    }

    let menu_drink_box = document.querySelector(".menu-drink-box");
    let menu_food_box = document.querySelector(".menu-food-box");
    let menu_coffee_box = document.querySelector(".menu-coffee-box");
    let menu_shop_box = document.querySelector(".menu-shop-box");
    let menu_all = document.querySelectorAll(".menu-all");
    let menu_drink = document.querySelector(".menu-drink");
    let menu_food = document.querySelector(".menu-food");
    let menu_coffee = document.querySelector(".menu-coffee");
    let menu_shop = document.querySelector(".menu-shop");
    let back = document.querySelectorAll(".back");
    for (let i = 0; i < back.length; i++) {
        back[i].onclick = function () {
            menu_all_box.style.display = "block";
            menu_drink_box.style.display = "none";
            menu_food_box.style.display = "none";
            menu_coffee_box.style.display = "none";
            menu_shop_box.style.display = "none";
            menu_all[0].classList.add("active");
        }
    }
    menu_drink.onclick = function () {
        menu_all_box.style.display = "none";
        menu_drink_box.style.display = "block";
        menu_food_box.style.display = "none";
        menu_coffee_box.style.display = "none";
        menu_shop_box.style.display = "none";
        menu_all[1].classList.add("active");
    }
    menu_food.onclick = function () {
        menu_all_box.style.display = "none";
        menu_drink_box.style.display = "none";
        menu_food_box.style.display = "block";
        menu_coffee_box.style.display = "none";
        menu_shop_box.style.display = "none";
        menu_all[2].classList.add("active");
    }
    menu_coffee.onclick = function () {
        menu_all_box.style.display = "none";
        menu_drink_box.style.display = "none";
        menu_food_box.style.display = "none";
        menu_coffee_box.style.display = "block";
        menu_shop_box.style.display = "none";
        menu_all[3].classList.add("active");
    }
    menu_shop.onclick = function () {
        menu_all_box.style.display = "none";
        menu_drink_box.style.display = "none";
        menu_food_box.style.display = "none";
        menu_coffee_box.style.display = "none";
        menu_shop_box.style.display = "block";
        menu_all[4].classList.add("active");
    }



})