import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CpfPipe } from './Application/common/mask/cpf/cpf.pipe';
import { Cpf } from './Application/common/mask/cpf/cpf.class';


//angular materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';


//components
import { AppComponent } from './app.component';
import { LayoutComponent } from './Components/Pages/Layout/layout/layout.component';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { LoginComponent } from './Components/Pages/User/login/login.component';
import { ProdutoListComponent } from './Components/Pages/Produto/produto-list/produto-list.component';
import { CadastroComponent } from './Components/Pages/User/cadastro/cadastro.component';
import { NavbarComponent } from './Components/Pages/Layout/navbar/navbar.component';
import { ProdutoSpecComponent } from './Components/Pages/Produto/produto-spec/produto-spec.component';
import { TransportadoraListComponent } from './Components/Pages/Transportadora/transportadora-list/transportadora-list.component';
import { CarrinhoComponent } from './Components/Pages/carrinho/carrinho.component';
import { ProdutoSearchComponent } from './Components/Pages/Produto/produto-search/produto-search.component';
import { PedidoComponent } from './Components/Pages/Pedido/pedido/pedido.component';
import { UserListComponent } from './Components/Pages/User/user-list/user-list.component';
import { UpdateCadastroComponent } from './Components/Pages/User/update-cadastro/update-cadastro.component';
import { LayoutAdmComponent } from './Components/Pages/Layout/layout-adm/layout-adm.component';
import { PedidoListComponent } from './Components/Pages/Pedido/pedido-list/pedido-list.component';
import { CepPipe } from './Application/common/mask/cep/cep.pipe';
import { CnpjPipe } from './Application/common/mask/cnpj/cnpj.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ErrorPageComponent,
    HomePageComponent,
    LoginComponent,
    ProdutoListComponent,
    CadastroComponent,
    NavbarComponent,
    ProdutoSpecComponent,
    TransportadoraListComponent,
    CarrinhoComponent,
    ProdutoSearchComponent,
    PedidoComponent,
    UserListComponent,
    UpdateCadastroComponent,
    LayoutAdmComponent,
    PedidoListComponent,
    CpfPipe,
    CepPipe,
    CnpjPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
