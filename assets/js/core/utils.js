// ============================================
// PROJECT FOREVER
// Utility Functions
// Version 1.0
// ============================================

const Utils = {

    qs(selector){
        return document.querySelector(selector);
    },

    qsa(selector){
        return document.querySelectorAll(selector);
    },

    id(id){
        return document.getElementById(id);
    },

    create(tag){
        return document.createElement(tag);
    },

    random(min,max){
        return Math.random()*(max-min)+min;
    },

    clamp(value,min,max){
        return Math.min(Math.max(value,min),max);
    },

    lerp(start,end,amount){
        return start+(end-start)*amount;
    },

    map(value,inMin,inMax,outMin,outMax){
        return(
            ((value-inMin)*(outMax-outMin))/(inMax-inMin)
        )+outMin;
    },

    delay(ms){
        return new Promise(resolve=>setTimeout(resolve,ms));
    },

    preloadImage(src){

        return new Promise((resolve,reject)=>{

            const img=new Image();

            img.src=src;

            img.onload=()=>resolve(img);

            img.onerror=reject;

        });

    },

    preloadImages(images){

        return Promise.all(

            images.map(src=>this.preloadImage(src))

        );

    }

};

export default Utils;