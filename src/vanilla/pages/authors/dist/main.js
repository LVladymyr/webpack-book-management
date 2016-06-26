!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function init(){return new _listAuthors2["default"]}var _listAuthors=__webpack_require__(3),_listAuthors2=_interopRequireDefault(_listAuthors);init()},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _authorsData=__webpack_require__(2),_authorsData2=_interopRequireDefault(_authorsData),Api={getAll:function(){return _authorsData2["default"]}};exports["default"]=Api},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var authorsData=[{authorId:1,author:"J. K. Rowling",birthYear:1965},{authorId:2,author:"Paulo Coelho",birthYear:1947},{authorId:3,author:"Chad Fowler",birthYear:1974},{authorId:4,author:"Adriana Trigiani",birthYear:1970},{authorId:5,author:"Anthony Doerr",birthYear:1973},{authorId:6,author:"Susanna Kearsley",birthYear:1966},{authorId:7,author:"Mario Puzo",birthYear:1920},{authorId:8,author:"Amish Tripathi",birthYear:1974},{authorId:9,author:"Susanna Kearsley",birthYear:1966},{authorId:10,author:"Steve McConnell",birthYear:1962}];exports["default"]=authorsData},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_authorsApi=__webpack_require__(1),_authorsApi2=_interopRequireDefault(_authorsApi),ListAuthors=function(){function ListAuthors(){_classCallCheck(this,ListAuthors),this.arrAuthors=this.getAllBooks(),this.generateList(this.arrAuthors)}return _createClass(ListAuthors,[{key:"getItemAuthor",value:function(author){var template="\n			<li>\n				<span>"+author.author+"</span>\n				<span> - </span>\n				<span>"+author.birthYear+"</span>\n			</li>\n		";return template}},{key:"generateList",value:function(listAuthors){var _this=this,listAuthorsHTML=[];listAuthors.forEach(function(item,idx){listAuthorsHTML.push(_this.getItemAuthor(item))});var ul="\n			<ul>\n				"+listAuthorsHTML.join("")+"\n			</ul>\n		",container=document.getElementById("container");container.innerHTML=ul}},{key:"getAllBooks",value:function(){return _authorsApi2["default"].getAll()}}]),ListAuthors}();exports["default"]=ListAuthors}]);