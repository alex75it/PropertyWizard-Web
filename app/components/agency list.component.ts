import { Component, OnInit } from "@angular/core";

import { Agency } from "../entities/agency";
import { AgencyService } from "../services/agency.service";

@Component({
    selector: "agency-list",
    templateUrl: "templates/agency list.html",
    styleUrls: ["templates/agency list.css"]
})

export class AgencyListComponent implements OnInit {

    agencies: Agency[] = [];

    constructor (
        private agencyService: AgencyService
    ){}

    ngOnInit():void {
        this.agencyService.getAgencies()
            .then(agencies => this.agencies = agencies);
    }

}