# Nyan Profile

![Dark Theme](demo.png)

## About

Nyan Profile is a simple and extensible scaffold for building personal profile website.

## Features

- Static Generation with Next.js
- Styling with Tailwind CSS
- Configurable Layout
- Dark Mode
- Google Fonts
- Google Analytics
- Deploying to GitHub Pages with GitHub Actions

## Getting Started

### Automatic Setup

Create a new project by running the following command.

```bash
npm init @memochou1993/nyan-profile
```

Change directory into project.

```bash
cd nyan-profile
```

Start the development server.

```bash
npm run dev
```

### Manual Setup

Clone the project.

```bash
git clone git@github.com:memochou1993/nyan-profile.git
```

Change directory into project.

```bash
cd nyan-profile
```

Initialize a new Git repository.

```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

Install dependencies.

```bash
npm ci
```

Start the development server.

```bash
npm run dev
```

## Profiles

- [King Nyan II](https://memochou1993.github.io/nyan-profile/)
- [Memo Chou](https://profile.epoch.tw)

## Configuration

### Base URL

```json
{
  "basePath": "/<repository_name>"
}
```

### Theme

```json
{
  "theme": {
    "mode": "<light|dark>",
    "light": {
      "background": "<light_color>"
    },
    "dark": {
      "background": "<dark_color>"
    }
  }
}
```

### Meta

```json
{
  "meta": {
    "author": "<website_author>",
    "title": "<website_title>",
    "description": "<website_description>",
    "image": "<website_image_path>"
  }
}
```

### Components

#### Profile

```json
{
  "components": {
    "profile": {
      "enabled": true,
      "avatar": "<your_avatar_image_path>",
      "name": "<your_name>",
      "organization": "<your_organization>",
      "location": "<your_location>",
      "email": "<your_email>",
      "url": "<your_website_url>",
      "socialLinks": {
        "github": {
          "id": "<id>"
        },
        "facebook": {
          "id": "<id>"
        },
        "linkedin": {
          "id": "<id>"
        },
        "instagram": {
          "id": "<id>"
        },
        "telegram": {
          "id": "<id>"
        },
        "twitter": {
          "id": "<id>"
        }
      }
    }
  }
}
```

#### Header

```json
{
  "components": {
    "header": {
      "enabled": true,
      "components": {
        "themeSwitch": {
          "enabled": true
        }
      }
    }
  }
}
```

#### Sidebar

```json
{
  "components": {
    "sidebar": {
      "enabled": true
    }
  }
}
```

#### Footer

```json
{
  "components": {
    "footer": {
      "enabled": true
    }
  }
}
```

#### About

```json
{
  "components": {
    "about": {
      "enabled": true,
      "title": "About"
    }
  }
}
```

#### GoogleFonts

```json
{
  "components": {
    "googleFonts": {
      "enabled": true,
      "family": "<font_family>"
    }
  }
}
```

#### GoogleAnalytics

```json
{
  "components": {
    "googleAnalytics": {
      "enabled": true,
      "id": "<ga4_measurement_id>"
    }
  }
}
```

#### ProjectList

```json
{
  "components": {
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
  }
}
```

#### ArticleList

```json
{
  "components": {
    "articleList": {
      "enabled": false,
      "title": "Articles",
      "limit": 10,
      "source": "<rss_xml_path>",
      "entrySpec": {
        "key": "<entry_key>",
        "fields": {
          "title": "<title_key>",
          "link": "<link_key>",
          "published": "<published_date_key>"
        }
      }
    }
  }
}
```

## Deployment

### GitHub Pages

Enable GitHub Actions for the repository through the Actions tab.

Update `nyan.config.json` file.

```json
{
  "basePath": "/<repository_name>"
}
```

Commit and push changes to GitHub.

```bash
git add .
git commit -m "Update next.config.js"
git push
```

### Docker Compose

Update `nyan.config.json` file.

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
  <img src="https://contrib.rocks/image?repo=memochou1993/nyan-profile" width="50" />
</a>

## License

[MIT](LICENSE)
