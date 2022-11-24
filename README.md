# My Profile

![Dark Theme](demo.png)

## Demo

- [https://memochou1993.github.io/my-profile/](https://memochou1993.github.io/my-profile/)

## Getting Started

Fork and clone the repository.

```bash
git clone https://github.com/memochou1993/my-profile
cd my-profile
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
    "image": "your website image path"
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
      "id": ""
    },
    "facebook": {
      "id": ""
    },
    "linkedin": {
      "id": ""
    },
    "instagram": {
      "id": ""
    },
    "telegram": {
      "id": ""
    },
    "twitter": {
      "id": ""
    }
  },
  "googleAnalytics": {
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

## License

[MIT](LICENSE)
