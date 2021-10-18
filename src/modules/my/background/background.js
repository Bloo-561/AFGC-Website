import { LightningElement} from 'lwc';

export default class Background extends LightningElement {

    songStatus = true;

    muteSong() {
        this.songStatus = !this.songStatus; 
        console.log('Song Status Change');
    }

}