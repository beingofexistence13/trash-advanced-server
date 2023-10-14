// let repos=[];let cards = document.querySelectorAll('.wb-break-all');
// for (let card of cards) {
//     let a = card.querySelector('a');
//     repos.push({
//         title: a.innerText,
//         url: a.href
//     });
// }
// let jsonObject = JSON.stringify(repos);

// console.log(jsonObject);

const repos = [
    {
        "title": "docker-openvscode-server",
        "url": "https://github.com/beingofexistence/docker-openvscode-server"
    },
    {
        "title": "docker-code-server",
        "url": "https://github.com/beingofexistence/docker-code-server"
    },
    {
        "title": "code-server-railway",
        "url": "https://github.com/beingofexistence/code-server-railway"
    },
    {
        "title": "friday-max",
        "url": "https://github.com/beingofexistence/friday-max"
    },
    {
        "title": "theia-vscode",
        "url": "https://github.com/beingofexistence/theia-vscode"
    },
    {
        "title": "thirdweb-dashboard-web3",
        "url": "https://github.com/beingofexistence/thirdweb-dashboard-web3"
    },
    {
        "title": "givenus0026",
        "url": "https://github.com/beingofexistence/givenus0026"
    },
    {
        "title": "multiverse",
        "url": "https://github.com/beingofexistence/multiverse"
    },
    {
        "title": "appflow-native",
        "url": "https://github.com/beingofexistence/appflow-native"
    },
    {
        "title": "dx-native",
        "url": "https://github.com/beingofexistence/dx-native"
    },
    {
        "title": "nextjs-portfolio-pageview-counter",
        "url": "https://github.com/beingofexistence/nextjs-portfolio-pageview-counter"
    },
    {
        "title": "ai-photo-restorer",
        "url": "https://github.com/beingofexistence/ai-photo-restorer"
    },
    {
        "title": "inpainter-stable-diffusion",
        "url": "https://github.com/beingofexistence/inpainter-stable-diffusion"
    },
    {
        "title": "mongodb-starter-demo",
        "url": "https://github.com/beingofexistence/mongodb-starter-demo"
    },
    {
        "title": "mongodb-starter",
        "url": "https://github.com/beingofexistence/mongodb-starter"
    },
    {
        "title": "netlify-express",
        "url": "https://github.com/beingofexistence/netlify-express"
    },
    {
        "title": "netlify-alchemy-dapp-boilerplates",
        "url": "https://github.com/beingofexistence/netlify-alchemy-dapp-boilerplates"
    },
    {
        "title": "scribble-diffusion",
        "url": "https://github.com/beingofexistence/scribble-diffusion"
    },
    {
        "title": "nextjs-openai-doc-search-starter",
        "url": "https://github.com/beingofexistence/nextjs-openai-doc-search-starter"
    },
    {
        "title": "chatbot-ui",
        "url": "https://github.com/beingofexistence/chatbot-ui"
    },
    {
        "title": "nextjs-chat-demo",
        "url": "https://github.com/beingofexistence/nextjs-chat-demo"
    },
    {
        "title": "nothing",
        "url": "https://github.com/beingofexistence/nothing"
    },
    {
        "title": "hackIn",
        "url": "https://github.com/beingofexistence/hackIn"
    },
    {
        "title": "connect",
        "url": "https://github.com/beingofexistence/connect"
    },
    {
        "title": "nextjs-libraries",
        "url": "https://github.com/beingofexistence/nextjs-libraries"
    },
    {
        "title": "path-gradient",
        "url": "https://github.com/beingofexistence/path-gradient"
    },
    {
        "title": "splash-screen",
        "url": "https://github.com/beingofexistence/splash-screen"
    },
    {
        "title": "todo",
        "url": "https://github.com/beingofexistence/todo"
    },
    {
        "title": "laravel",
        "url": "https://github.com/beingofexistence/laravel"
    },
    {
        "title": "template-typescript-node",
        "url": "https://github.com/beingofexistence/template-typescript-node"
    },
    {
        "title": "express-typescript",
        "url": "https://github.com/beingofexistence/express-typescript"
    },
    {
        "title": "friday3",
        "url": "https://github.com/beingofexistence/friday3"
    },
    {
        "title": "app-directory",
        "url": "https://github.com/beingofexistence/app-directory"
    },
    {
        "title": "threejs-nextjs",
        "url": "https://github.com/beingofexistence/threejs-nextjs"
    }
]

for(let i = 0; i < repos.length; i++) {

    // console.log("Title: " + repos[i].title);
    // console.log("URL: " + repos[i].url);
    console.log(
        `
        if git clone ${repos[i].url} ${repos[i].title.toLowerCase()} && cd ${repos[i].title.toLowerCase()} && rm -rf .git && cd ..; then echo "${repos[i].title.toUpperCase()} Clone Successfull!!!"
        else echo "Error, ${repos[i].title.toUpperCase()} Github Repository Link Has Some Problems" && git status && echo "Trying, To Clone Next Repo"
        fi
        `);

}