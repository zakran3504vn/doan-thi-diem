$(document).ready(function() {
    // This is a functions that scrolls to #{blah}link
    function goToByScroll(id) {
        $('html,body').animate({
            scrollTop: $(id).offset().top - 100
        }, 2000);
    }
    $(".link-scroll").click(function(e) {
        e.preventDefault();
        goToByScroll($(this).attr('href'));
    });
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "" & this.classList.contains('fix-scroll')) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        if(this.classList.contains('faqs-scroll')) {
            var scrollTo = $(hash).offset().top - 200;
        } else {
            var scrollTo = $(hash).offset().top - 100;
        }

        $('html').animate({
        scrollTop: scrollTo
        }, 800, function(){
        // window.location.hash = hash;
        });
    } // End if
  });


    //  header freeze
    window.onscroll = function() {
        freezeHeaderSticky();
    };

    function freezeHeaderSticky() {
        var header = document.getElementById("header");
        console.log()
        if (header !== undefined) {
            // if (window.pageYOffset == 0 ) {
            //       header.classList.remove("header-sticky");
            // } else {
            //       header.classList.add("header-sticky");
            // }
        }
    }

    /******* Olympians tieu bieu ********/
    var detailItem = document.getElementsByClassName('detail-btn');

    for (var i = 0; i < detailItem.length; i++) {

        detailItem[i].addEventListener('mouseover', function (e) {
            e.preventDefault();
            var achItem = this.parentNode.parentElement;

            var current = document.getElementsByClassName('ach-item active-item');
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active-item", "");
            }
            // Add the active class to the current/clicked button
            achItem.className += " active-item";
            // var achInfo = this.getElementsByClassName('ach-item-info')[0];
            // opacityEffect(achInfo, 0, 1, 200, 10);
        });
        detailItem[i].addEventListener('mouseout',
            function (e) {
                e.preventDefault();
                var current = document.getElementsByClassName('ach-item active-item');
                // var achInfo = current[0].getElementsByClassName('ach-item-info')[0];
                // opacityEffect(achInfo, 1, 0, 200, 10);

                if (current.length > 0) {
                    current[0].className = current[0].className.replace("active-item", "");
                }
            });
    }

    var achItemImg = document.getElementsByClassName('ach-item-img');
    for (var j = 0; j < achItemImg.length; j++) {
        achItemImg[j].addEventListener('mouseover', function (e) {
            var popupItem = this.getElementsByClassName('ach-item-info')[0];
            var parentItem = this.parentNode.parentNode;
            var screenWidth = window.innerWidth;
            var leftWidth = this.parentNode.offsetLeft + popupItem.offsetLeft;
            var rightWidth = screenWidth - leftWidth;

            if (rightWidth < popupItem.offsetWidth) {
                popupItem.style.right = "75%";
                popupItem.style.left = 'unset';
            }
        });
    }

    /**************** Vendor-list ****************/
    var vendorItem = document.getElementsByClassName('vendor-item');
    for (var j = 0; j < vendorItem.length; j++) {
        vendorItem[j].addEventListener('mouseover', function (e) {
            var popupItem = this.getElementsByClassName('vendor-infomation')[0];
            var parentItem = this.parentNode.parentNode;
            var screenWidth = window.innerWidth;
            var contentWidth = document.getElementsByClassName('tabs-content')[0].offsetWidth;
            var leftWidth = this.parentNode.offsetLeft + popupItem.offsetLeft;
            var rightWidth = contentWidth - leftWidth;
            console.log('leftWidth', leftWidth);
            console.log('contentWidth', contentWidth);

            if (rightWidth < popupItem.offsetWidth) {
                popupItem.style.right = "75%";
                popupItem.style.left = 'unset';
            }
            if(screenWidth < 600){
                console.log('bbb', screenWidth );
                popupItem.style.right = "0";
                popupItem.style.left = '15px';
            }
        });
    }


    /**************** English -program ****************/
    var en_tab = document.getElementsByClassName("question-item");

    for (var i = 0; i < en_tab.length; i++) {
        en_tab[i].addEventListener("click", function() {
            var queryString = window.location.search;
            var urlParams = new URLSearchParams(queryString);
            var path = location.protocol + '//' + location.host + location.pathname;
            var answer = this.getElementsByClassName('answer')[0];

            if (this.classList.contains('active')) {
                this.getElementsByClassName('drop-down')[0].classList.remove('scale');
                answer.style.height = "0";
                this.classList.remove('active');

                if (location.pathname === '/so-tay-hoc-sinh-lp.html') {
                    var caphoc = urlParams.get('caphoc');
                    window.history.pushState('caphoc', 'Khoi', path +'?caphoc=' + caphoc);
                    console.log('remove');
                }

            } else {
                var en_qus = document.getElementsByClassName('question-item');
                // console.log(questions[])
                for (j = 0; j < en_qus.length; j++) {
                    if (en_qus[j].classList.contains('active')) {
                        en_qus[j].getElementsByClassName('drop-down')[0].classList.remove('scale');
                        var q_panel = en_qus[j].getElementsByClassName('answer')[0];
                        q_panel.style.height = "0";
                        urlParams.delete('question');
                        en_qus[j].classList.remove('active');

                        if (location.pathname === '/so-tay-hoc-sinh-lp.html') {
                            var caphoc = urlParams.get('caphoc');
                            window.history.pushState('caphoc', 'Khoi', path +'?caphoc=' + caphoc);
                            console.log('remove');
                        }
                    }
                }

                this.classList.add("active");
                this.getElementsByClassName('drop-down')[0].classList.add('scale');
                answer.style.height = answer.scrollHeight + "px";

                console.log("diqua", location.pathname);
                var question = this.dataset.question;
                if (location.pathname === '/so-tay-hoc-sinh-lp.html') {
                    window.history.pushState('question', 'Cauhoi', location.href +'&question=' + question);
                    console.log("ADDD");
                }
            }
        });
    }


    /**************** FAQS ****************/
    // sidebar sticky
    var right_sidebar = document.getElementsByClassName('sidebar-sticky')[0];
    if (right_sidebar != 'undefined') {
        // Sticky.init(right_sidebar);
    }

    var acc = document.getElementsByClassName("question-content");
    var i, j;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            var panel = this.nextElementSibling;
            if (this.classList.contains('active')) {
                this.getElementsByClassName('drop-down')[0].classList.remove('scale');
                panel.style.height = "0";
                panel.style.marginBottom = "0";
                this.classList.remove('active');
            } else {
                var questions = document.getElementsByClassName('question-content');
                // console.log(questions[])
                for (j = 0; j < questions.length; j++) {
                    if (questions[j].classList.contains('active')) {
                        questions[j].getElementsByClassName('drop-down')[0].classList.remove('scale');
                        var q_panel = questions[j].nextElementSibling;
                        q_panel.style.height = "0";
                        q_panel.style.marginBottom = "0";
                        questions[j].classList.remove('active');
                    }
                }

                this.classList.add("active");
                this.getElementsByClassName('drop-down')[0].classList.add('scale');
                panel.style.height = panel.scrollHeight + "px";
                panel.style.marginBottom = "40px";
            }
        });
    }
});

/**************** Header - Footer - Search ****************/
$( document ).ready(function() {
    var header = document.getElementById('header');

    var interval_obj = setInterval(function(){
        if ( !header.classList.contains('loading')) {
            headerEffect();
            searchEvent();
            clearInterval(interval_obj);
            // addTITScript();
        }
    }, 1000);
});
function searchEvent() {
    var search_key = document.getElementById('search-key');
    search_key.addEventListener("input",
        function() {
            if(search_key.value === "") {
                document.getElementsByClassName('search-result')[0].style.display = "none";
                document.getElementById('header').classList.remove('has-search-result');
            } else {
                var Rg = Ringer;
                var search_input = encodeURI(search_key.value);
                // get api
                let new_params = {
                    uid: '6127032134',
                    lid: 'olympia',
                    type: 'post',
                    keyword: search_input
                };

                let url = 'api/lookup?';
                new_url = url + Rg.util.paramsToQueryUrl(new_params);

                console.log('query', new_url);

                Rg.api.get(new_url, (res) => {
                    let list = (res.data)?res.data.list: [];
                    let total = list.length;
                    generalSearchResult(list, total, search_input);
                    });
            }

        });
}
function generalSearchResult(list, total, search_input) {
    var search_results = document.getElementById('search-results');
    document.getElementsByClassName('search-result')[0].style.display = "block";

    document.getElementById('header').classList.add('has-search-result');

    var total_result = document.getElementById('total-result');
    total_result.innerHTML = total;

    var key_word = document.getElementById('key-word');
    key_word.innerHTML = '"' + decodeURI(search_input) + '"';
    search_results.textContent = '';
    for(var i = 0; i < list.length; i++) {
        var result_item = document.createElement('li');
        result_item.setAttribute('class', 'result-item');

        var title_article = document.createElement('a');
        title_article.setAttribute('class', 'title-article');
        title_article.setAttribute('href', '/' + list[i].url);
        title_article.textContent = list[i].title;
        result_item.appendChild(title_article);

        var content_article = document.createElement('p');
        content_article.setAttribute('class', 'content-article');
        content_article.textContent = list[i].desc;

        result_item.appendChild(content_article);
        search_results.appendChild(result_item);
    }
}

function headerEffect () {
    //EFFECT CLOSE FOR MEGA MENU PC
    var pcBtnClose = document.getElementById('pc-btn-close');
    var pcMenuContainer = document.getElementsByClassName('menu-container-pc');
    var menuCollapse = document.getElementById('menu-collapse'); console.log(menuCollapse);
    var width = document.documentElement.clientWidth;

    var searchBox = document.getElementsByClassName('search-block')[0];
    var menuInfoItem = document.getElementsByClassName('menu-info-item');
    var pcMenuItem = document.getElementsByClassName('pc-menu-item');

    var bodyContent = document.getElementsByClassName('body-content')[0];

    window.addEventListener('resize', function(){
        width = document.documentElement.clientWidth;
        console.log(width);
        // pcMenuContainer[0].style.transform = 'translate3d(' + width + 'px, 0px, 0px)';
    });



    var pcItemMenus = document.getElementsByClassName('pc-menu-item-box');

    for(var n = 0; n < pcItemMenus.length; n++){
        pcItemMenus[n].addEventListener('click', function (e) {

            var liItem = this.parentNode;
            console.log(liItem);
            // e.preventDefault();
            var current = document.getElementsByClassName('active-item');
            if(current.length > 0){
                current[0].className = current[0].className.replace(" active-item", "");

            }
            // Add the active class to the current/clicked button
            this.parentNode.className += " active-item";
            var pcMenuSub2Height = document.getElementsByClassName('pc-menu-sub-2');
            for (var i = 0; i < pcMenuSub2Height.length; i++) {
                pcMenuSub2Height[i].dataset.height = pcMenuSub2Height[i].offsetHeight;
                pcMenuSub2Height[i].style.height = 0;
                pcMenuSub2Height[i].style.visibility = 'hidden';
            }

            if(this.parentNode.classList.contains('has-children')) {
                var titleSub = this.parentNode.getElementsByClassName('title-sub')[0];
                titleSub.style.opacity = 0;
                // translateEffect(titleSub, 15, 0, 500, 10, 'y');
                opacityEffect(titleSub, 0, 1, 500, 10);
            }

            var pcSubItem = this.parentNode.getElementsByClassName('pc-sub-item');

            var term = 0;
            for (var i = 0; i < pcSubItem.length; i++) {
                pcSubItem[i].style.opacity = 0;
                translateEffect(pcSubItem[i], 15, 0, 400, 10, 'y', 400 + term);
                opacityEffect(pcSubItem[i], 0, 1, 400, 10, 400 + term);
                term = term + 150;
            }
        });
    }

    // event for sub menu item 2 click pc
    var btnDropdownPc = document.getElementsByClassName('pc-btn-dropdown');
    console.log(btnDropdownPc);

    for (var i = 0; i < btnDropdownPc.length; i++) {
        btnDropdownPc[i].addEventListener('click', function (e) {
            var pcSubItemParent = this.parentNode;
            var pcSubItem = document.getElementsByClassName('pc-sub-item has-children-2');
            console.log(pcSubItem);
            for ( var j = 0; j < pcSubItem.length; j++) {
                if (pcSubItem[j] !== pcSubItemParent & pcSubItem[j].classList.contains('active-sub-2')) {
                    pcSubItem[j].classList.remove('active-sub-2');
                    var pcSubItemMenu = pcSubItem[j].getElementsByClassName('pc-menu-sub-2')[0];
                    var pcSubItemMenuItem = pcSubItemMenu.getElementsByClassName('pc-sub-item-2');
                    var term = 0;
                    var height = Number(pcSubItemMenu.dataset.height);
                    for (var i = pcSubItemMenuItem.length - 1; i >= 0 ; i--) {
                        translateEffect(pcSubItemMenuItem[i], 0, 15, 300, 10, 'y', term);
                        opacityEffect(pcSubItemMenuItem[i], 1, 0, 300, 10, term);
                        term = term + 150;
                    }
                    heightEffect(pcSubItemMenu, height, 0, 350, 10);
                    pcSubItemMenu.style.visibility = 'hidden';
                }
            }

            if(pcSubItemParent.classList.contains('has-children-2')){
                pcSubItemParent.classList.toggle('active-sub-2');
            }

            var pcMenuSub2 = pcSubItemParent.getElementsByClassName('pc-menu-sub-2')[0];
            var pcMenuSub2Item = pcSubItemParent.getElementsByClassName('pc-sub-item-2');

            var height = Number(pcMenuSub2.dataset.height);

            if (pcSubItemParent.classList.contains('active-sub-2')) {
                var term = 0;
                for (var i = 0; i < pcMenuSub2Item.length; i++) {
                    console.log(pcMenuSub2Item[i].offsetHeight)
                    translateEffect(pcMenuSub2Item[i], 15, 0, 300, 10, 'y', term);
                    opacityEffect(pcMenuSub2Item[i], 0, 1, 300, 10, term);
                    term = term + 150;
                }
                heightEffect(pcMenuSub2, 0, height, 350, 10);
                pcMenuSub2.style.visibility = 'unset';
            } else {
                var term = 0;
                for (var i = pcMenuSub2Item.length - 1; i >= 0 ; i--) {
                    translateEffect(pcMenuSub2Item[i], 0, 15, 300, 10, 'y', term);
                    opacityEffect(pcMenuSub2Item[i], 1, 0, 300, 10, term);
                    term = term + 150;
                }
                heightEffect(pcMenuSub2, height, 0, 350, 10);
                pcMenuSub2.style.visibility = 'hidden';
            }
        })
    }
    //END - CLOSE FOR MEGA MENU PC

    //SEARCH
    var btnSearch = document.getElementById('btn-search');
    var btnSearchClose = document.getElementById('btn-search-close');
    var searchContainer = document.getElementsByClassName('search-pc');
    var mbSearch = document.getElementsByClassName('mb-search');
    var inputSearchMb = document.getElementsByClassName('mb-input-search');
    var resetSearch = document.getElementById('reset-search');

    btnSearch.addEventListener('click', function (e) {
        e.preventDefault();
         $('html, body').animate({
        scrollTop: 0
        }, 800, function(){
            document.getElementById('search-key').focus();
        });
        searchContainer[0].classList.add('enable');
        searchContainer[0].style.width = "100%";

        var overMark = document.getElementsByClassName('overlay_mark_search')[0];
        overMark.style.display = "block";

        var headerNavbar = document.getElementById('header');
        headerNavbar.classList.add('search-open');
    });

    btnSearchClose.addEventListener('click', function (e) {
        e.preventDefault();
        searchContainer[0].classList.remove('enable');
        searchContainer[0].style.width = "0";
        // document.getElementsByClassName('search-result')[0].style.display = "none";
        document.getElementById('search-key').value ="";
        var overMark = document.getElementsByClassName('overlay_mark_search')[0];
        overMark.style.display = "none";

        var headerNavbar = document.getElementById('header');
        headerNavbar.classList.remove('search-open');
    });

    /*resetSearch.addEventListener('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
        scrollTop: 0
        }, 800, function(){
            document.getElementsByClassName('search-result')[0].style.display = "none";
            var search_key = document.getElementById('search-key');
            search_key.value = "";
            search_key.focus();
        });
    });*/

    mbSearch[0].addEventListener('click', function (e) {
        searchContainer[0].classList.add('enable');
        searchContainer[0].style.width = "100%";
    });

    //END - SEARCH


// ***********************************************

    //EFFECT FOR MOBILE
    //Effect for mega menu mobile, when click button collapse, mega menu has shown
    // and when click button close, mega menu has hidden
    var menuMb = document.getElementById('mb-menu-collapse');
    var menuMbContainer = document.getElementsByClassName('mb-menu-container');
    var btnMbClose = document.getElementById('btn-close');
    var itemMenus = document.getElementsByClassName('mb-menu-item-box');
    window.addEventListener('resize', function(){
        width = document.documentElement.clientWidth;
        // pcMenuContainer[0].style.transform = 'translate3d(' + width + 'px, 0px, 0px)';
    });


    menuMb.onclick = function () {
        // menuMbContainer[0].classList.add('active');
        // menuMbContainer[0].style.width = "100%";
        translateEffect(menuMbContainer[0], width, 0, 300, 10, 'x');
        menuMbContainer[0].style.display = "block";

        var pcLabelMenu = document.getElementsByClassName('label-menu')[0];
        pcLabelMenu.style.opacity = 0;
        opacityEffect(pcLabelMenu, 0, 1, 500, 10, 500);

        var term = 200;
        for (var i = 0; i < itemMenus.length; i++) {
            itemMenus[i].style.opacity = 0;
            translateEffect(itemMenus[i], 10, 0, 300, 10, 'y', 500 + term);
            opacityEffect(itemMenus[i], 0, 1, 300, 10, 500 + term);
            term = term + 200;
        }

        var pcLabelMenu = document.getElementsByClassName('mb-language')[0];
        pcLabelMenu.style.opacity = 0;
        opacityEffect(pcLabelMenu, 0, 1, 700, 10, 1000);

    }
    btnMbClose.onclick = function () {
        menuMbContainer[0].classList.remove('active');
        translateEffect(menuMbContainer[0], 0, width, 400, 10, 'x');
        // menuMbContainer[0].style.width = "0";
        var itemList = document.getElementsByClassName('mb-menu-item');
        for (var i = 0; i < itemList.length; i++) {
            if(itemList[i].classList.contains('has-children')) {
                itemList[i].classList.remove('active-item');
                // var mbMenu = itemList[i].getElementsByClassName('mb-menu-sub');
                // console.log(mbMenu);
                // mbMenu[0].style.width = 0;
            }
        }

        menuMbContainer[0].style.display = "none";
        var btnBack = document.getElementById('btn-back');
        var labelMenuSub = document.getElementsByClassName('label-menu-sub');
        // show button back and title menu sub
        btnBack.style.visibility = "hidden";
        btnBack.style.opacity = "0";

        labelMenuSub[0].style.visibility = "hidden";
        labelMenuSub[0].style.opacity = "0";
    };

    //when click item menu, currently item has show and it's siblings has hidden
    // Loop through the buttons and add the active class to the current/clicked button
    for(var i =0; i < itemMenus.length; i++){
      itemMenus[i].addEventListener('click', function (e) {
          if(this.parentNode.classList.contains('has-children')){
                        e.preventDefault();
          var current = document.getElementsByClassName('active-item');

          if(current.length > 0){
              current[0].className = current[0].className.replace(" active-item", "");
          }
          // Add the active class to the current/clicked button
          this.parentNode.className += " active-item";

          //if item has menu level 2, show menu children
          var btnBack = document.getElementById('btn-back');
          var labelMenuSub = document.getElementsByClassName('label-menu-sub');

              var mbMenuSub = this.parentNode.getElementsByClassName('mb-menu-sub');
              mbMenuSub[0].style.width = "100%";

              // show button back and title menu sub
              btnBack.style.visibility = "visible";
              btnBack.style.opacity = "1";

              labelMenuSub[0].style.visibility = "visible";
              labelMenuSub[0].style.opacity = "1";
              //Get title menu sub
              labelMenuSub[0].innerHTML = this.firstElementChild.innerHTML;

                var mbSubItem = this.parentNode.getElementsByClassName('mb-sub-item');
                console.log(mbSubItem);
                var term = 0;
                for (var i = 0; i < mbSubItem.length; i++) {
                    mbSubItem[i].style.opacity = 0;
                    translateEffect(mbSubItem[i], 10, 0, 300, 10, 'y', 300 + term);
                    opacityEffect(mbSubItem[i], 0, 1, 300, 10, 300 + term);
                    term = term + 200;
                }

              btnBack.addEventListener('click', function (e) {
                  e.preventDefault();
                  mbMenuSub[0].style.width = "0";
                  btnBack.style.visibility = "hidden";
                  btnBack.style.opacity = "0";

                  labelMenuSub[0].style.visibility = "hidden";
                  labelMenuSub[0].style.opacity = "0";

                  var hasChild2 = document.getElementsByClassName('has-children-2');
                  for (var i = 0; i < hasChild2.length; i++) {
                    if (hasChild2[i].classList.contains('active-sub')) {
                        hasChild2[i].classList.remove('active-sub');
                    }
                  }
              });
          }
      })
    }

    // Moblie click on icon infor
    var iconEmail = document.getElementById('icon-email');
    var iconPhone = document.getElementById('icon-phone');
    var iconAddress = document.getElementById('icon-address');

    var infoEmail = document.getElementById('info-email');
    var infoPhone = document.getElementById('info-phone');
    var infoAddress = document.getElementById('info-address');

    iconEmail.addEventListener('click', function (e){
        infoEmail.style.display = 'block';
    });
    iconPhone.addEventListener('click', function (e){
        infoPhone.style.display = 'block';
    });
    iconAddress.addEventListener('click', function (e){
        infoAddress.style.display = 'block';
    });

    window.onclick = function(event) {
        console.log(event.target);
      if (event.target == infoEmail) {
        infoEmail.style.display = "none";
      }
      if (event.target == infoPhone) {
        infoPhone.style.display = "none";
      }
      if (event.target == infoAddress) {
        infoAddress.style.display = "none";
      }
      var element = event.target;
      if (element.classList.contains('modal')) {
        closeModal(element.id);
      }
    }

}

// function addTITScript(){
//     var script = document.createElement('script');
//
//     script.type = 'text/javascript';
//     script.src = 'js/tit.js';
//
//     document.body.append(script);
// }
/**************** Header - Footer - Search End ****************/


window.addEventListener('load', function() {
    const faders = document.querySelectorAll(".show-on-scroll");

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -200px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                entry.target.classList.add("is-visible");
                appearOnScroll.unobserve(entry.target);

                if (entry.target.classList.contains('summer-program')) {
                    addEffectSummerProgram(entry.target);
                }
                if (entry.target.classList.contains('english-program')) {
                    addEffectEnglishProgram(entry.target);
                }
                if (entry.target.classList.contains('learning-program')) {
                    addEffectLearningProgram(entry.target);
                }
                if (entry.target.classList.contains('about-us')) {
                    addEffectAboutUs(entry.target);
                }
                if (entry.target.classList.contains('home-page')) {
                    addEffectHome(entry.target);
                }
                if (entry.target.classList.contains('sbqt')) {
                    addEffectSbqt(entry.target);
                }
                if (entry.target.classList.contains('cttc')) {
                    addEffectCttc(entry.target);
                }
                if (entry.target.classList.contains('one-day')) {
                    addEffectOneDay(entry.target);
                }
                if (entry.target.classList.contains('dn-olympia')) {
                    addEffectEmployee(entry.target);
                }
            }
        });
    },
        appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});

function addEffectEmployee(element) {
    var elementName = element.id;
    switch (elementName) {
        case 'employee-row1':
            case 'employee-row2':
                case 'employee-row3':
            var title = element.getElementsByClassName('employee-subtitle')[0];
            var items = element.getElementsByClassName('employee-item');
            opacityEffect(title, 0, 1, 500, 10);
            translateEffect(title, 100, 0, 500, 10, 'y');

            var delay = 500;
            for (var i = 0; i < items.length; i++) {
                opacityEffect(items[i], 0, 1, 500, 10, delay);
                delay += 300;
            }
            break;
    }
}

// Mot ngay o Plympia
function addEffectOneDay (element) {
    var elementName = element.id;
    switch (elementName) {
        case 'od_description':
            var left = element.getElementsByClassName('color-3a')[0];
            opacityEffect(left, 0, 1, 500, 10);
            translateEffect(left, 60, 0, 500, 10, 'y');
            break;
        case 'od_1':
            var inner = element.getElementsByClassName('od_item_inner')[0];
            var inner_img = inner.getElementsByClassName('od_item_img')[0];
            var inner_span = inner.getElementsByClassName('od_item_time')[0];
            var inner_des = inner.getElementsByClassName('od_item_des')[0];
            opacityEffect(inner_img, 0, 1, 500, 10);
            translateEffect(inner_img, -160, 0, 500, 10, 'y');

            opacityEffect(inner_des, 0, 1, 500, 10);
            translateEffect(inner_des, -160, 0, 500, 10, 'y');

            opacityEffect(inner_span, 0, 1, 500, 10);
            translateEffect(inner_span, -60, 0, 500, 10, 'x');
            break;
        case 'od_2':
            var inner = element.getElementsByClassName('od_item_inner')[0];
            var inner_img = inner.getElementsByClassName('od_item_img')[0];
            var inner_span = inner.getElementsByClassName('od_item_time')[0];
            var inner_des = inner.getElementsByClassName('od_item_des')[0];
            opacityEffect(inner_img, 0, 1, 500, 10);
            translateEffect(inner_img, 260, 0, 500, 10, 'x');

            opacityEffect(inner_des, 0, 1, 500, 10);
            translateEffect(inner_des, 260, 0, 500, 10, 'x');

            opacityEffect(inner_span, 0, 1, 500, 10);
            translateEffect(inner_span, -160, 0, 500, 10, 'x');
            break;
        case 'od_3':
            var inner = element.getElementsByClassName('od_item_inner')[0];
            var inner_img = inner.getElementsByClassName('od_item_img')[0];
            var inner_span = inner.getElementsByClassName('od_item_time')[0];
            var inner_des = inner.getElementsByClassName('od_item_des')[0];
            opacityEffect(inner_img, 0, 1, 500, 10);
            translateEffect(inner_img, 260, 0, 500, 10, 'x');

            opacityEffect(inner_des, 0, 1, 500, 10);
            translateEffect(inner_des, 260, 0, 500, 10, 'x');

            opacityEffect(inner_span, 0, 1, 500, 10);
            translateEffect(inner_span, -160, 0, 500, 10, 'x');
            break;
        case 'od_4':
            var inner = element.getElementsByClassName('od_item_inner')[0];
            var inner_img = inner.getElementsByClassName('od_item_img')[0];
            var inner_span = inner.getElementsByClassName('od_item_time')[0];
            var inner_des = inner.getElementsByClassName('od_item_des')[0];
            opacityEffect(inner_img, 0, 1, 500, 10);
            translateEffect(inner_img, -260, 0, 500, 10, 'x');

            opacityEffect(inner_des, 0, 1, 500, 10);
            translateEffect(inner_des, -260, 0, 500, 10, 'x');

            opacityEffect(inner_span, 0, 1, 500, 10);
            translateEffect(inner_span, 160, 0, 500, 10, 'x');
            break;
        case 'od_5':
            var inner = element.getElementsByClassName('od_item_inner')[0];
            var inner_img = inner.getElementsByClassName('od_item_img')[0];
            var inner_span = inner.getElementsByClassName('od_item_time')[0];
            var inner_des = inner.getElementsByClassName('od_item_des')[0];
            opacityEffect(inner_img, 0, 1, 500, 10);
            translateEffect(inner_img, 260, 0, 500, 10, 'y');

            opacityEffect(inner_des, 0, 1, 500, 10);
            translateEffect(inner_des, 260, 0, 500, 10, 'y');

            opacityEffect(inner_span, 0, 1, 500, 10);
            translateEffect(inner_span, -160, 0, 500, 10, 'x');
            break;
        case 'od_6':
            var inner = element.getElementsByClassName('od_item_inner')[0];
            var inner_img = inner.getElementsByClassName('od_item_img')[0];
            var inner_span = inner.getElementsByClassName('od_item_time')[0];
            var inner_des = inner.getElementsByClassName('od_item_des')[0];
            opacityEffect(inner_img, 0, 1, 500, 10);
            translateEffect(inner_img, -260, 0, 500, 10, 'y');

            opacityEffect(inner_des, 0, 1, 500, 10);
            translateEffect(inner_des, -260, 0, 500, 10, 'y');

            opacityEffect(inner_span, 0, 1, 500, 10);
            translateEffect(inner_span, 160, 0, 500, 10, 'x');
            break;
        case 'od_7':
            var inner = element.getElementsByClassName('od_item_inner')[0];
            var inner_img = inner.getElementsByClassName('od_item_img')[0];
            var inner_span = inner.getElementsByClassName('od_item_time')[0];
            var inner_des = inner.getElementsByClassName('od_item_des')[0];
            opacityEffect(inner_img, 0, 1, 600, 10);
            translateEffect(inner_img, 260, 0, 600, 10, 'x');

            opacityEffect(inner_des, 0, 1, 600, 10);
            translateEffect(inner_des, 260, 0, 600, 10, 'x');

            opacityEffect(inner_span, 0, 1, 600, 10);
            translateEffect(inner_span, -160, 0, 600, 10, 'x');
            break;
        case 'od_8':
            var inner = element.getElementsByClassName('od_item_inner')[0];
            var inner_img = inner.getElementsByClassName('od_item_img')[0];
            var inner_span = inner.getElementsByClassName('od_item_time')[0];
            var inner_des = inner.getElementsByClassName('od_item_des')[0];
            opacityEffect(inner_img, 0, 1, 1200, 10);
            translateEffect(inner_img, -260, 0, 1200, 10, 'x');

            opacityEffect(inner_des, 0, 1, 1200, 10);
            translateEffect(inner_des, -260, 0, 1200, 10, 'x');

            opacityEffect(inner_span, 0, 1, 1200, 10);
            translateEffect(inner_span, 160, 0, 1200, 10, 'x');
            break;
        case 'od_9':
            var inner = element.getElementsByClassName('od_item_inner')[0];
            var inner_img = inner.getElementsByClassName('od_item_img')[0];
            var inner_span = inner.getElementsByClassName('od_item_time')[0];
            var inner_des = inner.getElementsByClassName('od_item_des')[0];
            opacityEffect(inner_img, 0, 1, 800, 10);
            translateEffect(inner_img, 260, 0, 800, 10, 'x');

            opacityEffect(inner_des, 0, 1, 800, 10);
            translateEffect(inner_des, 260, 0, 800, 10, 'x');

            opacityEffect(inner_span, 0, 1, 800, 10);
            translateEffect(inner_span, -160, 0, 800, 10, 'x');
            break;
        case 'od_10':
            var inner = element.getElementsByClassName('od_item_inner')[0];
            var inner_img = inner.getElementsByClassName('od_item_img')[0];
            var inner_span = inner.getElementsByClassName('od_item_time')[0];
            var inner_des = inner.getElementsByClassName('od_item_des')[0];
            opacityEffect(inner_img, 0, 1, 1500, 20);
            translateEffect(inner_img, 260, 0, 1500, 20, 'x');

            opacityEffect(inner_des, 0, 1, 1500, 20);
            translateEffect(inner_des, 260, 0, 1500, 20, 'x');

            opacityEffect(inner_span, 0, 1, 1500, 20);
            translateEffect(inner_span, -160, 0, 1500, 20, 'x');
            break;
    }
}

// Chuong trinh tieu chuan
function addEffectCttc (element) {
    var elementName = element.id;
    switch (elementName) {
        case 'tong-quan':
            var left = element.getElementsByClassName('standard-number-text')[0];
            opacityEffect(left, 0, 1, 500, 10);
            translateEffect(left, 60, 0, 500, 10, 'y');
            var right = element.getElementsByClassName('standard-number-year')[0];
            opacityEffect(right, 0, 1, 500, 10, 500);
            translateEffect(right, 60, 0, 500, 10, 'y', 500);
            break;
        case 'uu-viet':
            var block_1 = element.getElementsByClassName('standard-special-title')[0];
            var block_2 = element.getElementsByClassName('standard-special-text')[0];
            var block_3 = element.getElementsByClassName('special-slide')[0];
            opacityEffect(block_1, 0, 1, 400, 10);
            translateEffect(block_1, 100, 0, 400, 10, 'y');

            opacityEffect(block_2, 0, 1, 400, 10, 500);
            translateEffect(block_2, 100, 0, 400, 10, 'y', 500);

            opacityEffect(block_3, 0, 1, 500, 10, 1000);
            translateEffect(block_3, 100, 0, 500, 10, 'y', 1000);
            break;
        case 'pp-giao-duc':
            var b1 = element.getElementsByClassName('standard-edu-title')[0];
            var b2 = element.getElementsByClassName('standard-edu-content')[0];
            var b3 = element.getElementsByClassName('standard-edu-list')[0];
            var list = b3.getElementsByClassName('edu-item');

            opacityEffect(b1, 0, 1, 400, 10);
            translateEffect(b1, 100, 0, 400, 10, 'y');

            opacityEffect(b2, 0, 1, 400, 10, 500);
            translateEffect(b2, 100, 0, 400, 10, 'y', 500);

            var delay = 500;

            for (var i = 0; i < list.length; i++) {
                opacityEffect(list[i], 0, 1, 300, 10, delay);
                delay += 300;
            }

            break;

    }
}

// Song bang quoc te

function addEffectSbqt (element) {
    var elementName = element.id;
    switch (elementName) {
        case 'tong-quan':
            var left = element.getElementsByClassName('intro-text')[0];
            opacityEffect(left, 0, 1, 500, 10);
            translateEffect(left, 60, 0, 500, 10, 'y');
            var right = element.getElementsByClassName('number-list')[0];
            opacityEffect(right, 0, 1, 500, 10, 500);
            translateEffect(right, 60, 0, 500, 10, 'y', 500);
            break;
        case 'chuong-trinh-hoc':
            var pr_title = element.getElementsByClassName('pr-title')[0];
            opacityEffect(pr_title, 0, 1, 1000, 10);
            translateEffect(pr_title, 200, 0, 600, 10, 'y');
            break;
        case 'ct-hoc-1':
            case 'ct-hoc-3':
                var pr_img = element.getElementsByClassName('pr-img')[0];
                var pr_content = element.getElementsByClassName('pr-content')[0];
                opacityEffect(pr_img, 0, 1, 1000, 10);
                translateEffect(pr_img, 300, 0, 600, 10, 'x');
                opacityEffect(pr_content, 0, 1, 1000, 10);
                translateEffect(pr_content, -300, 0, 600, 10, 'x');
                break;
            case 'ct-hoc-2':
                var pr_img_2 = element.getElementsByClassName('pr-img')[0];
                var pr_content_2 = element.getElementsByClassName('pr-content')[0];
                opacityEffect(pr_img_2, 0, 1, 1000, 10);
                translateEffect(pr_img_2, -300, 0, 600, 10, 'x');
                opacityEffect(pr_content_2, 0, 1, 1000, 10);
                translateEffect(pr_content_2, 300, 0, 600, 10, 'x');
                break;
            case 'doi-ngu':
                var tt1 = element.getElementsByClassName('emp-title')[0];
                var tt2 = element.getElementsByClassName('tabs-list')[0];
                var tt3 = element.getElementsByClassName('tabs-content')[0];
                opacityEffect(tt1, 0, 1, 400, 10);
                translateEffect(tt1, 100, 0, 400, 10, 'y');

                opacityEffect(tt2, 0, 1, 400, 10, 500);
                translateEffect(tt2, 100, 0, 400, 10, 'y', 500);

                opacityEffect(tt3, 0, 1, 500, 10, 1000);
                translateEffect(tt3, 100, 0, 500, 10, 'y', 1000);
                break;
            case 'thanh-tich':
                var tt_item = element.getElementsByClassName('ach-item');
                var delay = 0;

                for (var i = 0; i < tt_item.length; i++) {
                    opacityEffect(tt_item[i], 0, 1, 300, 10, delay);
                    delay += 300;
                }
                break;
            case 'tin-tuc':
                var new_title = element.getElementsByClassName('news-title')[0];
                var news_list = element.getElementsByClassName('news-list')[0];
                var news_article = element.getElementsByClassName('all-article')[0];

                opacityEffect(new_title, 0, 1, 400, 10);
                translateEffect(new_title, 100, 0, 400, 10, 'y');

                opacityEffect(news_list, 0, 1, 400, 10, 500);
                translateEffect(news_list, 100, 0, 400, 10, 'y',500);

                opacityEffect(news_article, 0, 1, 400, 10, 1000);
                translateEffect(news_article, 100, 0, 400, 10, 'y', 1000);
        }

    }

// Home page
function addEffectHome(element) {
    var elementName = element.id;
    switch (elementName) {
        case 'olympia-number':
            var btn = element.children[2];
            // opacityEffect(btn, 0, 1, 500, 10, 1500);
            // translateEffect(btn, 60, 0, 500, 10, 'y', 1500);

            break;
        case 'olympia-level-training':
            var level_1 = element.children[0].getElementsByClassName('olympia-level');

            var delay = 0;
            for (var i = 0; i < level_1.length; i++) {
                opacityEffect(level_1[i], 0, 1, 300, 10, delay);
                translateEffect(level_1[i], 30, 0, 300, 10, 'y', delay);
                delay += 300;
            }

            var level_2 = element.children[0].getElementsByClassName('olympia-level-right')[0];
            console.log(level_2);
            opacityEffect(level_2, 0, 1, 300, 10, 300);
            translateEffect(level_2, 30, 0, 300, 10, 'y', 300);
            break;
        case 'share-pro':
            opacityEffect(element.children[0], 0, 1, 300, 10);
            translateEffect(element.children[0], 40, 0, 300, 10, 'y');

            opacityEffect(element.children[1], 0, 1, 300, 10, 300);
            translateEffect(element.children[1], 40, 0, 300, 10, 'y', 300);
            break;
        case 'testimonial':
            var slick_slide = element.children[0];
            var slick_item = slick_slide.getElementsByClassName('slick-active');
            console.log(slick_item);

            var slick_item_info = slick_item[0].getElementsByClassName('olympia-testimonial-entry')[0];
            var slick_item_img = slick_item[0].getElementsByClassName('olympia-testimonial-photo')[0];

            opacityEffect(slick_item_img, 0, 1, 500, 10);
            translateEffect(slick_item_img, 80, 0, 500, 10, 'y');

            opacityEffect(slick_item_info, 0, 1, 500, 10, 700);
            translateEffect(slick_item_info, 65, 0, 500, 10, 'y', 700);
            break;
        case 'pc_slider_cover':
            var pc_slider = document.getElementById('pc_slider_cover');

            if (pc_slider.classList.contains('is-visible')) {
                var slick_slide = document.getElementsByClassName('pc')[0];
                var slick_item = slick_slide.getElementsByClassName('slick-slide');

                for (var i = 0; i < slick_item.length; i++) {
                    var slick_item_info = slick_item[i].getElementsByClassName('slider-title-box')[0];

                    if (slick_item[i].classList.contains('slick-active')) {

                        opacityEffect(slick_item_info, 0, 1, 500, 10);
                        translateEffect(slick_item_info, 65, 0, 500, 10, 'y');
                    } else {
                        opacityEffect(slick_item_info, 1, 0, 500, 10);
                        translateEffect(slick_item_info, 0, 80, 500, 10, 'y');
                    }
                }
            }
            break;
        case 'mb_slider_cover':
             var mb_slider = document.getElementById('mb_slider_cover');

            if (mb_slider.classList.contains('is-visible')) {
                var slick_slide = document.getElementsByClassName('mobile')[0];
                var slick_item = slick_slide.getElementsByClassName('slick-slide');

                for (var i = 0; i < slick_item.length; i++) {
                    var slick_item_info = slick_item[i].getElementsByClassName('slider-title-box')[0];

                    if (slick_item[i].classList.contains('slick-active')) {

                        opacityEffect(slick_item_info, 0, 1, 500, 10);
                        translateEffect(slick_item_info, 65, 0, 500, 10, 'y');
                    } else {
                        opacityEffect(slick_item_info, 1, 0, 500, 10);
                        translateEffect(slick_item_info, 0, 80, 500, 10, 'y');
                    }
                }
            }
            break;
    }
}

// About us
function addEffectAboutUs(element) {
    var elementName = element.id;
    switch (elementName) {
        case 'tam-nhin-su-menh':
            var item_1 = element.children[1].getElementsByClassName('tnsm-block-1')[0];
            var item_2 = element.children[1].getElementsByClassName('tnsm-img-2')[0];
            var item_3 = element.children[1].getElementsByClassName('about-quote')[0];
            var item_4 = element.children[1].getElementsByClassName('tnsm-img-1')[0];
            var item_5 = element.children[0];

            var item_list = [item_1,
                item_2,
                item_3,
                item_4,
                item_5];

            var delay = 0;

            opacityEffect(item_1, 0, 1, 350, 10);
            translateEffect(item_1, 120, 0, 500, 10, 'y');
            // heightEffect (item_1, 0, item_1.scrollHeight, 300,10);
            opacityEffect(item_2, 0, 1, 350, 10, 500);
            translateEffect(item_2, 120, 0, 500, 10, 'y', 500);

            opacityEffect(item_3, 0, 1, 350, 10, 1000);
            translateEffect(item_3, 120, 0, 500, 10, 'y', 1000);

            opacityEffect(item_4, 0, 1, 350, 10, 1500);
            translateEffect(item_4, 120, 0, 500, 10, 'y', 1500);

            opacityEffect(item_5, 0, 1, 350, 10, 2000);
            translateEffect(item_5, 120, 0, 500, 10, 'y', 2000);

            break;
        case 'thong-diep-hieu-truong':
            var dtht_1 = element.children[0];
            var dtht_2 = element.children[1];
            opacityEffect(dtht_1, 0, 1, 300, 10);
            translateEffect(dtht_1, 60, 0, 300, 10, 'y');
            opacityEffect(dtht_2, 0, 1, 300, 10, 300);
            translateEffect(dtht_2, 60, 0, 300, 10, 'y', 300);
            break;
        case 'tai-sao-chon-olympia':
            var olym_1 = element.children[0];
            opacityEffect(olym_1, 0, 1, 300, 10);
            translateEffect(olym_1, 60, 0, 300, 10, 'y');

            var olym_2 = element.children[1];
            var olym_3 = element.children[2];
            break;
    }
}

// Lo trinh hoc tap
function addEffectLearningProgram(element) {
    var elementName = element.id;
    switch (elementName) {
        case 'learning-header-title':
            var breadcrumb = element.children[1];
            var title = element.children[2];

            opacityEffect(breadcrumb, 0, 1, 500, 10);

            translateEffect(title, 60, 0, 500, 10, 'y', 200);
            opacityEffect(title, 0, 1, 500, 10, 200);
            break;

        case 'triet-ly-gd':
            translateEffect(element.children[0], 60, 0, 500, 10, 'y');
            opacityEffect(element.children[0], 0, 1, 500, 10);
            break;

        case 'lo-trinh':
            translateEffect(element.children[0], 80, 0, 500, 10, 'y');
            opacityEffect(element.children[0], 0, 1, 500, 10);

            // var level_item = element.children[1].getElementsByClassName('level-item');
            var level_1 = element.children[1].getElementsByClassName('level-1')[0];
            var level_2 = element.children[1].getElementsByClassName('level-2')[0];
            var level_3 = element.children[1].getElementsByClassName('level-3')[0];
            var level_4 = element.children[1].getElementsByClassName('level-4')[0];

            var level_connect_1 = element.children[1].getElementsByClassName('level-connect-1')[0];
            var level_connect_2 = element.children[1].getElementsByClassName('level-connect-2')[0];
            var level_connect_3 = element.children[1].getElementsByClassName('level-connect-3')[0];

            opacityEffect(level_1.children[0], 0, 1, 500, 10, 500);
            opacityEffect(level_1.children[1], 0, 1, 500, 10, 800);

            opacityEffect(level_connect_1, 0, 1, 500, 10, 1000);

            opacityEffect(level_2.children[0], 0, 1, 500, 10, 1500);
            opacityEffect(level_2.children[1], 0, 1, 500, 10, 1800);

            opacityEffect(level_connect_2, 0, 1, 500, 10, 2000);

            opacityEffect(level_3.children[0], 0, 1, 500, 10, 2500);
            opacityEffect(level_3.children[1], 0, 1, 500, 10, 2800);

            opacityEffect(level_connect_3, 0, 1, 500, 10, 3000);

            opacityEffect(level_4.children[0], 0, 1, 500, 10, 3500);
            opacityEffect(level_4.children[1], 0, 1, 500, 10, 3800);
            break;

        case 'tuyen-sinh':
            translateEffect(element.children[1], 60, 0, 500, 10, 'y');
            opacityEffect(element.children[1], 0, 1, 500, 10);

            // translateEffect(element.children[2], 60, 0, 500, 10, 'y', 300);
            // opacityEffect(element.children[2], 0, 1, 500, 10, 300);
    }
}

// Chuong trinh tieng anh
function addEffectEnglishProgram(element) {
    var elementName = element.id;
    switch (elementName) {
        case 'english-header-title':
            var breadcrumb = element.getElementsByClassName('breadcrumb')[0];
            var title = element.getElementsByClassName('big__header-title')[0];

            opacityEffect(breadcrumb, 0, 1, 500, 10);

            translateEffect(title, 60, 0, 500, 10, 'y', 200);
            opacityEffect(title, 0, 1, 500, 10, 200);
            break;
        case 'tong-quan':
            console.log(element.children[0]);
            opacityEffect(element.children[0], 0, 1, 500, 10, 200);
            translateEffect(element.children[0], 60, 0, 500, 10, 'y', 200);
            opacityEffect(element.children[1], 0, 1, 500, 10, 550);
            translateEffect(element.children[1], 60, 0, 500, 10, 'y', 550);
            break;

        case 'phuong-phap-hoc':
            opacityEffect(element.children[0], 0, 1, 500, 10);
            translateEffect(element.children[0], 60, 0, 500, 10, 'y');

            var method_item = element.children[1].getElementsByClassName('method-item');
            var term = 300;

            for (var i = 0; i < method_item.length; i++) {
                opacityEffect(method_item[i], 0, 1, 300, 10, term);
                term = term + 200;
                console.log("3333", method_item[i], term);
            }
            break;
        case 'nen-tang':
            var nt_title = element.children[0].getElementsByClassName('font-garamond-bold');
            var nt_content = element.children[0].getElementsByClassName('foundation-content');
            opacityEffect(nt_title[0], 0, 1, 500, 10);
            translateEffect(nt_title[0], 60, 0, 500, 10, 'y');

            opacityEffect(nt_content[0], 0, 1, 500, 10, 500);
            translateEffect(nt_content[0], 60, 0, 500, 10, 'y', 500);
            break;
        case 'tai-lieu':
            opacityEffect(element.children[0], 0, 1, 500, 10);
            translateEffect(element.children[0], 60, 0, 500, 10, 'y');

            var card_pc = element.children[1].getElementsByClassName('card-pc');
            var term = 300;
            for (var i = 0; i < card_pc.length; i++) {
                opacityEffect(card_pc[i], 0, 1, 300, 10, term);
                term = term + 200;
                console.log("3333", card_pc[i], term);
            }
            break;

        case 'hoat-dong':
            case 'doi-song-hoc-duong':
                var hd_title = element.children[0].getElementsByClassName('font-garamond-bold');
                // var show_pc = element.children[0].getElementsByClassName('show-pc')[0];
                // var show_mobile = element.children[0].getElementsByClassName('show-mobile')[0];
                // var list_title = element.children[0].getElementsByClassName('show-mobile')[1];

                var grid_row_1 = element.children[0].getElementsByClassName('grid-row-1')[0];
                var grid_row_2 = element.children[0].getElementsByClassName('grid-row-2')[0];

                opacityEffect(hd_title[0], 0, 1, 500, 10);
                translateEffect(hd_title[0], 60, 0, 500, 10, 'y');

                var item_1 = grid_row_1.getElementsByClassName('item');
                var item_2 = grid_row_2.getElementsByClassName('item');

                var term = 300;
                for (var i = 0; i < item_1.length; i++) {
                    opacityEffect(item_1[i], 0, 1, 300, 10, term);
                    term = term + 300;
                }
                for (var i = item_2.length - 1; i >= 0; i--) {
                    item_2[i].style.opacity = 0;
                    opacityEffect(item_2[i], 0, 1, 300, 10, term);
                    term = term + 300;
                }

                var grid_row_mb = element.children[0].getElementsByClassName('grid-row-1')[0];
                var item_1_mb = grid_row_mb.getElementsByClassName('item');
                var term2 = 300;
                for (var i = 0; i < item_1_mb.length; i++) {
                    opacityEffect(item_1_mb[i], 0, 1, 300, 10, term2);
                    term2 = term2 + 300;
                }

                // var title_item = list_title.getElementsByClassName('title-item');
                // for (var i = 0; i < title_item.length; i++) {
                //     opacityEffect(title_item[i], 0, 1, 300, 10, term2);
                //     term2 = term2 + 300;
                // }

        }
    }

/// Chuong Trinh he
function addEffectSummerProgram(element) {
    var elementName = element.id;
    switch (elementName) {
        case 'summer-header-title':
            var title = element.children[1];
            // translateEffect(title, 60, 0, 500, 10, 'y');
            opacityEffect(title, 0, 1, 500, 10);
            break;

        case 'summer-img1':
            opacityEffect(element, 0, 1, 1000, 10);
            translateEffect(element, -300, 0, 600, 10, 'x');
            break;
        case 'summer-text1':
            opacityEffect(element, 0, 1, 800, 10);
            translateEffect(element, 300, 0, 600, 10, 'x');
            break;

        case 'summer-img2':
            opacityEffect(element, 0, 1, 1000, 10);
            translateEffect(element, 300, 0, 600, 10, 'x');
            break;
        case 'summer-text2':
            opacityEffect(element, 0, 1, 800, 10);
            translateEffect(element, -300, 0, 600, 10, 'x');
            break;

        case 'summer-text3':
            opacityEffect(element, 0, 1, 500, 10);
            // translateEffect(element, 80, 0, 500, 10, 'y');
            break;

        case 'summer-img4':
            opacityEffect(element, 0, 1, 1000, 10);
            translateEffect(element, -300, 0, 600, 10, 'x');
            break;
        case 'summer-text4':
            opacityEffect(element, 0, 1, 800, 10);
            translateEffect(element, 300, 0, 600, 10, 'x');
            break;


        case 'summer-img5':
            opacityEffect(element, 0, 1, 1000, 10);
            translateEffect(element, 300, 0, 600, 10, 'x');
            break;
        case 'summer-text5':
            opacityEffect(element, 0, 1, 800, 10);
            translateEffect(element, -300, 0, 600, 10, 'x');
            break;

        case 'summer-img-list':
            var grid_row = element.children;
            var item_1 = grid_row[0].getElementsByClassName('item');
            var term = 0;
            for (var i = 0; i < item_1.length; i++) {
                item_1[i].style.opacity = 0;
                opacityEffect(item_1[i], 0, 1, 300, 10, term);
                term = term + 300;
            }

            var item_2 = grid_row[1].getElementsByClassName('item');
            for (var i = item_2.length - 1; i >= 0; i--) {
                item_2[i].style.opacity = 0;
                opacityEffect(item_2[i], 0, 1, 300, 10, term);
                term = term + 300;
            }

            var item_3 = grid_row[2].getElementsByClassName('item');
            for (var i = 0; i < item_3.length; i++) {
                item_3[i].style.opacity = 0;
                opacityEffect(item_3[i], 0, 1, 300, 10, term);
                term = term + 300;
            }
            break;

        case 'recruitment':
            var recruitment = element.children;
            var recruitment_text1 = recruitment[0];
            opacityEffect(recruitment_text1, 0, 1, 500, 10);
            translateEffect(recruitment_text1, 25, 0, 500, 10, 'y');

            var recruitment_text2 = recruitment[1];
            opacityEffect(recruitment_text2, 0, 1, 500, 10, 400);
            translateEffect(recruitment_text2, 25, 0, 500, 10, 'y', 400);

            var recruitment_text3 = recruitment[2];
            opacityEffect(recruitment_text3, 0, 1, 500, 10, 800);
            translateEffect(recruitment_text3, 25, 0, 500, 10, 'y', 800);

            var recruitment_text4 = recruitment[3];
            opacityEffect(recruitment_text4, 0, 1, 500, 10, 1000);
            translateEffect(recruitment_text4, 25, 0, 500, 10, 'y', 1000);
            break;

        case 'summer-slide':
            var slick_slide = element.children[0];
            var slick_item = slick_slide.getElementsByClassName('slick-active');
console.log(element,slick_item);
            var slick_item_img = slick_item[0].getElementsByClassName('summer-slide-img')[0];
            var slick_item_info = slick_item[0].getElementsByClassName('summer-slide-info')[0];

            opacityEffect(slick_item_img, 0, 1, 500, 10);
            translateEffect(slick_item_img, 80, 0, 500, 10, 'y');

            opacityEffect(slick_item_info, 0, 1, 500, 10, 700);
            translateEffect(slick_item_info, 65, 0, 500, 10, 'y', 700);

            break;
    }
}

// **************** Tab *****************************
function openCity(evt, cityName, page = null) {
    evt.preventDefault();
    console.log(cityName);
    var i,
    tabcontent,
    tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        if (page === 'csvc') {
            tablinks[i].getElementsByClassName('csvc-total-item')[0].innerHTML = '';
        }
    }

    document.getElementById(cityName).style.display = "block";

    var path = location.protocol + '//' + location.host + location.pathname;
    if (location.pathname === '/so-tay-hoc-sinh-lp.html') {
        window.history.pushState('caphoc', 'Khoi', path +'?caphoc=' + cityName);
    }

    evt.currentTarget.className += " active";

    if (page === 'csvc') {
        var tabContent = document.getElementById(cityName);
        var tabContentItem = tabContent.children[0].getElementsByClassName('img-box');
        console.log(tabContentItem.length);
        var tabName = evt.currentTarget.getElementsByClassName('csvc-total-item')[0];
        tabName.innerHTML += '(' + tabContentItem.length + ')';
    }
}


// ***************** Tabs chuong trinh tieu chua **************************

function openProgram(evt, proName) {
    evt.preventDefault();
    console.log(proName);
    console.log();
    var va
    var tablinks = document.getElementsByClassName('tablinks');
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

    }

    tabinner = document.getElementsByClassName('tabs-inner');
    for (var j = 0; j < tabinner.length; j++) {
        tabinner[j].className = tabinner[j].className.replace(" active", "");

    }

    var tabcontent = document.getElementById(proName);
    tabcontent.classList.add('active');

    evt.currentTarget.className += " active";
}

// *******************************************************************************************
// element: phan tu muon ap dung effect
// start: vi tri px bat dau di chuyen;
// end: vitri px ket thuc dichuyen
// duration : thoi gian dien ra chuyen dong
// timeInter: thoi gian lap lai  interval
// axes: truc toa do muon tranlate
//
function translateEffect(element, start, end, duration, timeInter, axes, delay = 0) {
    var repeatTime = Math.ceil (duration / timeInter);
    var lenght = 0;
    var translate = Number(start);

    if (axes === 'y') {
        element.style.transform = 'translate3d(0px,' + start + 'px, 0px)';
    }
    if (axes === 'x') {
        element.style.transform = 'translate3d(' + start + 'px, 0px, 0px)';
    }

    if (start > end) {
        lenght = start / repeatTime;
        setTimeout (function() {
            let timer = setInterval(function() {
                translate = translate - lenght;
                if (axes === 'y') {
                    element.style.transform = 'translate3d(0px,' + translate + 'px, 0px)';
                }
                if (axes === 'x') {
                    element.style.transform = 'translate3d(' + translate + 'px, 0px, 0px)';
                }

                if (translate <= end) {
                    if (axes === 'y') {
                        element.style.transform = 'unset';
                    }
                    if (axes === 'x') {
                        element.style.transform = 'unset';
                    }
                    clearInterval(timer);
                }
            },
                timeInter);
        }, delay);
    }

    if (start < end) {
        if (start < 0) {
            lenght = Math.abs(start) / repeatTime;
        } else {
            lenght = end / repeatTime;
        }

        let timer = setInterval(function() {
            translate = translate + lenght;
            if (axes === 'y') {
                element.style.transform = 'translate3d(0px,' + translate + 'px, 0px)';
            }
            if (axes === 'x') {
                element.style.transform = 'translate3d(' + translate + 'px, 0px, 0px)';
            }

            if (translate >= end) {
                if (axes === 'y') {
                    element.style.transform = 'translate3d(0px,' + end + 'px, 0px)';
                }
                if (axes === 'x') {
                    element.style.transform = 'translate3d(' + end + 'px, 0px, 0px)';
                }
                clearInterval(timer);
            }
        },
            timeInter);
    }
}

function opacityEffect(element, start, end, duration, timeInter, delay = 0) {
    var repeatTime = Math.ceil (duration / timeInter);
    var opacity = start;

    if (start > end) {
        var term = start / repeatTime;
        setTimeout (function() {
            let timer = setInterval(function() {
                opacity = opacity - term;
                element.style.opacity = opacity;
                if (opacity <= end) {
                    element.style.opacity = end;
                    clearInterval(timer);
                }
            },
                timeInter);
        }, delay);
    }
    if (start < end) {
        var term = end / repeatTime;
        setTimeout (function() {
            let timer = setInterval(function() {
                opacity = opacity + term;
                element.style.opacity = opacity;
                if (opacity >= end) {
                    element.style.opacity = end;
                    clearInterval(timer);
                }
            },
                timeInter);
        }, delay);
    }

}

function heightEffect(element, start, end, duration, timeInter, delay = 0) {
    var repeatTime = Math.ceil (duration / timeInter);
    var height = start;

    if (start > end) {
        var term = start / repeatTime;
        setTimeout (function() {
            let timer = setInterval(function() {
                height = height - term;
                element.style.height = height + 'px';
                if (height <= end) {
                    element.style.height = end + 'px';
                    clearInterval(timer);
                }
            },
                timeInter);
        }, delay);
    }

    if (start < end) {
        var term = end / repeatTime;
        setTimeout (function() {
            let timer = setInterval(function() {
                height = height + term;
                element.style.height = height + 'px';
                if (height >= end) {
                    element.style.height = end + 'px';
                    clearInterval(timer);
                }
            },
                timeInter);
        }, delay);
    }
}

//***************** the Modal ******************************
// Open the Modal
function openModal(element) {
    document.getElementById(element).style.display = "flex";
    document.getElementById(element).classList.add('show');
    document.addEventListener('keyup', function(event) {
        if (event.key === 'Escape') {
            closeModal(element);
        }
        if (event.keyCode == 37) {
            plusSlides(-1, element);
        } else if (event.keyCode == 39) {
            plusSlides(1, element);
        }
    });
}


// Close the Modal
function closeModal(element) {
    document.getElementById(element).style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n, element) {
    showSlides(slideIndex += n,
        element);
}

// Thumbnail image controls
function currentSlide(n, element) {
    showSlides(slideIndex = n,
        element);
}

function showSlides(n, element) {
    var i;
    if (element !== undefined) {
        var modal = document.getElementById(element);
        var modal_content = modal.getElementsByClassName('modal-content')[0];
        var slides = modal_content.getElementsByClassName('mySlides');
        var captionText = document.getElementById("caption");

        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex-1].style.display = "block";
    }
}


/**************** Form select dropdown ****************/
var selected = document.querySelector(".selected");
var textSelected = document.querySelector(".text-selected")
var optionsContainer = document.querySelector(".option-container");
var optionsList = document.querySelectorAll(".option");

if (selected) {
    selected.addEventListener('click', function () {
        optionsContainer.classList.toggle("active");
    });

    optionsList.forEach(function (e) {
        e.addEventListener('click', function () {
            textSelected.innerHTML = e.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
        })
    });
}


// FORM REGISTER

function send_request_bk(data, callback) {

    callback = callback || function() {};

    // var server_url = window.location.origin + '/api/user-request';
    // var server_url = 'https://olympia.ringer.biz/api/user-request';
    var server_url = 'https://tos.ringer.biz/api/user-request';

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        // on failure case
        if (this.readyState == XMLHttpRequest.DONE) {
            console.log(server_url, this.status, this.statusText);
            return callback({
                code: 0, error: null
            });
            //   return callback({ code: this.status, error: this.statusText });
            // return callback(JSON.parse(this.responseText));
        }

        // on success case
        // if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        //     console.log(server_url, this.status, this.statusText);
        //     return callback(JSON.parse(this.responseText));
        // }
    };

    xhttp.open("POST", server_url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // console.log(server_url, '>>', JSON.stringify(params));
    xhttp.send(object_to_params(data));
    // xhttp.send(Ringer.util.object_to_params(params));

}

function object_to_params(data_obj) {
    var params = "";
    for (var key in data_obj) {
        // skip loop if the property is from prototype
        if (!data_obj.hasOwnProperty(key)) continue;

        params += (key + "=" + data_obj[key] + "&");
    }

    if (params.length > 0) {
        params = params.slice(0, -1); // remove last character
    }

    // console.log("ringer.js [params]: " + params);
    return params;
};



function getDate (date, format) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (format === 'dd/mm/yyyy') {
        return dd + '/' + mm + '/' + yyyy;
    }
    if (format === 'dd.mm') {
        return dd + '.' + mm;
    }
    if (format === 'dd.mm.yyyy') {
        return dd + '.' + mm + '.' + yyyy;
    }
    if (format === 'string') {
        return date.toDateString();
    }
}

function send_request(data, callback) {
    callback = callback || function () {};

    let Rg = Ringer;

    if (!data || !data.form) {
        return callback({code: 1, error: 'Missing form type'});
    }


    let meta = {
        uid: '6127032134',
        lid: 'olympia',
        type: data.form
    };

    let options = {
        api_name: 'save',
        node: true,
        meta: encodeURIComponent(JSON.stringify(meta)),
        data: encodeURIComponent(JSON.stringify(data))
    };

    console.log('send_form_request', 1, options);
    Rg.api.post(options, function (res) {
        console.log('send_form_request', 2, res);
        callback(res);
    });
}


window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v8.0'
  });
};

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
