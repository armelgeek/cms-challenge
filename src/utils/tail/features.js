

import jp from 'jsonpath'
const apiserver = 'api'
export default {
  install: function (Vue) {
    
    
    const $mapState = ( ) => {
      /**let mp = {
          desktop: store.state.desktop,
          datastore: store.state.datastore,
          editor: store.state.editor
      }
      return mp**/
    }

    const $datastore = ( name = '' ) =>{
     /**if ( !name ) return
      return store.state.datastore.dataset[name].length === 1 ?
              store.state.datastore.dataset[name][0] :
              store.state.datastore.dataset[name]**/
    }

    const $elements = () => {
             /**return new Promise ( (resolve) => {
            api.get ( 'elements' ).then ( res => {
                store.dispatch ( 'dataset' , { table: 'elements' , data: res.data })
                resolve ( res )
            } )
        })**/
    }

    const $find = ( table , qry , start = 0 , limit = 20 , sort = { updatedAt: -1 } ) => {
        /**if ( !table ) return
        return new Promise ( (resolve) => {
            let args =  {
                    "$skip" : start,
                    "$limit" : limit,
                    "$sort" : sort
            }
            
            if ( qry ){
                Object.keys ( qry ).map ( q => {
                    args[q] = qry[q]
                })
            }
            //{ query : { "$limit": limit , "$skip": start }  }
            api.service ( table ).find( { query : args } ).then ( res => {
                store.dispatch ( 'dataset' , { table: table , data: res.data })
                resolve ( res )
            } )
        })**/
    }

    const $components = () => {
         /**api.service('components').find ( 
        { 
          query : 
          {
            $limit : 200,
            $skip: 0,
            $select : ['_id', 'name' , 'category' , 'image' , 'image_uri' , 'blocks_id' , 'updatedAt' ] ,
            $sort : { updatedAt : -1 }
          }
        }
      ).then ( result => {
        store.dispatch ( 'dataset' , { table: 'components' , data: result.data })
      })**/
    }

    const $saveComponent = ( component )=> {
     /**if ( !component ) return null
      return new Promise ( (resolve) => {
        api.service('components').patch ( component._id , component ).then ( res => {
          resolve ( res )
        }).then ( () => {
          api.service('articles').find ( {
            query : {
              template_id : component._id
            }
          }).then ( articles => {

            articles.data.forEach ( article => {
              api.service('articles').patch ( article._id , {
                blocks: component
              }).then ( resp => {
                console.log ( 'Updated ' + resp.title )
              })
            })
          })
        }).catch ( error => {
          resolve ( error )
        })
      })**/
    }

    const $projectUsage = ( ) => {
         /**api.service('articles').find ( 
        {
            query : {
                $limit: 200,
                $skip:0
            }
        }
      ).then ( result => {
          let usedFonts = []
          let usedImages = []
          result.data.forEach ( page => {
              let json = page.blocks.json
              let fonts = jp.query ( json , '$..blocks[?(@.style.includes("font-family"))]' )
              fonts.forEach ( font => {
                  font.style.includes ( 'font-family') ?
                      usedFonts.push ( font.style.replace('font-family:','').replaceAll('\"','') ) : null
              })
              let images = jp.query ( json , '$..blocks..image.url' )
              images.forEach(img=>
                  !img.includes('http') ?
                      usedImages.push(img) : null
              )
          })
          let project = store.state.desktop.project
          project.fonts = [ ...new Set(usedFonts) ]
          project.images = [ ...new Set(usedImages) ]
          console.log ( project )
          store.dispatch('project',project)
          return true// { images: [ ...new Set(usedImages) ] , fonts: [ ...new Set(usedFonts)] }        
      })**/
    }
    
    const $schema = ( schema ) => {
     /** if ( !schema ) return false
      return store.state.datastore.schema ( schema )**/
    }

  },
  apiserver
}
