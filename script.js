$(function(){
    
    //モーダルをクリックで開く
    $('.modal-image-01').click(function(){
        $('#modal01').fadeIn();
    })
    $('.modal-image-02').click(function(){
        $('#modal02').fadeIn();
    })
    $('.modal-image-03').click(function(){
        $('#modal03').fadeIn();
    })

    //モーダルを✖️ボタンで閉じる
    $('.close-modal').click(function(){
        $('.modal-content').fadeOut();
    })

    //スクロールアニメーション
    ScrollReveal().reveal('.animation', { 
        duration: 1600, 
        origin: 'left', 
        distance: '50px',
        reset: true   
    });

    ScrollReveal().reveal('.animation2', { 
        duration: 1600, 
        origin: 'left', 
        distance: '50px',
        delay: 300,
        reset: true   
    });

    ScrollReveal().reveal('.animation3', { 
        duration: 1600, 
        origin: 'left', 
        distance: '50px',
        delay: 600,
        reset: true   
    });

    ScrollReveal().reveal('.animation4', { 
        duration: 1600, 
        origin: 'left', 
        distance: '50px',
        delay: 900,
        reset: true   
    });

    ScrollReveal().reveal('.animation_t1', { 
        duration: 1600, 
        origin: 'top', 
        distance: '50px',
        reset: true   
    });

    ScrollReveal().reveal('.animation_t2', { 
        duration: 1600, 
        origin: 'top', 
        distance: '50px',
        delay: 300,
        reset: true   
    });

    ScrollReveal().reveal('.animation_t3', { 
        duration: 1600, 
        origin: 'top', 
        distance: '50px',
        delay: 600,
        reset: true   
    });

    ScrollReveal().reveal('.animation_t4', { 
        duration: 1600, 
        origin: 'top', 
        distance: '50px',
        delay: 900,
        reset: true   
    });
})