import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StatisticsService} from '@shared/services/statistics.service';
import {ProfileService} from '@shared/services/profile.service';
import {AsyncInitialisedComponent} from '@shared/components/async/async.initialised.component';
import {LogService} from '@shared/modules/logs/services/log.service';

@Component({
    selector: 'app-statistics-panel',
    templateUrl: './statistics-panel.component.html',
    styleUrls: ['./statistics-panel.component.css'],
    providers: [ {provide: AsyncInitialisedComponent, useExisting: StatisticsPanelComponent }]
})
export class StatisticsPanelComponent extends AsyncInitialisedComponent implements OnInit {

    statisticsList: any;
    repositories: number;
    datasets: number;
    diseases: number;
    tissues: number;
    organisms: number;
    users = 99;

    constructor(private statisticsService: StatisticsService, public profileService: ProfileService, private logger: LogService) {
        super();
    }


    ngOnInit() {
        this.statisticsService.getStatisticsList()
            .then(data => {
                this.componentLoaded();
                this.statisticsList = data;


                for (let i = 0; i < this.statisticsList.length; i++) {
                    switch (this.statisticsList[i].name) {
                        case 'Different Repositories/Databases':
                            this.repositories = this.statisticsList[i].value;
                            break;
                        case 'Different Datasets' :
                            this.datasets = this.statisticsList[i].value;
                            break;
                        case 'Different Diseases' :
                            this.diseases = this.statisticsList[i].value;
                            break;
                        case 'Different Tissues' :
                            this.tissues = this.statisticsList[i].value;
                            break;
                        case 'Different Species/Organisms' :
                            this.organisms = this.statisticsList[i].value;
                            break;
                        // case "Users" : this.users = this.statisticsList[i].value; break;
                    }
                }

            })
            .catch(this.handleError);

        this.profileService.getUsersCount().subscribe(
            data => {
                this.users = data;
            }
        );
    }

    private handleError(error: any) {
        this.componentLoaded();
        this.logger.error('GET error with url: http://www.omicsdi.org/ws/statistics/general');
        return Promise.reject(error.message || error);
    }
}
