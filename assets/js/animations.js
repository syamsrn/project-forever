const Animations = {

    fadeIn(target, duration = 1){

        return gsap.from(target,{
            opacity:0,
            y:40,
            duration,
            ease:"power3.out"
        });

    },

    fadeOut(target, duration = 1){

        return gsap.to(target,{
            opacity:0,
            duration
        });

    },

    zoomIn(target){

        return gsap.from(target,{
            scale:.85,
            opacity:0,
            duration:1.4,
            ease:"power4.out"
        });

    },

    blurReveal(target){

        return gsap.from(target,{
            opacity:0,
            filter:"blur(20px)",
            duration:1.2
        });

    },

    heartbeat(target){

        return gsap.to(target,{
            scale:1.08,
            duration:.8,
            repeat:-1,
            yoyo:true,
            ease:"power1.inOut"
        });

    }

};