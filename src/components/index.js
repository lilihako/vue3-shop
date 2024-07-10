import Sku from './sku/index.vue'
import ImageView from './imageView/index.vue'

export const componentPlugin={
    install(app){
        app.component('Sku', Sku)
        app.component('ImageView', ImageView)
    }
}