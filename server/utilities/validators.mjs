import * as squint_core from 'squint-cljs/core.js';
var validator = function (validator_map) {
return function (obj) {
return squint_core.reduce((function (errors, p__1) {
const vec__15 = p__1;
const field_name6 = squint_core.nth(vec__15, 0, null);
const map__47 = squint_core.nth(vec__15, 1, null);
const validator8 = map__47;
const fn9 = squint_core.get(map__47, "fn");
const map_fn10 = squint_core.get(map__47, "map-fn");
const reason11 = squint_core.get(map__47, "reason");
const vmap_fn12 = (() => {
const or__24043__auto__13 = map_fn10;
if (squint_core.truth_(or__24043__auto__13)) {
return or__24043__auto__13;} else {
return function (_PERCENT_1) {
return squint_core.get(_PERCENT_1, field_name6);
};}
})();
const vfn14 = (squint_core.truth_((() => {
const c__24003__auto__15 = RegExp;
const x__24004__auto__16 = fn9;
const ret__24005__auto__17 = (x__24004__auto__16 instanceof c__24003__auto__15);
return ret__24005__auto__17;
})())) ? ((function (_PERCENT_1) {
return squint_core.re_find(fn9, _PERCENT_1);
})) : (("else") ? (fn9) : (null));
if (squint_core.truth_(vfn14(vmap_fn12(obj)))) {
return errors;} else {
return squint_core.conj(errors, reason11);}
}), [], validator_map);
};
};

export { validator }
