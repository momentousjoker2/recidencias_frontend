<template>
  <header class="header clearfix">
    <button type="button" id="toggleMenu" class="toggle_menu">
      <i class="fa fa-bars"></i>
    </button>
  </header>
  <nav class="vertical_nav" v-if="true">
    <ul id="js-menu" class="menu">
      <li class="menu--item">
        <router-link to="/index">
          <a href="#" class="menu--link" title="Item 2">
            <i class="menu--icon fa fa-fw fas fa-home"></i>
            <span class="menu--label">Inicio</span>
          </a>
        </router-link>
      </li>
      <li class="menu--item">
        <router-link to="/SituacionEspecial">
          <a href="#" class="menu--link" title="Item 3">
            <i class="menu--icon fa-fw fas fa fa-star"></i>
            <span class="menu--label">Situacion especial</span>
          </a>
        </router-link>
      </li>
      <li class="menu--item">
        <router-link to="/cambioFormato">
          <a href="#" class="menu--link" title="Item 3">
            <i class="menu--icon fa fa-fw fas fa-edit"></i>
            <span class="menu--label">Cambio de formato</span>
          </a>
        </router-link>
      </li>

      <li class="menu--item menu--item__has_sub_menu">
        <label class="menu--link" title="Item 4">
          <i class="menu--icon fa fa-fw fas fa-address-book"></i>
          <span class="menu--label">Registro</span>
        </label>

        <ul class="sub_menu">
          <li class="sub_menu--item">
            <router-link to="/alumnos">
              <a href="#" class="sub_menu--link">alumnos</a>
            </router-link>
          </li>
          <li class="sub_menu--item">
            <router-link to="/maestros">
              <a href="#" class="sub_menu--link">Maestros</a>
            </router-link>
          </li>
          <li class="sub_menu--item">
            <router-link to="/departamento">
              <a href="#" class="sub_menu--link">Departamentos</a>
            </router-link>
          </li>
          <li class="sub_menu--item">
            <router-link to="/carreras">
              <a href="#" class="sub_menu--link">Carreras</a>
            </router-link>
          </li>
          <li class="sub_menu--item">
            <router-link to="/tipoProyectos">
              <a href="#" class="sub_menu--link">Tipo de proyecto</a>
            </router-link>
          </li>
          <li class="sub_menu--item">
            <router-link to="/periodos">
              <a href="#" class="sub_menu--link">Periodos</a>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="menu--item menu--item__has_sub_menu">
        <label class="menu--link" title="Item 4">
          <i class="menu--icon fa fa-fw fas fa-folder"></i>
          <span class="menu--label">Proyectos</span>
        </label>
        <ul class="sub_menu">
          <li class="sub_menu--item">
            <router-link to="/catalagoProyecto">
              <a href="#" class="sub_menu--link">Catalago de proyectos</a>
            </router-link>
          </li>
          <li class="sub_menu--item">
            <router-link to="/inscripcionEstudiantesProyecto">
              <a href="#" class="sub_menu--link" >Inscripción de Estudiantes a proyecto</a >
            </router-link>
          </li>
          <li class="sub_menu--item">
            <router-link to="/ActividadesActivas">
              <a href="#" class="sub_menu--link"
                >Activades Activas</a>
            </router-link>
          </li>
        </ul>
      </li>

      <li class="menu--item menu--item__has_sub_menu">
        <label class="menu--link" title="Item 5">
          <i class="menu--icon fa fa-fw fas fa-user-graduate"></i>
          <span class="menu--label">Consultas</span>
        </label>

        <ul class="sub_menu">
          <li class="sub_menu--item">
            <router-link to="/creditosComplementariosAlumno">
              <a href="#" class="sub_menu--link"
                >Créditos Complementarios por Alumno</a
              >
            </router-link>
          </li>
          <li class="sub_menu--item">
            <router-link to="/proyectosPeriodo">
              <a href="#" class="sub_menu--link">Proyectos por Período</a>
            </router-link>
          </li>
          <li class="sub_menu--item">
            <router-link to="/alumnosProyecto">
              <a href="#" class="sub_menu--link">Alumnos por Proyecto</a>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="menu--item menu--item__has_sub_menu">
        <label class="menu--link" title="Item 6">
          <i class="menu--icon fa fa-fw fas fas fa-file-alt"></i>
          <span class="menu--label">Reportes</span>
        </label>
        <ul class="sub_menu">
          <li class="sub_menu--item">
            <router-link to="/generarConstanciaLiberacion">
              <a href="#" class="sub_menu--link"
                >Generar constancia de liberación</a
              >
            </router-link>
          </li>
          <li class="sub_menu--item">
            <router-link to="/generarConstanciasLiberacion">
              <a href="#" class="sub_menu--link"
                >Generar constancias por liberación</a
              >
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <button id="collapse_menu" class="collapse_menu">
      <i class="collapse_menu--icon fa fa-fw"></i>
      <span class="collapse_menu--label">Recojer menu</span>
    </button>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "menuAdmin",
  mounted() {
    "use strict";

    var tid = setInterval(function () {
      if (document.readyState !== "complete") return;
      clearInterval(tid);

      var querySelector = document.querySelector.bind(document);

      var nav = document.querySelector(".vertical_nav");
      var wrapper = document.querySelector(".wrapper");

      var menu = document.getElementById("js-menu");
      var subnavs = menu.querySelectorAll(".menu--item__has_sub_menu");

      // Toggle menu click
      querySelector(".toggle_menu").onclick = function () {
        nav.classList.toggle("vertical_nav__opened");

        wrapper.classList.toggle("toggle-content");
      };

      // Minify menu on menu_minifier click
      querySelector(".collapse_menu").onclick = function () {
        nav.classList.toggle("vertical_nav__minify");

        wrapper.classList.toggle("wrapper__minify");

        for (var j = 0; j < subnavs.length; j++) {
          subnavs[j].classList.remove("menu--subitens__opened");
        }
      };

      // Open Sub Menu

      for (var i = 0; i < subnavs.length; i++) {
        if (subnavs[i].classList.contains("menu--item__has_sub_menu")) {
          subnavs[i].querySelector(".menu--link").addEventListener(
            "click",
            function (e) {
              for (var j = 0; j < subnavs.length; j++) {
                if (e.target.offsetParent != subnavs[j])
                  subnavs[j].classList.remove("menu--subitens__opened");
              }

              e.target.offsetParent.classList.toggle("menu--subitens__opened");
            },
            false
          );
        }
      }
    }, 100);
  },
  setup() {},
};
</script>


<style>
@import "../../assets/font-awesome/css/all.css";
@import "../../assets/font-awesome/css/all.css";
@import "../../assets/normalize-8.0.1/normalize.css";
/*
=========================
Vertical Reponsive Menu
=========================
*/
/* line 6, sass/import/mixins.scss */
.vertical_nav,
.collapse_menu .collapse_menu--icon {
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

/* line 14, sass/vertical-responsive-menu.scss */
* {
  box-sizing: border-box;
}

/* line 26, sass/vertical-responsive-menu.scss */
:focus,
:active {
  outline: none;
}

/* line 32, sass/vertical-responsive-menu.scss */
.toggle_menu {
  display: block;
  float: left;
  width: 50px;
  height: 50px;
  line-height: 50px;
  padding: 0;
  background: none;
  border: 0;
  text-align: center;
  cursor: pointer;
}
/* line 44, sass/vertical-responsive-menu.scss */
.toggle_menu i {
  display: block;
  font-size: 28px;
}

/* line 52, sass/vertical-responsive-menu.scss */
.vertical_nav {
  position: absolute;
  left: -200px;
  height: 585px;
  top: 100px;
  bottom: 0px;
  width: 200px;
  background: #f6f6f6;
}

/* line 63, sass/vertical-responsive-menu.scss */
.vertical_nav__closed {
  left: -200px !important;
}

/* line 67, sass/vertical-responsive-menu.scss */
.vertical_nav__opened {
  left: 0px !important;
  box-shadow: rgba(0, 0, 0, 0.4) -30px 0 30px 30px;
}

/* line 73, sass/vertical-responsive-menu.scss */
.menu {
  position: absolute;
  top: 20px;
  bottom: 40px;
  overflow-y: auto;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

/* line 84, sass/vertical-responsive-menu.scss */
.menu--item {
  position: relative;
  min-height: 40px;
  line-height: 40px;
}

/* line 90, sass/vertical-responsive-menu.scss */
.menu--item__has_sub_menu .menu--link:after {
  position: absolute;
  top: 0;
  right: 15px;
  height: 40px;
  line-height: 40px;
  font-family: "FontAwesome";
  content: "\f0d7";
}

/* line 100, sass/vertical-responsive-menu.scss */
.menu--subitens__opened {
  background: #e9e9e9;
}
/* line 103, sass/vertical-responsive-menu.scss */
.menu--subitens__opened .menu--link {
  color: #000;
}
/* line 107, sass/vertical-responsive-menu.scss */
.menu--subitens__opened .sub_menu {
  display: block;
}

/* line 113, sass/vertical-responsive-menu.scss */
.menu--link {
  display: block;
  overflow: hidden;
  font-size: 0.875rem;
  text-decoration: none;
  color: #666;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
}
/* line 123, sass/vertical-responsive-menu.scss */
.menu--link:hover,
.menu--link:hover .menu--label {
  color: #000;
  background: #dddddd;
}

/* line 131, sass/vertical-responsive-menu.scss */
.menu--icon {
  display: block;
  float: left;
  width: 50px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
}

/* line 140, sass/vertical-responsive-menu.scss */
.menu--label {
  display: block;
  height: 40px;
  line-height: 40px;
}

/* line 148, sass/vertical-responsive-menu.scss */
.sub_menu {
  display: none;
  overflow: hidden;
  padding-left: 0;
  list-style: none;
}

/* line 154, sass/vertical-responsive-menu.scss */
.sub_menu--link {
  display: block;
  padding-left: 50px;
  padding-right: 16px;
  font-size: 0.9rem;
  color: #666;
  text-decoration: none;
}
/* line 162, sass/vertical-responsive-menu.scss */
.sub_menu--link:hover {
  color: #000;
  background: #dddddd;
}

/* line 168, sass/vertical-responsive-menu.scss */
.sub_menu--link__active {
  color: #000;
  font-weight: 500;
}

/* line 176, sass/vertical-responsive-menu.scss */
.collapse_menu {
  display: none;
}

@media (min-width: 992px) {
  /* line 193, sass/vertical-responsive-menu.scss */
  .vertical_nav {
    left: 0;
  }

  /* line 197, sass/vertical-responsive-menu.scss */
  .toggle_menu {
    display: none;
  }

  /* line 203, sass/vertical-responsive-menu.scss */
  .vertical_nav__minify {
    width: 50px;
  }
  /* line 206, sass/vertical-responsive-menu.scss */
  .vertical_nav__minify .menu {
    overflow: visible;
  }
  /* line 210, sass/vertical-responsive-menu.scss */
  .vertical_nav__minify .menu--label {
    display: none;
    position: absolute;
    top: 0;
    left: 50px;
    width: 150px;
    padding-left: 16px;
    padding-right: 16px;
    background: #e9e9e9;
    font-weight: 500;
  }
  /* line 222, sass/vertical-responsive-menu.scss */
  .vertical_nav__minify .menu--item__has_sub_menu .menu--link:after {
    content: "";
  }
  /* line 228, sass/vertical-responsive-menu.scss */
  .vertical_nav__minify .menu--subitens__opened .menu--label,
  .vertical_nav__minify .menu--subitens__opened .sub_menu {
    display: block;
  }
  /* line 232, sass/vertical-responsive-menu.scss */
  .vertical_nav__minify .sub_menu {
    position: absolute;
    top: 40px;
    left: 50px;
    width: 150px;
    background: #e9e9e9;
  }
  /* line 239, sass/vertical-responsive-menu.scss */
  .vertical_nav__minify .sub_menu--link {
    padding-left: 16px;
  }
  /* line 245, sass/vertical-responsive-menu.scss */
  /*.vertical_nav__minify .collapse_menu--icon {
    -webkit-transform: rotate(180deg);
  }

  /* line 253, sass/vertical-responsive-menu.scss */
  .collapse_menu {
    position: absolute;
    bottom: 0px;
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0;
    border: 0;
    border-top: 1px solid #e6e6e6;
    background: #f6f6f6;
    color: #666;
    font-size: 0.875rem;
    text-align: left;
    cursor: pointer;
  }
  /* line 269, sass/vertical-responsive-menu.scss */
  .collapse_menu:hover {
    color: #000;
    background: #dddddd;
  }
  /* line 274, sass/vertical-responsive-menu.scss */
  .collapse_menu .collapse_menu--icon {
    display: block;
    float: left;
    width: 50px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
  }
  /* line 282, sass/vertical-responsive-menu.scss */
  .collapse_menu .collapse_menu--icon:before {
    content: "\f053";
  }
  /* line 288, sass/vertical-responsive-menu.scss */
  .collapse_menu .collapse_menu--label {
    display: block;
    height: 40px;
    line-height: 40px;
  }
}
</style>

