window.addEventListener("load", function () {
    function ajax(option) {
        let xhr = new XMLHttpRequest();

        // 拼接 查询参数
        let qs = resolveData(option.data);

        // 判断请求的类型
        // 不同的请求类型，对应 xhr 对象的不同操作，因此需要对请求类型进行 if … else … 的判断：
        if (option.method.toUpperCase() === "GET" || option.method === "get") {
            xhr.open("GET", `${option.url}?${qs}`);
            xhr.send();
        } else if (
            option.method.toUpperCase() === "POST" ||
            option.method === "post"
        ) {
            xhr.open(option.method, option.url);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(qs);
        }

        // 监听请求状态改变的事件
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                option.success(JSON.parse(xhr.responseText));
            }
        };
    }
    function resolveData(data) {
        let arr = [];
        for (let k in data) {
            arr.push(`${k}=${data[k]}`);
        }
        return arr.join("&");
    }

    let page_menu_list = document.querySelector(".page-menu-list");
    let menu_ul_one = document.querySelector(".menu_ul_one");
    let menu_ul_two = document.querySelector(".menu_ul_two");
    let menu_ul_three = document.querySelector(".menu_ul_three");
    let bigtitle = page_menu_list.querySelectorAll("h3");
    console.log(bigtitle);

    ajax({
        method: 'get',
        url: 'http://localhost:8000/server',
        data: { /* 请求参数对象 */ },
        success(res) {			// 数据请求成功后的回调函数
            console.log(res);
            let content = res.data;
            for (i = 0; i < content.length; i++) {
                let j = i;
                let etitle = content[i].title;
                bigtitle[j].innerHTML = etitle;
            }
            let imagesOneGroup = content[0].img;
            let a = '';
            for (j = 0; j < imagesOneGroup.length; j++) {
                a += '<li>' +
                    '<a href="javascript:void(0);">' +
                    '<div class="circle">' +
                    '<img src="' + imagesOneGroup[j].src + '" alt="">' +
                    '</div>' +
                    '<strong>' + imagesOneGroup[j].name + '</strong>' +
                    '</a>' +
                    '</li>';
            }
            let menu_ul_one_html = menu_ul_one.innerHTML;
            menu_ul_one.innerHTML = menu_ul_one_html + a;

            let imagesTwoGroup = content[1].img;
            let b = '';
            for (j = 0; j < imagesTwoGroup.length; j++) {
                b += '<li>' +
                    '<a href="javascript:void(0);">' +
                    '<div class="circle">' +
                    '<img src="' + imagesTwoGroup[j].src + '" alt="">' +
                    '</div>' +
                    '<strong>' + imagesTwoGroup[j].name + '</strong>' +
                    '</a>' +
                    '</li>';
            }
            let menu_ul_two_html = menu_ul_two.innerHTML;
            menu_ul_two.innerHTML = menu_ul_two_html + b;
            let imagesThreeGroup = content[2].img;
            let c = '';
            for (j = 0; j < imagesThreeGroup.length; j++) {
                c += '<li>' +
                    '<a href="javascript:void(0);">' +
                    '<div class="circle">' +
                    '<img src="' + imagesThreeGroup[j].src + '" alt="">' +
                    '</div>' +
                    '<strong>' + imagesThreeGroup[j].name + '</strong>' +
                    '</a>' +
                    '</li>';
            }
            let menu_ul_three_html = menu_ul_three.innerHTML;
            menu_ul_three.innerHTML = menu_ul_three_html + c;


        }

    })


})