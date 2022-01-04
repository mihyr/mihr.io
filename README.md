# My Portfolio: [mihr.io](https://mihr.io)

- This repo contains code and content of my portfolio website [mihr.io](https://mihr.io).
- Main pages are created using bootstrap framework, code is available in `bootstrap` folder.
- All project documentation pages were generated using [mihr.io-docs-engine](https://github.com/mihyr/mihr.io-docs-engine).

  - [mihr.io-docs-engine](https://github.com/mihyr/mihr.io-docs-engine) is my forked version of [cloudflare-docs-engine](https://github.com/cloudflare/cloudflare-docs-engine) with minor modifications.
  - my-docs-engine uses simple markdown files, hosted in `projects` folder to generate static html pages. 
  - I used [cloudflare workers](https://developers.cloudflare.com/workers/) to host the website.
  - The entire process is automated using [wrangler CLI tool](https://github.com/cloudflare/wrangler) and [github actions](https://docs.github.com/en/actions).
  - Github actions workflow is available in `.github/workflows/deploy.yml`

- Workflow:
  - Just add new markdown files to `projects` folder and commit to repo.
  - Github actions will automatically create a ubuntu docker instance, use `my-docs-engine` to generate static html pages, and deploy to cloudflare workers using wrangler cli tool.

- My reusable code snippets are available on [codepen/mihyr](https://codepen.io/mihyr/).
