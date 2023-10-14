#!/bin/bash

# JavaScript array of repos
declare -a repos=(
    "https://github.com/beingofexistence/docker-openvscode-server"
    "https://github.com/beingofexistence/docker-code-server"
    "https://github.com/beingofexistence/docker-openvscode-server"
    "https://github.com/beingofexistence/docker-code-server"
    "https://github.com/beingofexistence/code-server-railway"
    "https://github.com/beingofexistence/friday-max"
    "https://github.com/beingofexistence/theia-vscode"
    "https://github.com/beingofexistence/thirdweb-dashboard-web3"
    "https://github.com/beingofexistence/givenus0026"
    "https://github.com/beingofexistence/multiverse"
    "https://github.com/beingofexistence/appflow-native"
    "https://github.com/beingofexistence/dx-native"
    "https://github.com/beingofexistence/nextjs-portfolio-pageview-counter"
    "https://github.com/beingofexistence/ai-photo-restorer"
    "https://github.com/beingofexistence/inpainter-stable-diffusion"
    "https://github.com/beingofexistence/mongodb-starter-demo"
    "https://github.com/beingofexistence/mongodb-starter"
    "https://github.com/beingofexistence/netlify-express"
    "https://github.com/beingofexistence/netlify-alchemy-dapp-boilerplates"
    "https://github.com/beingofexistence/scribble-diffusion"
    "https://github.com/beingofexistence/nextjs-openai-doc-search-starter"
    "https://github.com/beingofexistence/chatbot-ui"
    "https://github.com/beingofexistence/nextjs-chat-demo"
    "https://github.com/beingofexistence/nothing"
    "https://github.com/beingofexistence/hackIn"
    "https://github.com/beingofexistence/connect"
    "https://github.com/beingofexistence/nextjs-libraries"
    "https://github.com/beingofexistence/path-gradient"
    "https://github.com/beingofexistence/splash-screen"
    "https://github.com/beingofexistence/todo"
    "https://github.com/beingofexistence/laravel"
    "https://github.com/beingofexistence/template-typescript-node"
    "https://github.com/beingofexistence/express-typescript"
    "https://github.com/beingofexistence/friday3"
    "https://github.com/beingofexistence/app-directory"
    "https://github.com/beingofexistence/threejs-nextjs"
)

# Loop over all repo URLs
for repo in "${repos[@]}"
do
    # Extract owner and repo name from URL
    owner=$(echo $repo | cut -d'/' -f4)
    repo_name=$(echo $repo | cut -d'/' -f5)

    # Use curl to send DELETE request to GitHub API
    curl -X DELETE -H "Authorization: token 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" "https://api.github.com/repos/$owner/$repo_name"
done
