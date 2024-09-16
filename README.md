
# yqni13 artcreation-dv
$\texttt{\color{teal}{v1.0.0-beta.3}}$


<br><br>

<div>
      <img src="public/assets/readme/responsive_overview.png">
</div>

### Technology

<div style="display:flex; align-items:center;">    
      <img src="https://img.shields.io/badge/Angular-%23DD0031.svg?logo=angular&logoColor=white">
      <img alt="Google Fonts" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F03%2FGoogle-Fonts-Logo.png&f=1&nofb=1&ipt=570b1eadbf10850285149faa90b47496e415ec5daf70efb973248c194025a6a5&ipo=images" style="height:auto; width:5%">
      <img src="public/assets/logo_ico/rxjs_logo32.ico" alt="RxJS">&nbsp;&nbsp;
      <img src="public/assets/logo_ico/json_logo28.ico" alt="JSON">&nbsp;&nbsp;
      <img src="public/assets/logo_ico/nodejs_logo32.ico" alt="JSON">&nbsp;&nbsp;
      <img src="public/assets/logo_ico/i18n_logo32.ico" alt="JSON">
</div>
<br>

### <a href="https://artcreation-dv.netlify.app/">TRY LIVE DEMO</a> (currently without contact form functionality [NodeJS backend])

<br>

## How to:

### Start

Get startet with `npm install` to create necessary modules and run `ng serve` to start on local dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. To activate the backend (to use email service for the contact form) run command `node server-custom.js` on port 3000.

### BUILD & DEPLOY
This project is currently hosted by Netlify <a href="https://app.netlify.com/">LINK</a> with the custom URL "https://artcreation-dv.netlify.app/" without backend functionality. Hosting is fully automated and only access to the repository is necessary to build the app and run deployment.

<br><br>

## Overview

### $\textsf{\color{teal}Features}$

<dl>
      <dd>:diamond_shape_with_a_dot_inside: Angular v18 standalone with routing + nested routes on id</dd>
      <dd>:turtle: Custom preload/lazy loading on viewport/scroll for gallery previews</dd>
      <dd>:clipboard: Custom form components (text-, textarea- & select-input)</dd>
      <dd>:newspaper: Custom carousel component</dd>
      <dd>:new_moon_with_face:/:sun_with_face: Custom color theme (dark/light mode)</dd>
      <dd>:wrench: Custom validation + service & pipes</dd>
      <dd>:e-mail: Mail service with node.js & nodemailer for Backend</dd>
      <dd>:signal_strength: Http interception + custom snackbar modal</dd>
      <dd>:closed_lock_with_key: Different protection layers for certain images (disabling right click; watermarks)</dd>
      <dd>:iphone: Responsive design 400px > width < 1800px via flexbox & media queries</dd>
</dl>

<br>

### $\textsf{\color{teal}Customized form}$

For contacting the artist regarding ordering a product or other requests, there is a form to fill in which works currently not in live version due to missing backend hosting. The combination of customized form components, validation structure and logic (frontend/backend service, nodemailer & Node.js) sends an email via predefined no-reply account to the artist. Custom validation checks for required input, correct format of necessary reference number and valid selection (see figure 2; message "ReferenceNr '561H65' does not exist").

<div align="center">
      <img src="public/assets/readme/responsive_form.jpg" alt="&nbsp;no picture found">
      Figure 2
</div>

<br>

### $\textsf{\color{teal}Customized snackbar / interceptor}$

In case of unexpected responses or to visually confirm actions, a customized snackbar will appear on the right upper side (or centered for mobile < 500px width). The snackbar can easily be constructed by 2 required inputs (title + type) or more advanced up to 5 input options. For better visual contrast, 4 types (error, info, success, warning) differ additionally in colors. Figure 3 shows an error message, that the email could not be sent (red highlighted) which is triggered by the response caught in the http-interceptor (case of no active backend).

<div align="center">
      <img src="public/assets/readme/responsive_snackbar.jpg" alt="&nbsp;no picture found">
      Figure 3
</div>

<br>

### $\textsf{\color{teal}Customized lazy loading / preload}$

Instead of using the predefined @defer blocks of Angular to provide lazy loading, this webpage uses a customized preload/lazy loading via HostListeners. Opening the "Gallery" component, all pictures inside the viewport will be rendered. Additionally, a certain number of images that are below the viewport get loaded in the same instance to provide a buffer of already rendered images when scrolling. HostListeners also keep preloading images when scrolling to optimize the user experience. Figure 4 shows the loading of the displaying 6 images inside the viewport + the next 3 rows of pre-rendered images in the network tab of DevTools.

<div align="center">
      <img src="public/assets/readme/custom-preload.gif" alt="&nbsp;no picture found">
      Figure 4
</div>

<br>

### $\textsf{\color{teal}Theme settings}$

The webpage offeres two theme settings: $\textsf{\color{gray}{dark mode}}$ & $\textsf{\color{goldenrod}{light mode}}$. The information on the active setting is stored in the localstorage with dark mode as default setting at the beginning.

<div align="center">
      <img src="public/assets/readme/responsive_darkmode.jpg">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src="public/assets/readme/responsive_lightmode.jpg">
      Figure 5
</div>

<br>

### $\textsf{\color{teal}Reactive images}$

Most of the images are linked with logic to either displaying more details or scaling up. In the archive, regarding news, text is displayed and click on the magnifier shows the image in max display resolution. The previews in the gallery open up the museums-view and all the details regarding the artwork. Another click on the picture also displays in max display resolution (see figure 6).

<div align="center">
      <img src="public/assets/readme/image_reactive.gif" alt="&nbsp;no picture found">
      Figure 6
</div>

<br><br>


## Updates

[list of all updates](update_protocol.md)
### $\textsf{last\ update\ 1.0.0-beta.2\ >>\ {\color{pink}1.0.0-beta.3}}$

- $\textsf{\color{green}Change:}$ Added customized preload/lazy loading to gallery.
- $\textsf{\color{green}Change:}$ Resized images to improve loading efficiency.
- $\textsf{\color{teal}Addition:}$ New content (features) added to README.

<br>

### Aimed objectives for next $\textsf{\color{green}minor}$ update:
<dl>
      <dd>- rename project</dd>
      <dd>- change host to deploy working backend</dd>
      <dd>- improve LocalStorage handling</dd>
      <dd>- disable/enable sending button of contact form until response intercepted</dd>
      <dd>- selection of numbers of articles to order via contact form</dd>
      <dd>- real text content</dd>
      <dd>- correct email accounts to recieve and send in BE</dd>
      <dd>- key listeners</dd>
      <dd>- text search in archive component</dd>
      <dd>- provide security standards: input sanitizations, content security policies & HttpOnly cookies</dd>
      <dd>- deploy a Web Application Manifest to make webpage into a progressive web app (PWA)</dd>
      <dd>- translation option de/en</dd>
      <dd>- custom 404 error page</dd>
      <dd>- print component content + changes in logic for gallery details & contact</dd>
</dl>
<br>

### Aimed objectives for next $\textsf{\color{cyan}major}$ update:
<dl>
      <dd>- direct pay option</dd>
      <dd>- admin interaction logic</dd>
</dl>
<br>
