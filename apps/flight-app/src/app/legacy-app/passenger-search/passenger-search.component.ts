import * as angular from 'angular';
import {PassengerService} from "../services/passenger.service";
import {Passenger} from '../shared/passenger';

class PassengerSearchController {

    constructor(private passengerService: PassengerService) {
    }

    name = 'Doe';
    passenger: Passenger[] = [];
    selectedPassenger: Passenger;

    search() {
        this
            .passengerService
            .find(this.name)
            .then(passenger => {
                this.passenger = passenger;
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export let PassengerSearchComponent: angular.IComponentOptions = {
    controller: PassengerSearchController,
    templateUrl: './passenger-search.component.html'
}
