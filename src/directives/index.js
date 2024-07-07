import {useIntersectionObserver} from "@vueuse/core";

export  const layzyPlugin={
    install(app){
        //这是一个实现图片懒加载的指令
        app.directive('img-lazy',{
            //el：指令绑定元素：img
            //binding.value=后面跟图片的url
            mounted(el,binding){
                // console.log(el,binding.value)
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }],) => {
                        // console.log(isIntersecting);
                        if(isIntersecting){
                            el.src=binding.value;
                            stop();//如果图片已经加载了一次，则不需要二次请求
                        }
                    },
                )
            }
        })
    }
}