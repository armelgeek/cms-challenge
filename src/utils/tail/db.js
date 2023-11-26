import { Database, forwardOrder } from './database';
import Dexie from 'dexie';
import FileSaver from 'file-saver'
import * as DexieBackup from "dexie-export-import";
var db = new Database()
export function randomID(suff = 'tail') {
    return suff + '-' + Math.random().toString(36).substr(2, 5)
}


function progressCallback({ totalRows, completedRows }) {
   
}

async function exportDatabase() {
    try {
        const blob = await DexieBackup.exportDB(db, { prettyJson: true, progressCallback })
        FileSaver.saveAs(blob, 'tail-export.json', "application/json");
    } catch (error) {
        console.error('' + error);
    }
}

async function importDatabase(database) {
    try {
        await DexieBackup.importDB(database)
        return true
    } catch (err) {
        console.error(err)
    }
}

async function importDefault() {
    try {
        let dbs = require('../assets/db/db.json')
        console.log(dbs.data.data[0].rows)
        dbs.data.data[0].rows.forEach(row => {
            try {
                db.addPage(row)
            } catch (err) {
                console.log(err)
            }
        })
        return true
    } catch (err) {
        console.error(err)
    }
}

export default {
    install: function () {

        const dbInfo = () => {
            return db
        }

        const dbCount = () => {
            return new Promise((resolve, reject) => {
                resolve(db.pages.count())
            })
        }

        const saveDB = () => {
            exportDatabase()
        }

        const importDB = (database) => {
            let dbs = database
            if (!dbs) {
                return new Promise((resolve, reject) => {
                    resolve(importDefault())
                    //eventBus.$emit ( 'notification' , 'Data imported')
                    //eventBus.$emit ( 'dbImported')
                })
            }
            const importDB = importDatabase(database)
            //eventBus.$emit ( 'notification' , 'Pages imported')
            //dialogBus.$emit ( 'closeDialog' )
        }

        const settings = () => {
            const settings = new Promise((resolve, reject) => {
                db.getSettings().then(res => resolve(res))
            })
            return settings
        }

        const saveSettings = (settings) => {

            if (settings.id === 0) {
                settings.id = randomID('ws')
                db.addSettings(settings)
            } else {
                db.updateSettings(settings.id, settings)
            }
            //eventBus.$emit ( 'notification' , 'Settings saved')
        }

        const addPage = () => {
            //if ( !store.state.editor.page ) return
            //store.state.editor.page.id = store.state.editor.page.blocks_id
            //db.addPage ( store.state.editor.page )
            //db.getPages().then ( res => console.log ( res ) )
        }

        const savePage = () => {
            /**if ( !store.state.editor.page ) return
            let page = store.state.editor.page
            eventBus.$emit ( 'loading' )
            try {
                if ( !page.id || !page.hasOwnProperty('id') ){
                    page.id = randomID('page')
                    const savedPage = new Promise ( (resolve,reject) => {
                        db.addPage ( page ).then ( res => {
                            store.dispatch('setPage', page )
                        })
                    })
                    eventBus.$emit('loading')
                    return savedPage
                } else {
                    const savedPage = new Promise ( ( resolve, reject ) => {
                        db.updatePage ( page.id , page ).then ( res =>{
                            resolve ( res )
                        })
                    })
                    eventBus.$emit('loading')
                    editorBus.$emit ( 'editorMessage' , 'Page saved')
                    return savedPage
                }
            } catch (err){
                eventBus.$emit('loading')
                eventBus.$emit ( 'notification' , 'It was not possible to save the page' , 'error' )
                console.log ( err )
            }**/
        }

        const getPages = (category, limit = 4, offset = 0) => {
            const pages = new Promise((resolve, reject) => {
                db.getPages(category, limit, offset).then(res => {
                    resolve(res)
                })
            })
            return pages
        }

        const searchPages = (search = '', field = 'tags') => {
            if (!search) return
            const pages = new Promise((resolve, reject) => {
                db.searchPages(field, search).then(res => {
                    resolve(res)
                })
            })
            return pages
        }

        const updatePage = (data_uri) => {
            /**if ( !data_uri ) return
            let id = randomID('img')
            console.log ( data_uri , id , store.state.editor.page.id )
            let pg = store.state.editor.page
            pg.image = data_uri
            db.setPagesDone ( store.state.editor.page.id , pg)**/
        }

        const deletePage = () => {
            //if ( !store.state.editor.page ) return
            //db.deletePage ( store.state.editor.page.id )
        }
    }
}

