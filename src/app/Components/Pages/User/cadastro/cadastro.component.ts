import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { PasswordShow } from 'src/app/Application/common/passwordShow';
import { UsuarioModel } from 'src/app/Application/model/usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  PasswordShow = new PasswordShow();

  cadastroForm = new FormGroup({
    Id : new FormControl(''),
    Nome : new FormControl('',[Validators.required]),
    Email : new FormControl('',[Validators.required]),
    Cpf : new FormControl('',[Validators.required]),
    Senha : new FormControl('',[Validators.required]),
    Csenha : new FormControl('',[Validators.required]),
    Uf : new FormControl('',[Validators.required]),
    Cidade : new FormControl('',[Validators.required]),
    Endereco : new FormControl('',[Validators.required]),
    Numero : new FormControl(null,[Validators.required]),
    Complemento : new FormControl(''),
    Cep : new FormControl('',[Validators.required]),

  });


  adicionar(){
      let user = new UsuarioModel;
      user.id = Number(this.cadastroForm.controls['Id'].value);
      user.nome = this.cadastroForm.controls['Nome'].value || '';
      user.email = this.cadastroForm.controls['Email'].value || '';
      user.cpf = this.cadastroForm.controls['Cpf'].value || '';
      user.senha = this.cadastroForm.controls['Senha'].value || '';
      user.uf = this.cadastroForm.controls['Uf'].value || '';
      user.cidade = this.cadastroForm.controls['Cidade'].value || '';
      user.endereco = this.cadastroForm.controls['Endereco'].value || '';
      user.complemento = this.cadastroForm.controls['Complemento'].value || '';
      user.numero = this.cadastroForm.controls['Numero'].value || 0;
      user.cep = this.cadastroForm.controls['Cep'].value || '';
  } 
}



