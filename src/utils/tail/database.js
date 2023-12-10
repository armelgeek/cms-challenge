
export class Database {
  
  async getPages(category='',limit=10,offset=0,order='name') {
    let pages = [];
    switch ( category ){
        case '':
        pages = await this.table('pages').offset(offset).limit(limit).toArray();
        break;

        default:
        pages = await this.table('pages').where("category").anyOfIgnoreCase(category).offset(offset).limit(limit).toArray();  
    }
    return pages
  }

  async searchPages ( field='tags' , search='' ){
    if ( !search ) return []
    let pages = [];
    pages = await this.table('pages').where(field).equals(search).toArray()
    console.log ( pages )
    return pages
  }
  updatePage(id, page) {
    return this.pages.update(id, page)
  }
  addPage(page) {
    return this.pages.add(page)
  }
  deletePage(pageID) {
    return this.pages.delete(pageID);
  }

  async getSettings(){
    return await this.table('settings').toArray();
  }

  addSettings(settings) {
    return this.settings.add(settings)
  }

  updateSettings(id,settings){
    return this.settings.update(id, settings)
  }

 
}
export const forwardOrder = 'forward';
// chronological order.
export const reverseOrder = 'reverse';
export const unfinishedFirstOrder = 'unfinished-first';
