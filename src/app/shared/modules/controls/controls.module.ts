import {NgModule} from '@angular/core';
import {ConfirmDialogComponent} from '@shared/modules/controls/confirm-dialog/confirm-dialog.component';
import {AltmetricImageComponent} from '@shared/modules/controls/altmetric-image/altmetric-image.component';
import {AnnotatedTextComponent} from '@shared/modules/controls/annotated-text/annotated-text.component';
import {DatasetWidgetComponent} from '@shared/modules/controls/datasetwidget/datasetwidget.component';
import {DeleteAllButtonComponent} from '@shared/modules/controls/delete-all-button/delete-all-button.component';
import {DeleteButtonComponent} from '@shared/modules/controls/delete-button/delete-button.component';
import {SocialnetworksComponent} from '@shared/modules/controls/socialnetworks/socialnetworks.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PipesModule} from '@shared/pipes/pipes.module';
import {OmicsImageComponent} from '@shared/modules/controls/omics-image/omics-image.component';
import {FeedbackComponent} from '@shared/modules/controls/feedback/feedback.component';
import {ClipboardModule} from 'ngx-clipboard';
import {FormsModule} from '@angular/forms';
import {DropDownComponent} from '@shared/modules/controls/drop-down/drop-down.component';
import {FacetComponent} from '@shared/modules/controls/facet/facet.component';
import {FacetOmicsComponent} from '@shared/modules/controls/facet-omics/facet-omics.component';
import {LoginComponent} from '@shared/modules/controls/login/login.component';
import {
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule
} from '@angular/material';
import {NguiAutoCompleteModule} from '@ngui/auto-complete';
import {CitationDialogComponent} from '@shared/modules/controls/citation-dialog/citation-dialog.component';
import {UtilsModule} from '@shared/modules/utils/utils.module';
import {AutocompleteNComponent} from '@shared/modules/controls/autocomplete-n/autocomplete-n.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {AdvancedSearchComponent} from '@shared/modules/controls/advanced-search/advanced-search.component';
import {AdvancedSearchFactorsComponent} from '@shared/modules/controls/advanced-search-factors/advanced-search-factors.component';
import {AdvancedSearchInputComponent} from '@shared/modules/controls/advanced-search-input/advanced-search-input.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        UtilsModule,
        PipesModule,
        ClipboardModule,
        FormsModule,
        MatMenuModule,
        NguiAutoCompleteModule,
        BsDropdownModule.forRoot(),
        MatFormFieldModule,
        MatSelectModule,
        MatChipsModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule
    ],
    declarations: [
        ConfirmDialogComponent,
        AltmetricImageComponent,
        AnnotatedTextComponent,
        DatasetWidgetComponent,
        DeleteAllButtonComponent,
        DeleteButtonComponent,
        DropDownComponent,
        FacetComponent,
        FacetOmicsComponent,
        FeedbackComponent,
        LoginComponent,
        OmicsImageComponent,
        SocialnetworksComponent,
        AutocompleteNComponent,
        CitationDialogComponent,
        AdvancedSearchComponent,
        AdvancedSearchFactorsComponent,
        AdvancedSearchInputComponent
    ],
    exports: [
        AltmetricImageComponent,
        AnnotatedTextComponent,
        DatasetWidgetComponent,
        DeleteAllButtonComponent,
        DeleteButtonComponent,
        DropDownComponent,
        FacetComponent,
        FacetOmicsComponent,
        FeedbackComponent,
        LoginComponent,
        LoginComponent,
        OmicsImageComponent,
        SocialnetworksComponent,
        AutocompleteNComponent,
        CitationDialogComponent,
        AdvancedSearchComponent
    ],
    entryComponents: [
        ConfirmDialogComponent,
        CitationDialogComponent
    ],
})
export class ControlsModule {
}
