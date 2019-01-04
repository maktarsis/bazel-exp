package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")
sass_binary(
    name = "todos-styles",
    src = "todos.component.scss",
    deps = ["//src/assets:shared"],
)

load("@angular//:index.bzl", "ng_module")
ng_module(
    name = "todos",
    srcs = [
        "todos.component.ts",
        "todos.module.ts",
    ],
    assets = [
        "todos.component.html",
        ":todos-styles",
    ],
    tsconfig = "//src/configs:tsconfig.json",
    deps = [
        "//src/app/shared/lib",
        "//src/app/shared/material",
        "//src/app/shared/reducers",
        "@angular//packages/common",
        "@angular//packages/core",
        "@angular//packages/forms",
        "@angular//packages/router",
        "@npm//@ngrx/store",
        "@rxjs",
    ],
)
