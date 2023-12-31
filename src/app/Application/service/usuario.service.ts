import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from "../model/usuario.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }


    salvar(usuario: UsuarioModel): Observable<UsuarioModel> {
        return this.http.post<UsuarioModel>('http://localhost:8080/usuario/criar', usuario);
    }

    listar(): Observable<UsuarioModel[]> {
        return this.http.get<UsuarioModel[]>('http://localhost:8080/usuario/listar');
    }

    alterar(usuario: UsuarioModel): Observable<UsuarioModel> {
        let url = 'http://localhost:8080/usuario/atualizar/'+usuario.id;
        
        return this.http.put<UsuarioModel>(url,usuario);
    }

    logar(email:string,senha:string): Observable<UsuarioModel>{
        let url = 'http://localhost:8080/usuario/'+email+'/'+senha;
        
        return this.http.get<UsuarioModel>(url);
    }

    setLogin(usuario: UsuarioModel) :Observable<UsuarioModel>{
        return this.http.post<UsuarioModel>('http://localhost:8080/login/setlogin', usuario);
    }
    getLogin() :Observable<UsuarioModel>{
        return this.http.get<UsuarioModel>('http://localhost:8080/login/listar');
    }
    deleteLogin():Observable<String>{
        return this.http.delete<String>('http://localhost:8080/login/excluir');
    };

    

}