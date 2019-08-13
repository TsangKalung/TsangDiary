(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{180:function(a,e,t){"use strict";t.r(e);var s=t(20),n=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_2018-5-24"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2018-5-24","aria-hidden":"true"}},[a._v("#")]),a._v(" 2018/5/24")]),a._v(" "),t("h2",{attrs:{id:"thinking-in-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thinking-in-java","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("em",[a._v("Thinking in Java")])]),a._v(" "),t("ul",[t("li",[a._v("Note that you cannot do the following, even though it is legal in C and C++,the compiler will announce that the variable "),t("code",[a._v("x")]),a._v(" has already been defined.Thus the C and C++ ability to “hide” a variable in a larger scope is not allowed because the Java designers thought that it led to confusing programs.")])]),a._v(" "),t("div",{staticClass:"language-Java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("96")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Illegal")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ul",[t("li",[a._v("Note carefully that the default values are what Java guarantees when the\nvariable is used as a member of a class. This ensures that member\nvariables of primitive types will always be initialized (something C++\ndoesn’t do), reducing a source of bugs. However, this initial value may not\nbe correct or even legal for the program you are writing. It’s best to always\nexplicitly initialize your variables.\nThis guarantee doesn’t apply to “local” variables—those that are not fields of a class.Thus, if within a method definition you have,Then "),t("code",[a._v("x")]),a._v(" will get some "),t("strong",[a._v("arbitrary value")]),a._v(" (as in C and C++); it will not\nautomatically be initialized to zero. You are responsible for assigning an\nappropriate value before you use x. If you forget, Java definitely improves\non C++: you get a compile-time error telling you the variable might not\nhave been initialized.")])]),a._v(" "),t("div",{staticClass:"language-Java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("ul",[t("li",[t("code",[a._v("util")]),a._v(" contains a number of classes and you might want to use several of them without declaring them all explicitly. This is easily accomplished by using ‘*’ to indicate a wild card.")]),a._v(" "),t("li",[a._v("There are two ways to refer to a static variable. As indicated above, you can name it via an object, by saying, for example, st2.i. You can also refer to it directly through its class name, something you cannot do with a nonstatic member. (This is the preferred way to refer to a static variable since it emphasizes that variable’s static nature.)")])])])},[],!1,null,null,null);e.default=n.exports}}]);