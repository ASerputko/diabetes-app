export default class BreadUnitsListController {

    static get $inject() {
        return ['$q'];
    }

    constructor($q) {
        /** ViewModel properties */
        this.$q = $q;
        this.isReady = false;
        this.title = 'Bread Units';
        this.breadUnits = [];
        /** Fetch data */
        let promises = [this.getBreadUnits()];
        this.$q.all(promises);
    }

    /**
     * @description Fetch bread units.
     * @return {Promise} List of bread units.
     */
    getBreadUnits() {
      return this.$q.when([{
          id: 1,
          name: 'AAAA',
          measure: '2121'
      }]).then(list => this.breadUnits = list);
    }
}
