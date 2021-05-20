"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// function LinkForm(props) {
//     const [input ,setInput] = useState('');
//     const handleChange = e => {
//         setInput(e.target.value);
//     }
//     const handleSubmit = e => {
//         e.preventDefault();
//         // props.onSubmit({
//         //     id:Math.floor(Math.random() * 10000),
//         //     text: input
//         // });
//         setInput(' ');
//     }
//   return (
//     <div>
//       <form className='addlink-form' onSubmit={handleSubmit}>
//         <label>Link Name :</label>
//         <input
//         type='text'
//         placeholder='Add a Link'
//         name='text'
//         className='addlink-input'
//         onChange={handleChange}
//         />
//         <br/>
//         <label>Link URL :</label>
//         <input
//         type='text'
//         placeholder='e.g. http://abc.xyz'
//         name='text'
//         className='addlink-input'
//         onChange={handleChange}
//         />
//         <br/>
//         <button className='addLink-Button'>ADD</button>
//       </form>
//     </div>
//   );
// }
var _default = LinkForm;
exports["default"] = _default;