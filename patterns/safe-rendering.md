# Pattern: render text as text

**Context:** challenge metadata, imported notes or API results appear in a browser. Use DOM text nodes rather than trusting markup. Current browsers, no dependencies, MIT license.

```javascript
const heading = document.createElement('h3');
heading.textContent = record.title;
container.append(heading);
```

Checks: the title `<b>demo</b>` must appear literally, not as bold markup; missing titles should show a deliberate fallback; very long titles should wrap. Validate that title is a bounded string before rendering.

Links require their own protocol/host policy; text escaping does not make a URL safe. Do not place untrusted strings into styles, event handlers or script content. For rich Markdown, use a maintained sanitizer and a documented allowed-element policy. Plain text is simpler for catalog titles.
