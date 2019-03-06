
    const url = 'https://api.digiseller.ru/api/seller-goods';
    const request = {
                    "id_seller": 845107,
                    "order_col": "name",
                    "order_dir": "desc",
                    "rows": 10,
                    "page": 1,
                    "show_hidden": 0,
                    "currency": "RUR",
                    "lang": "ru-RU"
                    }
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "text/json",
            "Accept": "text/json"
        },
        body: JSON.stringify(request)
    }).then(function(resp) {
        console.log(resp.status);
        return resp.json();
    }).then(function(data){
        console.log(data)

    $('.slidername1').text(data.rows[0].name_goods);
    $('.slidername2').text(data.rows[1].name_goods);
    $('.slidername3').text(data.rows[2].name_goods);

    $('.sliderdesc1').text(data.rows[0].info_goods);
    $('.sliderdesc2').text(data.rows[1].info_goods);
    $('.sliderdesc3').text(data.rows[2].info_goods);

    $('.sliderprice1').text(data.rows[0].price);
    $('.sliderprice2').text(data.rows[1].price);
    $('.sliderprice3').text(data.rows[2].price);




    }).catch(console);
