# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"

pin "bmi_calc", to: "bmi_calc.js"
pin "weight_goal", to: "weight_goal.js"
pin "weight_change", to: "weight_change.js"
pin "preview", to: "preview.js"