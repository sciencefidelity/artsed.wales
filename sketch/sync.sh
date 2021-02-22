#! bin/zsh

# A simple script for automating scss and browser-sync.

browser-sync start --server --no-open --files "./css/*.css" "*.html" "./js/*.js" &
sass --watch ./scss/style.scss ./css/style.css &
sass --watch ./scss/logo.scss ./css/logo.css &
sass --watch ./scss/header.scss ./css/header.css &
sass --watch ./scss/venn.scss ./css/venn.css &
sass --watch ./scss/typography.scss ./css/typography.css &
sass --watch ./scss/quote.scss ./css/quote.css