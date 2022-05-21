// typed animations

var typed = new Typed('.typing', {
    strings: ['','Desenvolvedor back/end', 'Desenvolvedor front/end'],
    typeSpeed: 100,
    BackSpeed:60,
    loop:true
})


const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allsection = document.querySelectorAll('.section'),
    totalSelection = allsection.length;

    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector('a');
        a.addEventListener('click', function() 
        {
            for(let i = 0; i < totalSelection; i++) {
                allsection[i].classList.remove('back-section');
            }
            for(let j = 0; j < totalNavList; j++) {
                if(navList[j].querySelector('a').classList.contains('active'))
                {
                    allsection[j].classList.add('back-section');
                }
                navList[j].querySelector('a').classList.remove('active');
            }
            this.classList.add('active');
            showSection(this);
            if(window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        })
    }

    function showSection(element){
        for(let i = 0; i < totalSelection; i++) {
            allsection[i].classList.remove('active');
        }
        const target = element.getAttribute('href').split('#')[1];
        document.querySelector('#' + target).classList.add('active');
    }

    const navTogglerBtn = document.querySelector('.nav-toggler'),
        aside = document.querySelector('.aside');
        navTogglerBtn.addEventListener('click',() => {
            asideTogglerBtn();
        })

        function asideTogglerBtn() {
            aside.classList.toggle('open');
            navTogglerBtn.classList.toggle('open');
            for(let i = 0; i < totalSelection; i++) {
                allsection[i].classList.toggle('open');
            }
        }