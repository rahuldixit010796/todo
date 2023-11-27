import { date } from 'quasar';

export default (await import('vue')).defineComponent({
name: 'myLayout',
data() {
return {
leftDrawerOpen: false
};
},
computed: {
todaysDate(): {};,
let, timeStamp = Date.now(),
return: date.formatDate(timeStamp, 'dddd D MMMM')
}
});
