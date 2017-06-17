import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";

// components
import { AppContainerComponent } from "./components/app container.component";
import { AppNavComponent } from "./components/app nav.component";
import { DashboardComponent } from "./components/dashboard.component";
import { PostcodesComponent } from "./components/postcode list.component";
import { PostcodeDetailComponent } from "./components/postcode detail.component";
import { PostcodeSearchComponent } from "./components/postcode search.component";
import { ListingListComponent } from "./components/listing list.component";
import { AgencyListComponent } from "./components/agency list.component";
import { AgencyStatsComponent } from "./components/agency stats.component";
import { LoadingComponent} from "./components/loading.component";
// services
import { PostcodeService } from "./services/postcode.service";
import { PostcodeSearchService } from "./services/postcode_search.service";
import { ListingService } from "./services/listing.service";
import { AgencyService } from "./services/agency.service";

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [ 
        AppContainerComponent, AppNavComponent, 
        DashboardComponent,
        PostcodesComponent,
        PostcodeDetailComponent,
        PostcodeSearchComponent,
        ListingListComponent,
        AgencyListComponent,
        AgencyStatsComponent,
        LoadingComponent,
    ],
    bootstrap: [ AppContainerComponent, AppNavComponent, LoadingComponent ],
    providers: [
        PostcodeService,
        PostcodeSearchService,
        ListingService,
        AgencyService
    ]
})

export class AppModule {}