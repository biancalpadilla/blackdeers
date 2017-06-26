import PageManager from './page-manager';
import initInstagramFeed from './halothemes/instagram-feed';

export default class Home extends PageManager {
   loaded(next) {

      // HaloThemes functions
      initInstagramFeed();
   }
}
