function burgerIconClicked() {
    if (document.getElementById('navBar_').style.right == "" || document.getElementById('navBar_').style.right == "-100vw"){
        document.getElementById('navBar_').style.animation = 'slideNavBarIn 0.5s';
        document.getElementById('navBar_').style.right = '0';
    }
    else {
        document.getElementById('navBar_').style.animation = 'slideNavBarOut 0.5s';
        document.getElementById('navBar_').style.right = '-100vw';
    }
}