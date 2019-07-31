import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';
import { AddPageComponent } from '../../Dashboard/add-page/add-page.component';
import { SelectItem } from 'primeng/api';
import { AddNewInfoComponent } from '../../Dashboard/add-new-info/add-new-info.component';
import { AddNewDiscussionComponent } from '../../Dashboard/add-new-discussion/add-new-discussion.component';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../Models/Projects';
import { ProjectService } from '../../Services/project.service';
import { PageService } from '../../Services/page.service';
import { DiscussionService } from '../../Services/discussion.service';
import { Page } from '../../Models/Page';
import { Discussion } from '../../Models/Discussion';
import { Other } from '../../Models/Other';
import { OtherService } from '../../Services/other.service';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  //Projeler (dropdown)
  projects: Project[];
  dropdownItems: SelectItem[];
  selectedProject: string;

  //Sayfalar (Menu)
  items: MenuItem | MenuItem[];
  pages : Page[];
  discussion :Discussion[];
  other :Other [];

  constructor(private dialog: MatDialog,
    private http: HttpClient,
    private projectService: ProjectService,
    private pageService: PageService,
    private discussionService: DiscussionService,
    private otherService:OtherService
  ) { }

  onCreatePage() {
    this.dialog.open(AddPageComponent);
  }
  onCreateOther() {
    this.dialog.open(AddNewInfoComponent);
  }
  onCreateDiscussion() {
    this.dialog.open(AddNewDiscussionComponent);
  }
  
  // //projeleri çekiyoruz
  getProjects() {
    this.projectService.getProject().subscribe(data => {
      this.projects = data;
      this.projects.map((project) => {
        this.dropdownItems.push({ label: project.projectName, value: project.id })
      })
      this.selectedProject = this.dropdownItems[0].label;//Başlangıçta ilk elemanı yazdır.
    });
  }

  //projelerin sayfalarını çekip menuitem'a ekliyoruz
  getPages() {
    this.pageService.getPage().subscribe(data => {
      this.pages = data;
      this.pages.map((page) => {
        this.items[1].items.push({ label: page.pageName });
      })
    });
  }

  //projelerin tartışmalarını çekip menuitem'a ekliyoruz
  getDiscussion() {
    this.discussionService.getDiscussion().subscribe(data => {
      this.discussion = data;
      this.discussion.map((discussion) => {
        this.items[0].items.push({ label: discussion.name });
      })
    })
  }
   
  //proje ile ilgili diğer bilgileri çekip menuitem'a ekliyoruz
  getOther(){
    this.otherService.getOther().subscribe(data=>{
      this.other = data;
      this.other.map((other) => {
        this.items[2].items.push({ label: other.name });
      })
    })
  }

  ngOnInit() {

    this.getProjects();

    this.getPages();

    this.getDiscussion();

    this.getOther();

   

    //dropdown projeler
    this.dropdownItems = [];

    //menu item 
    this.items = [
      {
        label: 'Discussion', items: []
      },
      {
        label: 'Pages', items: []
      },
      {
        label: 'Others', items: []
      },
    ];

    //yeni item ekleme olayı
    this.items[0].items = [{ label: 'Add New Discussion', icon: 'pi pi-plus', command: () => this.onCreateDiscussion() }];
    this.items[1].items = [{ label: 'Add New Page', icon: 'pi pi-plus', command: () => this.onCreatePage() }];
    this.items[2].items = [{ label: 'Add New Info', icon: 'pi pi-plus', command: () => this.onCreateOther() }];
  }

}
