# Nyan Profile

![Dark Theme](demo.png)

## Demo

- [https://memochou1993.github.io/nyan-profile/](https://memochou1993.github.io/nyan-profile/)

## Getting Started

Clone the repository.

```bash
git clone https://github.com/memochou1993/nyan-profile
cd nyan-profile
```

Install dependencies.

```bash
npm ci
```

Compile for development.

```bash
npm run dev
```

Generate static project for production.

```bash
npm run build
```

## Configuration

Update `assets/config.json` file.

```json
{
  "basePath": "/<repository_name>",
  "theme": {
    "mode": "<light|dark>",
    "light": {
      "background": "<light_color>"
    },
    "dark": {
      "background": "<dark_color>"
    }
  },
  "meta": {
    "author": "<name>",
    "title": "<website_title>",
    "description": "<website_description>",
    "image": "<website_image_path>"
  },
  "component": {
    "profile": {
      "enabled": true,
      "avatar": "<avatar_image_path>",
      "name": "<name>",
      "organization": "<organization>",
      "location": "<location>",
      "email": "<email>",
      "url": "<website_url>",
      "socialLinks": [
        {
          "type": "github",
          "id": "<id>"
        },
        {
          "type": "facebook",
          "id": "<id>"
        },
        {
          "type": "linkedin",
          "id": "<id>"
        },
        {
          "type": "instagram",
          "id": "<id>"
        },
        {
          "type": "telegram",
          "id": "<id>"
        },
        {
          "type": "twitter",
          "id": "<id>"
        }
      ]
    },
    "header": {
      "enabled": true,
      "component": {
        "themeSwitch": {
          "enabled": true
        }
      }
    },
    "sidebar": {
      "enabled": true
    },
    "footer": {
      "enabled": true
    },
    "about": {
      "enabled": true,
      "title": "About"
    },
    "projectList": {
      "enabled": true,
      "title": "Projects",
      "limit": 3,
      "items": [
        {
          "name": "<project_name>",
          "link": "<project_link>",
          "image": "<project_image>",
          "tags": [
            "<project_tag>"
          ],
          "button": {
            "text": "<button_text>"
          }
        }
      ]
    }
  },
  "googleFonts": {
    "family": "<font_family>"
  },
  "googleAnalytics": {
    "id": "<ga4_measurement_id>"
  }
}
```

## Deployment

### GitHub Pages

Update `assets/config.json` file.

```json
{
  "basePath": "/<repository_name>"
}
```

Push to GitHub.

```bash
git add .
git commit -m "Update next.config.js"
git push
```

### Docker Compose

Update `assets/config.json` file.

```json
{
  "basePath": ""
}
```

Build and run app.

```bash
docker compose up -d
```

## Contributors

<a href="https://github.com/memochou1993/nyan-profile/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=memochou1993/nyan-profile" />
</a>

## License

[MIT](LICENSE)
