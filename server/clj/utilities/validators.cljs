(ns utilities.validators)


(defn validator
  [validator-map]
  (fn [obj]
    (reduce
     (fn [errors [field-name {:keys [fn map-fn reason] :as validator}]]
       (let [vmap-fn (or map-fn #(get % field-name))
             vfn (cond (instance? js/RegExp fn) #(re-find fn %)
                       :else fn)]
         (if (vfn (vmap-fn obj))
           errors (conj errors reason))))
     [] validator-map)))

(comment

  ((validator
    {:name {:fn identity
            :reason "name should not be empty"}
     :age {:fn (partial <= 18)
            :reason "age must be greater than or equal to 18"}})
   {:name "john" :age 20})
  ,)
