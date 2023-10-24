import db from './db'
export default {
    install: function (Vue) {

        
        const $loading = (flag=true) => {
            //eventBus.$emit ( 'loading' , flag )
        }

        const $imageURL = (image) => {
            /**if ( !image ) return null
            let source = image.url
            if ( !image.hasOwnProperty('url') ){
                source = image
            }
            if ( source.includes ( 'http') ) return source
            return process.env.VUE_APP_API_URL + source.substring(1)**/
        }

        const $eventBus =  ( action , e = null ) =>{
            //eventBus.$emit ( action , e )
        }

        const $editorBus =  ( action , e = null ) =>{
           // editorBus.$emit ( action , e )
        }

        const $dialogBus = ( action , e = null ) => {
           // dialogBus.$emit ( action , e )
        }
    }
}
