import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { menuService } from '../../services/menu.service';
import { Menu } from '../../models/menu';

declare var M: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class menuComponent implements OnInit {

  constructor(public menuService: menuService) { }

  ngOnInit() {
    this.getmenu();
  }

  addmenu(form?: NgForm){    
 console.log(form.value);
    if(form.value._id) {
      this.menuService.putmenu(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getmenu();
          M.toast({html: 'actualizado'});
        });
    } else {
      this.menuService.postmenu(form.value)
      .subscribe(res => {
        this.getOpcionesmenus();
        this.resetForm(form);
        M.toast({html: 'Opcionesmenu Guardado'});
      });
    }
    
  }



  getOpcionesmenus() {
    this.menuService.getmenu()
      .subscribe(res => {
        this.menuService.Menu = res as Menu[];
      });
  }

  editOpcionesmenu(menu: Menu) {
    this.menuService.selectedmenu = menu;
  }

  deleteOpcionesmenu(_id: string, form: NgForm) {
    if(confirm('¿Esta seguro de eliminar?')) {
      this.menuService.deletemenu(_id)
        .subscribe(res => {
          this.getmenu();
          this.resetForm(form);
          M.toast({html: 'Eiminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.menuService.selectedmenu = new Menu();
    }
  }







}
