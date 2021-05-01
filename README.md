# mailto template

basic template to create a email campaign. just modify the `data.js` and deploy!

### How to use

1. Fork this repository
2. Edit `data.js` to fill in all your campaign information
3. Deploy using github pages. Enjoy!

`title` supports only text

`description` supports text and can also render HTML

`to`,`cc`,`bcc` are arrays of email strings, set [] for none

`subject` supports only text

`body` supports text with escape sequences like `\n`, `\t` etc.

to change campaign image upload the image in `images` folder, and add the relative path in `image` in `data.js`


To customize styles edit `style.css`

To add new elements edit `index.html`

JS code in `script.js`
