$(document).ready(function () {
    filterRemote();
    var dataName = $("title").html();
    var StringDataItem = "";
    fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < data.product.length; i++) {
                if (data.product[i].name == dataName) {
                    StringDataItem = StringDataItem + 
                    "<div class='product_detail_item'>"+
                    "<div class='product_detail_item_img'>"+
                        "<img src="+ data.product[i].link_image + ">"+
                    "</div>"+
                    "<div class='product_detail_item_infor'>"+
                        "<div class='name_product'>"+
                            "<h1>"+ data.product[i].name +"</h1>"+
                        "</div>"+
                        "<div class='cost_product'>"+
                            "<h2>"+ data.product[i].cost +"</h2>"+
                        "</div>"+
                        "<div class='confirmed_product'>"+
                            "<ul>"+
                                "<li><strong>Sản phẩm chính hãng.</strong></li>"+
                                "<li><strong>Sản phẩm mới.</strong></li>"+
                                "<li><strong>Sử dụng dây điện chất lượng cao.</strong></li>"+
                                "<li><strong>Kết nối bằng Jack.</strong></li>"+
                                "<li><strong>Hỗ trợ kỹ thuật.</strong></li>"+
                            "</ul>"+
                        "</div>"+
                        "<div class='btn-contact'>" + "<button class='button-49' onclick=" +"location.href='"  + data.phone[0].number + "'" + '' + ">" + "Liên hệ " + "</button></div>"+
                        "<div class='warn_product'>" + "Sản phẩm sẽ được cập nhật vào mỗi buổi sáng lúc 7h00, nếu có gì thắc mắc xin liên hệ thông qua các nền tảng" + "<a href='https://zalo.me/0764188269'> Zalo </a>" + "và" + "<a href='https://facebook.com/suakhoathanhhai/''> Facebook </a>"+
                        "</div>"+
                    "</div>"+
                "</div>"
                }
            }
            $(".item_searched").append(StringDataItem);
        });

})