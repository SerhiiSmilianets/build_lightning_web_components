import { LightningElement, track } from 'lwc';
export default class MyFirstWebComponent extends LightningElement {
    @track
    contacts = [
        {
            Id: 0,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 1,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 2,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
}