document.addEventListener("DOMContentLoaded", () => {

    const tl = gsap.timeline();

    tl

    .to(".intro-heart",{

        opacity:1,

        scale:1,

        duration:1

    })

    .from(".intro-heart",{

        scale:.4,

        duration:1

    },"<")

    .to(".intro-name",{

        opacity:1,

        y:-10,

        duration:.9

    })

    .to(".line1",{

        opacity:1,

        y:-10,

        duration:1

    })

    .to(".line2",{

        opacity:1,

        y:-10,

        duration:.9

    })

    .to(".line3",{

        opacity:1,

        y:-10,

        duration:1

    })

    .to(".intro-date",{

        opacity:1,

        y:-10,

        duration:1

    });

});