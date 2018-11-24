$(document).ready(function () {

    $("#start").on('click', function () {
        $(".homePage").css("display", "none");
        $(".container").css("display", "block");
    })
    $("#demo").on('click', function () {
        $('#won').modal({
            show: true
        })
    })

    $("#theme").on('click', function () {
        $('#themeModal').modal({
            show: true
        })
    })

    $('#save').on('click', function(){
        // size of the board
        var size = document.querySelector('#sizeWord').value;
        if(isNaN(size)){
            $("#board").css('height', '100vh');
            $("#board").css('width', '100vh');
        } else {
            $("#board").css('height', size + 'vh');
            $("#board").css('width', size + 'vh');
        }
        
        // backgroud of the board
        if(document.getElementById("girlyBack").checked) {
            $("#board").css('background-image',"url('https://i.pinimg.com/originals/05/d2/43/05d243e4b495d2f4399315147777a17b.jpg')");
        }
    })

    var boardArr = [
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'woodTop', 'woodTop', 'woodTop', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'woodTop', 'woodTop', 'woodTop', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'woodTop', 'woodTop', 'woodTop', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'woodTop', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'money', 'money', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'woodTop', 'woodTop', 'woodTop', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'money', 'rock', 'rock', 'sky', 'wood', 'sky', 'sky', 'rock'],
        ['dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop', 'dirtTop'],
        ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
        ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
        ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
        ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
        ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ];

    //CREATION PIXELS IN THE BOARD
    var board = $("#board"); // select the board
    var valTexture = undefined; // Last texture selected
    for (var i = 0; i < boardArr.length; i++) {
        for (var j = 0; j < boardArr[i].length; j++) {
            var pixel = $('<div/>');
            pixel.addClass(boardArr[i][j]);
            pixel.on('click', function () { // check if the tools and the texture are matching
                valTexture = this.className.replace("Top", "");
                var that = this
                if (valButton == valTexture) {
                    that.className = ("sky");
                    stockSelection(valButton);
                }
            });
            board.append(pixel)
        }
    }

    //CREATION TOOLS BUTTONS IN THE NAV BAR
    var toolsArr = ['rockTools', 'woodTools', 'dirtTools', 'moneyTools', 'select']; // Array of tools !!! 'Select' have to be at the end of the array
    var navbar = $("#navbar"); // select the board
    var valButton = undefined; // Last button selected
    for (var i = 0; i < toolsArr.length; i++) {
        var tool = $('<button/>');
        tool.addClass('tool');
        tool.attr('id', toolsArr[i]);
        tool.attr('value', toolsArr[i].replace("Tools", ""));
        if (i != toolsArr.length) {
            tool.on('click', function () {
                valButton = this.value;
            });
        }
        navbar.append(tool);
    }

    var arrSelection = [];
    $('#select').addClass('tool disable');

    function stockSelection(selection) { // stock the selection 
        arrSelection.push(selection);
        $('#select').addClass('tool ' + arrSelection[arrSelection.length - 1])
        $('#select').removeClass('disable');
    }

    $('#select').on('click', function () {
        $('#board').on('click', boardClicked);
    });

    function deleteOn() {
        $('#board').off('click', boardClicked)
    }

    function boardClicked(event) {
        var latsSelection = arrSelection[arrSelection.length - 1];
        console.log(arrSelection);
        if (arrSelection.length != 0) {
            console.log(arrSelection);
            if (arrSelection.length != 0) {
                var selectedPixel = event.target;
                selectedPixel.className = latsSelection;
                $('#select').removeClass(latsSelection)
                $('#select').addClass('tool disable');
                arrSelection = [];
            }
            latsSelection = "sky";
            $('#select').removeClass('disable');
            deleteOn();
        }
    }




});