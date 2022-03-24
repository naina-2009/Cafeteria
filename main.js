menu_list_array = ["Expresso", "Tea", "Americano", "Latte", "Cappuccino", "Double Expresso", "Chocolate Tea", "English Tea", "Cupcakes", "Cheesecakes", "Tartlets", "Lemon Tea", "Mocha", "Iced Tea", "Iced Mocha", "Cinnamon Tea", "Cinnamon Croissant", "Cinnamon Cupcake", "Macchiato", "Croissants", "Chocolate Ice cream", "Vanilla Ice cream", "Hot Chocolate", "Italian Style Hot Chocolate", "Chocolate Ocean"];

function getmenu()
{
    var htmldata = "";
    
    for (var i = 0; i < menu_list_array.length; i++)
    {
        htmldata = htmldata + menu_list_array[i] + '<br>';
    }

    document.getElementById("display_menu").innerHTML = htmldata;
}