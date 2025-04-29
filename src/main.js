import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import $ from 'jquery';
import dt from 'datatables.net-dt';

$(document).ready(function () {
  $('#tabla-ejemplo').DataTable();
});



setupCounter(document.querySelector('#counter'))
