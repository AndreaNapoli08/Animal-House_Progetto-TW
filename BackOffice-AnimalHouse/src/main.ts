import $ from "jquery"
import "./style.css"
import { setupNavbar } from './components/navbar/navbar'
import { setupSidebar } from './components/sidebar/sidebar'

$('#app').html(`
  <header id="navbar">
  </header>

  <section id="sidebar">
  </section>
  
  <section class="ml-64" style="padding-top: 64px;" id="main">
  </section>
`)

// STATIC
setupNavbar($('#navbar'))
setupSidebar($('#sidebar'))

// DYNAMIC ROUTING
import { render } from "./router"
render("#/shop/prodotti")