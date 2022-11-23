# My Profile

![Dark Theme](demo.png)

## Demo

- [https://memochou1993.github.io/my-profile/](https://memochou1993.github.io/my-profile/)

## Getting Started

Install dependencies.

```bash
npm ci
```

Compiles and hot-reloads for development.

```bash
npm run dev
```

Generates static project.

```bash
npm run build
```

## Configuration

Update `assets/config.json` file.

```json
{
  "theme": {
    "mode": "dark|light",
    "light": {
      "background": "#93c5fd"
    },
    "dark": {
      "background": "#111827"
    }
  },
  "meta": {
    "author": "your name",
    "title": "your website title",
    "description": "your website description",
    "image": "your website image"
  },
  "profile": {
    "name": "your name",
    "organization": "your organization",
    "email": "your email",
    "location": "your location",
    "url": "your website url"
  },
  "layout": {
    "header": {
      "enabled": true
    },
    "themeSwitch": {
      "enabled": true
    },
    "sidebar": {
      "enabled": true
    },
    "footer": {
      "enabled": true
    }
  },
  "socialLinks": {
    "github": {
      "enabled": true,
      "id": ""
    },
    "facebook": {
      "enabled": true,
      "id": ""
    },
    "linkedin": {
      "enabled": true,
      "id": ""
    },
    "instagram": {
      "enabled": true,
      "id": ""
    },
    "telegram": {
      "enabled": true,
      "id": ""
    },
    "twitter": {
      "enabled": true,
      "id": ""
    }
  },
  "googleAnalytics": {
    "enabled": true,
    "id": ""
  }
}
```

## Deployment

### GitHub Pages

Update `next.config.js` file.

```js
const nextConfig = {
  basePath: '/my-profile',
};
```

Push to GitHub.

```bash
git add .
git commit -m "Update next.config.js"
git push
```

### Docker Compose

Update `next.config.js` file.

```js
const nextConfig = {
  basePath: '',
};
```

Build and run app.

```bash
docker compose up -d
```

## Contributors

<a href="https://github.com/memochou1993/my-profile/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=memochou1993/my-profile" />
</a>