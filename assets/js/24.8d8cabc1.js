(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{421:function(a,s,e){"use strict";e.r(s);var t=e(46),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[e("strong",[a._v("DTK 对 pkg-config 命令的支持")])]),a._v(" "),e("p",[a._v("[TOC]")]),a._v(" "),e("h2",{attrs:{id:"pkg-config-命令介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pkg-config-命令介绍"}},[a._v("#")]),a._v(" Pkg-config 命令介绍")]),a._v(" "),e("h3",{attrs:{id:"pkg-config-的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pkg-config-的作用"}},[a._v("#")]),a._v(" pkg-config 的作用")]),a._v(" "),e("p",[a._v("在使用第三方库开发程序的时候，编译和链接阶段需要指定库的头文件和库文件的位置。如果库文件的和头文件的数量很多，手动指定会很繁琐，这个时候 pkg-config 就可以站出来了。")]),a._v(" "),e("p",[a._v("范例：使用库  dtkcore 编译程序")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("g++ main.c "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("pkg-config --cflags --libs dktcore"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" -o main\n")])])]),e("p",[a._v("参数   --cflags：指定头文件；--libs：指定库文件。")]),a._v(" "),e("br"),a._v(" "),e("h3",{attrs:{id:"支持-pkg-config-查找机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持-pkg-config-查找机制"}},[a._v("#")]),a._v(" 支持 pkg-config 查找机制")]),a._v(" "),e("p",[a._v("当我们开发了一个新的第三方库，需要编写自己库的 .pc 文件放在特定目录下；这样 pkg-config 命令可以解析 XXX.pc 文件知道第三方库的头文件和库文件的位置。")]),a._v(" "),e("br"),a._v(" "),e("h3",{attrs:{id:"pc-文件规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pc-文件规范"}},[a._v("#")]),a._v(" pc 文件规范")]),a._v(" "),e("ul",[e("li",[a._v("Name: 一个针对library或package的便于人阅读的名称。这个名称可以是任意的，它并不会影响到pkg-config的使用，pkg-config是采用pc文件名的方式来工作的。")]),a._v(" "),e("li",[a._v("Description: 对package的简短描述。")]),a._v(" "),e("li",[a._v("URL: 人们可以通过该URL地址来获取package的更多信息或者package的下载地址。")]),a._v(" "),e("li",[a._v("Version: 指定package版本号的字符串。")]),a._v(" "),e("li",[a._v("Requires: 本库所依赖的其他库文件。所依赖的库文件的版本号可以通过使用如下比较操作符指定：=,<,>,<=,>=。")]),a._v(" "),e("li",[a._v("Requires.private: 本库所依赖的一些私有库文件，但是这些私有库文件并不需要暴露给应用程序。这些私有库文件的版本指定方式与Requires中描述的类似。")]),a._v(" "),e("li",[a._v("Conflicts: 是一个可选字段，其主要用于描述与本package所冲突的其他package。版本号的描述也与Requires中的描述类似。本字段也可以取值为同一个package的多个不同版本实例。例如: Conflicts: bar < 1.2.3, bar >= 1.3.0。")]),a._v(" "),e("li",[a._v("Cflags: 编译器编译本package时所指定的编译选项，和其他并不支持pkg-config的library的一些编译选项值。假如所需要的library支持pkg-config,则它们应该被添加到Requires或者Requires.private中。")]),a._v(" "),e("li",[a._v("Libs: 链接本库时所需要的一些链接选项，和其他一些并不支持pkg-config的library的链接选项值。与Cflags类似。")]),a._v(" "),e("li",[a._v("Libs.private: 本库所需要的一些私有库的链接选项。")])]),a._v(" "),e("br"),a._v(" "),e("h3",{attrs:{id:"pkg-config-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pkg-config-常用命令"}},[a._v("#")]),a._v(" pkg-config 常用命令")]),a._v(" "),e("p",[e("code",[a._v("pkg-config --list-all")]),a._v(" 列出所有可使用的连接库")]),a._v(" "),e("p",[e("code",[a._v("pkg-config --cflags XXX")]),a._v(" 取得该连接库的 CFLAGS 参数。（Cflags）")]),a._v(" "),e("p",[e("code",[a._v("pkg-config --libs XXX")]),a._v(" 取得该连接库的 LDFLAGS 参数。（Libs）")]),a._v(" "),e("p",[e("code",[a._v("pkg-config --version")]),a._v(" 取得 pkg-config 版本号。")]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"dtk-支持-pkg-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dtk-支持-pkg-config"}},[a._v("#")]),a._v(" DTK 支持 pkg-config")]),a._v(" "),e("p",[e("strong",[a._v("在安装 DTK 开发库时，会在指定的目录下安装对应项目的 .pc 文件。")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("libdtkwidget-dev"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v(" 对应的 .pc 文件和所在目录 "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("/usr/lib/x86_64-linux-gnu/pkgconfig/dtkwidget.pc\nlibdtkcore-dev"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v(" 对应的 .pc 文件和所在目录 "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("/usr/lib/x86_64-linux-gnu/pkgconfig/dtkcore.pc\nlibdtkgui-dev 对应的"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v(" .pc 文件和所在目录 "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("/usr/lib/x86_64-linux-gnu/pkgconfig/dtkgui.pc\n")])])]),e("p",[e("strong",[a._v("dtkwidget.pc 文件内容结构")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("prefix")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("exec_prefix")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${prefix}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("libdir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${prefix}")]),a._v("/lib/x86_64-linux-gnu\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("includedir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${prefix}")]),a._v("/include/libdtk-5.1.2/DCore/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/DWidget\n\nName: DTKWIDGET\nDescription: Deepin Tool Kit dtkwidget header files\nVersion: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.1")]),a._v(".2.2\nLibs: -ldtkwidget \nCflags: -I"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${includedir}")]),a._v("\nRequires: dtkcore, dtkgui\n")])])]),e("p",[e("strong",[a._v("dtkcore.pc 文件内容结构")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("prefix")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("exec_prefix")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${prefix}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("libdir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${prefix}")]),a._v("/lib/x86_64-linux-gnu\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("includedir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${prefix}")]),a._v("/include/libdtk-5.2.0/DCore\n\n\nName: DTKCORE\nDescription: Deepin Tool Kit dtkcore header files\nVersion: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.2")]),a._v(".0.1\nLibs: -ldtkcore \nCflags: -I"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${includedir}")]),a._v("\n")])])]),e("p",[e("strong",[a._v("dtkgui.pc 文件内容结构")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("prefix")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("exec_prefix")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${prefix}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("libdir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${prefix}")]),a._v("/lib/x86_64-linux-gnu\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("includedir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${prefix}")]),a._v("/include/libdtk-5.1.2/DCore/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/DGui\n\nName: DTKGUI\nDescription: Deepin Tool Kit dtkgui header files\nVersion: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.2")]),a._v(".0.2\nLibs: -ldtkgui \nCflags: -I"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${includedir}")]),a._v("\nRequires: dtkcore\n")])])]),e("br"),a._v(" "),e("h2",{attrs:{id:"dtk-支持-cmake"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dtk-支持-cmake"}},[a._v("#")]),a._v(" DTK 支持 cmake")]),a._v(" "),e("h3",{attrs:{id:"make-之-find-package-用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#make-之-find-package-用法"}},[a._v("#")]),a._v(" make 之 find_package 用法")]),a._v(" "),e("p",[e("code",[a._v("find_package(xxx REQUIRED)")]),a._v(" 如果找到 xxx 库，就可以在接下来使用  "),e("code",[a._v("xxx_INCLUDE_DIRS")]),a._v(" 和 "),e("code",[a._v("xxx_LIBRARIES")]),a._v(" 这两个变量，比如：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("include_directories"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${xxx_INCLUDE_DIRS}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ntarget_link_libraries"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("exec "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${xxx_LIBRARIES}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("br"),a._v(" "),e("h3",{attrs:{id:"find-package-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#find-package-原理"}},[a._v("#")]),a._v(" find_package 原理")]),a._v(" "),e("p",[a._v("camke 搜索库并给变量赋值，依赖于 "),e("code",[a._v("FindXXX.cmake")]),a._v(" 文件和 "),e("code",[a._v("XXXConfig.cmake")]),a._v(" 文件。库的作者通常会提供这两个文件，以方便使用者调用。")]),a._v(" "),e("p",[a._v("find_package 采用两种模式搜索库：")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("Module 模式")]),a._v("：搜索 "),e("code",[a._v("CMAKE_MODULE_PATH")]),a._v(" 指定路径下的 "),e("code",[a._v("FindXXX.cmake")]),a._v(" 文件，执行该文件从而找到 XXX 库。具体查找库并给 "),e("code",[a._v("XXX_INCLUDE_DIRS")]),a._v(" 和 "),e("code",[a._v("XXX_LIBRARIES")]),a._v(" 两个变量赋值的操作由 "),e("code",[a._v("FindXXX.cmake")]),a._v(" 模块完成。")]),a._v(" "),e("li",[e("strong",[a._v("Config 模式")]),a._v("：搜索  "),e("code",[a._v("XXX_DIR")]),a._v(" 指定路径下的 "),e("code",[a._v("XXXConfig.cmake")]),a._v(" 文件，执行该文件从而找到 XXX 库。具体查找库并给 "),e("code",[a._v("XXX_INCLUDE_DIRS")]),a._v(" 和 "),e("code",[a._v("XXX_LIBRARIES")]),a._v(" 两个变量赋值的操作由 "),e("code",[a._v("XXXConfig.cmake")]),a._v(" 模块完成。")])]),a._v(" "),e("p",[a._v("cmake 默认采用 Module 模式，如果 Module 模式未找到库，才会采用 Config 模式。")]),a._v(" "),e("br"),a._v(" "),e("h3",{attrs:{id:"dtk-对-cmake-的-find-package-支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dtk-对-cmake-的-find-package-支持"}},[a._v("#")]),a._v(" DTK 对 cmake 的 find_package 支持")]),a._v(" "),e("p",[a._v("DTK 开发库在安装时，会安装对应的 cmake 文件，如下：")]),a._v(" "),e("p",[a._v("库名 "),e("code",[a._v("libdtkwidget-dev")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("/usr/lib/x86_64-linux-gnu/cmake/DtkWidget/DtkWidgetConfig.cmake\n")])])]),e("p",[a._v("库名 "),e("code",[a._v("libdtkcore-dev")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("/usr/lib/x86_64-linux-gnu/cmake/Dtk/DtkConfig.cmake\n/usr/lib/x86_64-linux-gnu/cmake/DtkCMake/DtkCMakeConfig.cmake\n/usr/lib/x86_64-linux-gnu/cmake/DtkCore/DtkCoreConfig.cmake\n/usr/lib/x86_64-linux-gnu/cmake/DtkTools/DtkToolsConfig.cmake\n")])])]),e("p",[a._v("库名 "),e("code",[a._v("libdtkgui-dev")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("/usr/lib/x86_64-linux-gnu/cmake/DtkGui/DtkGuiConfig.cmake\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);