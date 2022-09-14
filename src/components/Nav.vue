<template>    
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-navbar-brand to="/">Home</b-navbar-brand>
            <b-navbar-brand to="/Sobre">Sobre</b-navbar-brand>
            <b-navbar-brand to="/Perfil">Perfil</b-navbar-brand>
            
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            
            <b-collapse id="nav-collapse" is-nav>
        
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Pesquisar"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
            </b-nav-form>
          
          <b-nav-item-dropdown right>
              <template #button-content>
                  <em>Felipe</em>
                </template>
                <b-dropdown-item href="#">Perfil</b-dropdown-item>
                <b-dropdown-item href="#">Sair</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
</div>
</template>
