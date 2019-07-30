// {
//   'defaultSeverity': "warning",
//   "extends": [
//     "tslint:recommended"
//   ],
//   "linterOptions": {
//     "exclude": [
//       "node_modules/**"
//     ]
//   },

//   "no-trailing-whitespace": false,
//   "rules": {
//     "quotemark": false,
//     "indent": [true, "spaces", 4],
//     "interface-name": false,
//     "ordered-imports": false,
//     "object-literal-sort-keys": false,
//     "no-console": false,
//     "no-debugger": false,
//     // 提升可维护性
//     "no-unused-expression": [true, "allow-fast-null-checks"], // 禁止无用的表达式 但是允许写法 e && e.fn()
//     "no-unused-variable": false, // 定义过的变量必须使用
//     "triple-equals": true, // 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
//     "no-parameter-reassignment": true, // 禁止对函数的参数重新赋值
//     "no-conditional-assignment": true, // 禁止在分支条件判断中有赋值操作
//     "no-construct": true, // 禁止使用 new 来生成 String, Number 或 Boolean
//     "no-duplicate-super": true, // 禁止 super 在一个构造函数中出现两次
//     "no-duplicate-switch-case": true, // 禁止在 switch 语句中出现重复测试表达式的 case
//     "no-object-literal-type-assertion": true, // 禁止对对象字面量进行类型断言（断言成 any 是允许的）
//     "no-return-await": true, // 禁止没必要的 return await
//     "no-sparse-arrays": true, // 禁止在数组中出现连续的逗号，如 let foo = [,,]
//     "no-string-throw": true, // 禁止 throw 字符串，必须 throw 一个 Error 对象
//     "no-switch-case-fall-through": true, // switch 的 case 必须 return 或 break
//     "prefer-object-spread": true, // 使用 { ...foo, bar: 1 } 代替 Object.assign({}, foo, { bar: 1 }) 前者的类型检查更完善
//     "radix": true, // parseInt 必须传入第二个参数
//     "cyclomatic-complexity": [
//       true,
//       20
//     ], // 禁止函数的循环复杂度超过 20
//     "deprecation": true, // 禁止使用废弃（被标识了 @deprecated）的 API
//     "use-isnan": true, // 必须使用 isNaN(foo) 而不是 foo === NaN
//     "no-duplicate-imports": true, // 禁止出现重复的 import
//     "no-mergeable-namespace": true, // 禁止一个文件中出现多个相同的 namespace
//     "encoding": true, // 文件类型必须时 utf-8
//     "import-spacing": true, // import 语句中，关键字之间的间距必须是一个空格
//     "interface-over-type-literal": true, // 接口可以 implement extend 和 merge
//     "new-parens": true, // new 后面只必须有一个空格
//     "no-angle-bracket-type-assertion": true, // 类型断言必须使用 as Type，禁止使用 <Type>, <Type> 容易被理解为 jsx
//     "no-consecutive-blank-lines": [
//       true,
//       3
//     ] // 禁止连续超过三行空行
//   }
// }
