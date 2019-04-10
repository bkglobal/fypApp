import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule,  NgbTabsetModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ManageComponent } from './manage/manage.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AddBugComponent } from './add-bug/add-bug.component';
import { AllBugsComponent } from './all-bugs/all-bugs.component';
import { FormsModule } from '@angular/forms';
import { PageHeaderModule } from '../shared';
import { NgDragDropModule } from 'ng-drag-drop';
import { AddNewBugComponent } from './components/add-new-bug/add-new-bug.component';
import { AutoSearchModalComponent } from './components/auto-search-modal/auto-search-modal.component';



@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        NgbTabsetModule,
        FormsModule,
        NgbModule,
        PageHeaderModule,
        NgDragDropModule.forRoot()
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, ManageComponent, UserFormComponent, AddBugComponent, AllBugsComponent, AddNewBugComponent, AutoSearchModalComponent]
})
export class LayoutModule {}
