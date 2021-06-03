(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(14),c=n.n(r),s=(n(24),n(25),n(0)),o=function(){return Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{className:"text-center",children:"Employee Directory"}),Object(s.jsx)("p",{className:"text-center",children:"Click on column headers to filter by heading or use the search box to narrow your results."})]})},i=n(3),l=n(4),h=n(15),d=n(16),u=n(19),m=n(18),j=(n(27),function(e){return Object(s.jsx)("nav",{className:"navbar navbar-light bg-light justify-content-center",children:Object(s.jsx)("form",{className:"form-inline m-2",onSubmit:e.handleFormSubmit,children:Object(s.jsx)("input",{className:"form-control",value:e.value,name:"search",onChange:e.handleInputChange,type:"search",placeholder:"Search"})})})}),b=(n(28),function(e){return Object(s.jsxs)("table",{className:"table table-striped table-sortable text-center",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Image"}),Object(s.jsx)("th",{scope:"col","data-field":"name","data-sortable":"true",children:Object(s.jsx)("span",{onClick:function(){return e.sortBy("name","last","first")},children:"Name"})}),Object(s.jsx)("th",{scope:"col",children:Object(s.jsx)("span",{onClick:function(){return e.sortBy("phone")},children:"Phone"})}),Object(s.jsx)("th",{scope:"col",children:Object(s.jsx)("span",{onClick:function(){return e.sortBy("email")},children:"Email"})}),Object(s.jsx)("th",{scope:"col",children:Object(s.jsx)("span",{onClick:function(){return e.sortBy("dob","date")},children:"DOB"})})]})}),Object(s.jsx)("tbody",{children:e.state.filteredEmployees.map((function(t){var n=t.name,a=n.first,r=n.last,c="".concat(a," ").concat(r),o=e.formatDate(t.dob.date);return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:t.picture.thumbnail,alt:c})}),Object(s.jsx)("td",{className:"align-middle",children:c}),Object(s.jsx)("td",{className:"align-middle",children:Object(s.jsx)("a",{href:"tel:+1".concat(t.phone),children:t.phone})}),Object(s.jsx)("td",{className:"align-middle email",children:Object(s.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})}),Object(s.jsx)("td",{className:"align-middle",children:o})]},t.login.uuid)}))})]})}),p=n(17),f=n.n(p),O=function(){return f.a.get("https://randomuser.me/api/?results=50&nat=us")},x=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employees:[],filteredEmployees:[],sortDirections:e.initialSortDirections},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n}),e.filterEmployees(n.toLowerCase().trim())},e.handleFormSubmit=function(e){e.preventDefault()},e.sortBy=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.state.filteredEmployees;e.state.sortDirections[t]?e.setState({filteredEmployees:r.reverse(),sortDirections:Object(l.a)(Object(l.a)({},e.initialSortDirections),{},Object(i.a)({},t,"asc"===e.state.sortDirections[t]?"desc":"asc"))}):(r=e.state.filteredEmployees.sort((function(e,r){return e=e[t],r=r[t],n?a&&e[n]===r[n]?e[a].localeCompare(r[a]):e[n].localeCompare(r[n]):e.localeCompare(r)})),e.setState({filteredEmployees:r,sortDirections:Object(l.a)(Object(l.a)({},e.initialSortDirections),{},Object(i.a)({},t,"asc"))}))},e.filterEmployees=function(t){t?e.setState({filteredEmployees:e.state.employees.filter((function(n){return n.name.first.toLowerCase().concat(" ",n.name.last.toLowerCase()).includes(t)||n.phone.includes(t)||n.phone.replace(/[^\w\s]/gi,"").includes(t)||n.email.includes(t)||e.formatDate(n.dob.date).includes(t)}))}):e.setState({filteredEmployees:e.state.employees})},e.formatDate=function(e){e=new Date(e);var t=[];return t.push(("0"+(e.getMonth()+1)).slice(-2)),t.push(("0"+e.getDate()).slice(-2)),t.push(e.getFullYear()),t.join("-")},e}return Object(d.a)(n,[{key:"initialSortDirections",get:function(){return{name:"",phone:"",email:"",dob:""}}},{key:"componentDidMount",value:function(){var e=this;O().then((function(t){return e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(s.jsx)("div",{className:"container mt-4",children:Object(s.jsx)(b,{state:this.state,sortBy:this.sortBy,filterEmployees:this.filterEmployees,formatDate:this.formatDate})})]})}}]),n}(a.Component),y=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(x,{})]})};n(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(s.jsx)(y,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.a6efffb2.chunk.js.map