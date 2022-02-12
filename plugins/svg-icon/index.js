import Vue from "vue";
import CSvgIcon from "@/components/CSvgIcon";

Vue.component("c-svg-icon", CSvgIcon);

// 第二個參數 false 則不遍歷該位置子層資料
const req = require.context("@/assets/img/icons", false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
