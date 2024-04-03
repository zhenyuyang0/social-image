# social-image

At the moment, there is no Github API for setting social media preview images. This is CLI tool that uses [@mheap](https://github.com/mheap)'s [github-social-image](https://github.com/mheap/github-social-image) to set a social image of the current repo via command.

![Example]()

## Installation

```bash
npm install -g github-social-image
```

## Usage

Authentication details can be provided in the environment or as CLI arguments

| Field     | Environment Variable | CLI option    |
| --------- | -------------------- | ------------- |
| Password  | `GITHUB_PASSWORD`    | `--password` |
| OTP       | `GITHUB_OTP`         | `--otp`      |

```bash
social-image \
  --password your_password \
  --theme dark \
  --font inter \
  --background plus \
  --logo https://www.myimage.com/myimage.svg \
  --language true \
  --owner true \
  --stars true \
  --forks true \
  --issues true \
  --pulls true \
  --description "This is the description of the repo" \
  --otp 123456 
```

To debug

```bash
DEBUG=gsi:entrypoint,gsi:browser \
social-image \
  --password your_password \
  --theme dark \
  --font inter \
  --background plus \
  --logo https://www.myimage.com/myimage.svg \
  --language true \
  --owner true \
  --stars true \
  --forks true \
  --issues true \
  --pulls true \
  --description "This is the description of the repo" \
  --otp 123456 \
  --show
```

### Behaviour options

| Flag     | Description                                                                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| password | GitHub account password                                                                                                                                                     |
| otp      | One Time Password code, required for accounts that use 2FA                                                                                                                  |
| show     | Show the [Puppeteer](https://pptr.dev/) browser for debug purposes                                                                                                                               |

### Image related options

| Flag        | Description                                 | Default     | Possible values                                                                                                                  |
| ----------- | ------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| theme       | Theme to use                                | `light`     | light, dark                                                                                                                      |
| font        | Font to use                                 | `inter`     | inter, bitter, raleway, rokkitt, source-code-pro, koho                                                                           |
| background  | Background to use                           | `plus`      | signal, charlie-brown, formal-invitation, plus, circuit-board, overlapping-hexagons, brick-wall, floating-cogs, diagonal-stripes |
| logo        | Logo to use                                 | Github Logo | Any URL that returns an image                                                                                                    |
| language    | Show the language icon                      | `true`      | N/A                                                                                                                              |
| owner       | Show the owner in addition to the repo name | `true`      | N/A                                                                                                                              |
| stars       | Show the number of stars                    | `false`     | N/A                                                                                                                              |
| forks       | Show the number of forks                    | `false`     | N/A                                                                                                                              |
| issues      | Show the number of issues                   | `false`     | N/A                                                                                                                              |
| pulls       | Show the number of pulls                    | `false`     | N/A                                                                                                                              |
| description | Description to use                          | N/A         | Specify as `--description` to use the description from the repo, or `--description "Text Here" to use a custom description       |
